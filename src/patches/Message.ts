import { webpack } from "replugged";
import { PluginInjector, SettingValues, UserStore } from "../index";
import {
  ChannelStore,
  DiscordNative,
  MessageActions,
  MessageClasses,
  MessageConstructor,
  MoreMessageActions,
} from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";
import * as Utils from "../lib/utils";
import * as Types from "../types";
export const patchMessage = (): void => {
  const defaultFunction = webpack.getFunctionKeyBySource(
    MessageConstructor,
    /\.compact.*\.zalgo.*\.childrenMessageContent/,
  ) as unknown as string;
  PluginInjector.before(MessageConstructor, defaultFunction, (args: [Types.messageDiv]) => {
    const [messageDiv] = args;
    if (!messageDiv || messageDiv?.className?.includes(MessageClasses.selected)) return args;
    const message = Utils.findInTree(messageDiv, (m) =>
      Utils.hasProps(m, ["author", "content"]),
    ) as Types.Message;
    if (!message) return args;
    PluginInjector.instead(
      messageDiv,
      "onClick",
      (args: [Types.MouseEvent], res: Types.DefaultTypes.AnyFunction) => {
        const [clickEvent] = args;
        if (clickEvent.detail <= 1) return res(...args);
        if (
          Utils.checkForModifier(
            SettingValues.get("copy", defaultSettings.copy),
            SettingValues.get("copyModifier", defaultSettings.copyModifier),
            clickEvent,
          )
        )
          DiscordNative.clipboard.copy(message.content);
        console.log(message?.author?.id, UserStore.getCurrentUser()?.id);
        if (
          Utils.checkForModifier(
            SettingValues.get("edit", defaultSettings.edit),
            SettingValues.get("editModifier", defaultSettings.editModifier),
            clickEvent,
          ) &&
          message?.author?.id == UserStore.getCurrentUser()?.id
        )
          return MessageActions.startEditMessage(message.channel_id, message.id, message.content);
        if (
          Utils.checkForModifier(
            SettingValues.get("reply", defaultSettings.reply),
            SettingValues.get("replyModifier", defaultSettings.replyModifier),
            clickEvent,
          )
        )
          MoreMessageActions.replyToMessage(
            ChannelStore.getChannel(message.channel_id),
            message,
            clickEvent,
          );
        return res(...args);
      },
    );
    return args;
  });
};
