import { plugins, webpack } from "replugged";
import {
  constants as DiscordConstants,
  messages as UltimateMessageStore,
  users as UltimateUserStore,
} from "replugged/common";
import { PluginInjector, SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";
import Utils from "../lib/utils";
const PatchedCC = Symbol("ClickClick");
export default (): void => {
  const {
    ChannelStore,
    EditMessageStore,
    MessageActions,
    MoreMessageActions,
    PendingReplyStore,
    Slate,
  } = Modules;
  const Editable = webpack.getFunctionKeyBySource(Slate, "isDraggingInternally");
  PluginInjector.before(Slate, Editable, (args) => {
    const CurrentChannelId = args[0].channelId;
    const channel = ChannelStore.getChannel(CurrentChannelId);
    const editNagivation = SettingValues.get("editNagivation", defaultSettings.editNagivation);
    const replyNagivation = SettingValues.get("replyNagivation", defaultSettings.replyNagivation);
    const editNagivationModifier = SettingValues.get(
      "editNagivationModifier",
      defaultSettings.editNagivationModifier,
    );
    const replyNagivationModifier = SettingValues.get(
      "replyNagivationModifier",
      defaultSettings.replyNagivationModifier,
    );
    if (
      !CurrentChannelId ||
      !(
        Modules.PermissionStore.can(DiscordConstants.Permissions.VIEW_CHANNEL, channel) ||
        channel?.isPrivate?.()
      ) ||
      (!editNagivation && !replyNagivation) ||
      (editNagivation === replyNagivation && editNagivationModifier === replyNagivationModifier)
    )
      return args;

    const originalKeyDown = args[0].onKeyDown;
    if (!originalKeyDown[PatchedCC])
      args[0].onKeyDown = (e: React.KeyboardEvent) => {
        if (
          (e.key === "ArrowUp" || e.key === "ArrowDown") &&
          (Utils.checkForModifier(editNagivation, editNagivationModifier, e) ||
            Utils.checkForModifier(replyNagivation, replyNagivationModifier, e))
        ) {
          e.preventDefault();
          e.stopPropagation();
        }
        if (e.repeat) {
          originalKeyDown(e);
          return;
        }
        if (
          Utils.checkForModifier(editNagivation, editNagivationModifier, e) &&
          e.key === "ArrowUp"
        ) {
          const Messages = UltimateMessageStore.getMessages(CurrentChannelId);
          const EditingMessageId = EditMessageStore.getEditingMessageId(CurrentChannelId);
          const UserMessages = Messages.toArray().filter(
            (c) => c.author.id === UltimateUserStore.getCurrentUser().id,
          );
          const MessageToEdit = UserMessages.at(
            (EditingMessageId
              ? UserMessages.findIndex((c) => c.id === EditingMessageId) || NaN
              : 0) - 1,
          );
          if (MessageToEdit)
            MessageActions.startEditMessage(
              MessageToEdit.channel_id,
              MessageToEdit.id,
              MessageToEdit.content,
            );
          else MessageActions.endEditMessage(CurrentChannelId, "");
        }
        if (
          Utils.checkForModifier(replyNagivation, replyNagivationModifier, e) &&
          e.key === "ArrowUp"
        ) {
          const Messages = UltimateMessageStore.getMessages(CurrentChannelId).toArray();
          const ReplyingMessageId = PendingReplyStore.getPendingReply(CurrentChannelId)?.message.id;
          const MessageToReply = Messages.at(
            (ReplyingMessageId ? Messages.findIndex((c) => c.id === ReplyingMessageId) || NaN : 0) -
              1,
          );
          if (MessageToReply) {
            MoreMessageActions.createPendingReply({
              channel: ChannelStore.getChannel(MessageToReply.channel_id),
              message: MessageToReply,
              shouldMention: !(
                plugins.plugins.has("me.puyodead1.NoReplyMention") &&
                plugins.getDisabled().includes("me.puyodead1.NoReplyMention")
              ),
              showMentionToggle: !ChannelStore.getChannel(MessageToReply.channel_id).isPrivate(),
            });
            MessageActions.jumpToMessage({
              channelId: MessageToReply.channel_id,
              messageId: MessageToReply.id,
              flash: true,
            });
          } else MoreMessageActions.deletePendingReply(CurrentChannelId);
        }
        if (
          Utils.checkForModifier(editNagivation, editNagivationModifier, e) &&
          e.key === "ArrowDown"
        ) {
          const Messages = UltimateMessageStore.getMessages(CurrentChannelId);
          const EditingMessageId = EditMessageStore.getEditingMessageId(CurrentChannelId);
          const UserMessages = Messages.toArray()
            .reverse()
            .filter((c) => c.author.id === UltimateUserStore.getCurrentUser().id);
          const MessageToEdit =
            UserMessages[
              (EditingMessageId ? UserMessages.findIndex((c) => c.id === EditingMessageId) : 0) - 1
            ];
          if (MessageToEdit)
            MessageActions.startEditMessage(
              MessageToEdit.channel_id,
              MessageToEdit.id,
              MessageToEdit.content,
            );
          else MessageActions.endEditMessage(CurrentChannelId, "");
        }
        if (
          Utils.checkForModifier(replyNagivation, replyNagivationModifier, e) &&
          e.key === "ArrowDown"
        ) {
          const Messages = UltimateMessageStore.getMessages(CurrentChannelId).toArray().reverse();
          const ReplyingMessageId = PendingReplyStore.getPendingReply(CurrentChannelId)?.message.id;
          const MessageToReply =
            Messages[
              (ReplyingMessageId ? Messages.findIndex((c) => c.id === ReplyingMessageId) : 0) - 1
            ];
          if (MessageToReply) {
            MoreMessageActions.createPendingReply({
              channel: ChannelStore.getChannel(MessageToReply.channel_id),
              message: MessageToReply,
              shouldMention: true,
              showMentionToggle: !ChannelStore.getChannel(MessageToReply.channel_id).isPrivate(),
            });
            MessageActions.jumpToMessage({
              channelId: MessageToReply.channel_id,
              messageId: MessageToReply.id,
              flash: true,
            });
          } else MoreMessageActions.deletePendingReply(CurrentChannelId);
        }
        originalKeyDown(e);
      };
    args[0].onKeyDown[PatchedCC] = true;

    return args;
  });
};
