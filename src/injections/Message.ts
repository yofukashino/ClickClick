import { webpack } from "replugged";
import { constants as DiscordConstants, users as UltimateUserStore } from "replugged/common";
import { PluginInjector, SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";
import Utils from "../lib/utils";
import Types from "../types";
export default (): void => {
  const {
    ChannelStore,
    EditMessageStore,
    MessageActions,
    MessageConstructor,
    MoreMessageActions,
    PendingReplyStore,
  } = Modules;
  const BaseMessage = webpack.getFunctionKeyBySource(MessageConstructor, "zalgo");
  PluginInjector.before(MessageConstructor, BaseMessage, ([props, ...args]) => {
    const message: Types.Message = props.childrenMessageContent?.props.message;
    const channel: Types.Channel = ChannelStore.getChannel(message?.channel_id);

    if (
      !message ||
      !channel ||
      (!Modules.PermissionStore.can(DiscordConstants.Permissions.SEND_MESSAGES, channel) &&
        !channel?.isPrivate?.())
    )
      return [props, ...args];

    props.onDoubleClick = (clickEvent) => {
      if (
        Utils.checkForModifier(
          SettingValues.get("copy", defaultSettings.copy),
          SettingValues.get("copyModifier", defaultSettings.copyModifier),
          clickEvent,
        )
      ) {
        clickEvent.preventDefault();
        clickEvent.stopPropagation();
        DiscordNative.clipboard.copy(message.content);
      }
      if (
        EditMessageStore.getEditingMessageId(message.channel_id) == message.id ||
        PendingReplyStore.getPendingReply(message.channel_id)?.message.id == message.id
      )
        return;
      if (
        Utils.checkForModifier(
          SettingValues.get("edit", defaultSettings.edit),
          SettingValues.get("editModifier", defaultSettings.editModifier),
          clickEvent,
        ) &&
        message?.author?.id == UltimateUserStore.getCurrentUser()?.id
      ) {
        clickEvent.preventDefault();
        clickEvent.stopPropagation();
        return MessageActions.startEditMessage(message.channel_id, message.id, message.content);
      }
      if (
        Utils.checkForModifier(
          SettingValues.get("reply", defaultSettings.reply),
          SettingValues.get("replyModifier", defaultSettings.replyModifier),
          clickEvent,
        )
      ) {
        clickEvent.preventDefault();
        clickEvent.stopPropagation();
        MoreMessageActions.createPendingReply({
          channel,
          message,
          shouldMention: true,
          showMentionToggle: !channel.isPrivate(),
        });
      }
    };
    return [props, ...args];
  });
};
