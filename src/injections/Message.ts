import { webpack } from "replugged";
import { users as UltimateUserStore } from "replugged/common";
import { PluginInjector, SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";
import Utils from "../lib/utils";
import Types from "../types";
export default (): void => {
  const { ChannelStore, MessageActions, MessageConstructor, MoreMessageActions } = Modules;
  const Memo = webpack.getExportsForProps<Types.GenericMemo>(MessageConstructor, ["type"]);
  PluginInjector.after(
    Memo,
    "type",
    ([{ message }]: [{ message: Types.Message }], res: Types.Tree) => {
      const messageDiv = Utils.findInReactTree(
        res,
        (m) =>
          Object.hasOwnProperty.call(m, "onClick") &&
          Object.hasOwnProperty.call(m, "onContextMenu"),
      ) as Types.MessageDiv;
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
          MoreMessageActions.createPendingReply({
            channel: ChannelStore.getChannel(message.channel_id),
            message,
            shouldMention: true,
            showMentionToggle: !ChannelStore.getChannel(message.channel_id).isPrivate(),
          });
      };
      return res;
    },
  );
};
