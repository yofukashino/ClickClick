import { users as UltimateUserStore } from "replugged/common";
import { PluginInjector, SettingValues } from "../index";
import {
  ChannelStore,
  DiscordNative,
  MessageActions,
  MessageConstructor,
  MoreMessageActions,
} from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";
import Utils from "../lib/utils";
import * as Types from "../types";
export default (): void => {
  PluginInjector.after(
    MessageConstructor.default,
    "type",
    ([{ message }]: [{ message: Types.Message }], res: Types.Tree) => {
      const messageDiv = Utils.findInReactTree(
        res,
        (m) =>
          Object.hasOwnProperty.call(m, "onClick") &&
          Object.hasOwnProperty.call(m, "onContextMenu"),
      ) as Types.messageDiv;
      messageDiv.onDoubleClick = (clickEvent) => {
        if (
          Utils.checkForModifier(
            SettingValues.get("copy", defaultSettings.copy),
            SettingValues.get("copyModifier", defaultSettings.copyModifier),
            clickEvent,
          )
        )
          DiscordNative.clipboard.copy(message.content);
        if (
          Utils.checkForModifier(
            SettingValues.get("edit", defaultSettings.edit),
            SettingValues.get("editModifier", defaultSettings.editModifier),
            clickEvent,
          ) &&
          message?.author?.id == UltimateUserStore.getCurrentUser()?.id
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
      };
      return res;
    },
  );
};
