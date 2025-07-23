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
    const [{ channelId: CurrentChannelId, onKeyDown: originalKeyDown }] = args;
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
      originalKeyDown[PatchedCC] ||
      !CurrentChannelId ||
      !(
        Modules.PermissionStore.can(DiscordConstants.Permissions.VIEW_CHANNEL, channel) ||
        channel?.isPrivate?.()
      ) ||
      (!editNagivation && !replyNagivation) ||
      (editNagivation === replyNagivation && editNagivationModifier === replyNagivationModifier)
    )
      return args;

    args[0].onKeyDown = (e: React.KeyboardEvent) => {
      const isArrowUp = e.key === "ArrowUp";
      const isArrowDown = e.key === "ArrowDown";
      const isEditNagivation = Utils.checkForModifier(editNagivation, editNagivationModifier, e);
      const isReplyNagivation = Utils.checkForModifier(replyNagivation, replyNagivationModifier, e);

      if (e.repeat || (!isArrowUp && !isArrowDown) || (!isEditNagivation && !isReplyNagivation))
        return originalKeyDown(e);

      const Messages = UltimateMessageStore.getMessages(CurrentChannelId).toArray();
      const UserMessages = Messages.filter(
        (c) => c.author.id === UltimateUserStore.getCurrentUser().id,
      );
      const EditingMessageId = EditMessageStore.getEditingMessageId(CurrentChannelId);

      e.preventDefault();
      e.stopPropagation();

      switch (true) {
        case isEditNagivation && isArrowUp: {
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
          break;
        }

        case isReplyNagivation && isArrowUp: {
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
          break;
        }

        case isEditNagivation && isArrowDown: {
          const UserMessagesReverse = UserMessages.reverse();
          const MessageToEdit =
            UserMessagesReverse[
              (EditingMessageId
                ? UserMessagesReverse.findIndex((c) => c.id === EditingMessageId)
                : 0) - 1
            ];
          if (MessageToEdit)
            MessageActions.startEditMessage(
              MessageToEdit.channel_id,
              MessageToEdit.id,
              MessageToEdit.content,
            );
          else MessageActions.endEditMessage(CurrentChannelId, "");
          break;
        }

        case isReplyNagivation && isArrowDown: {
          const MessagesReverse = Messages.reverse();
          const ReplyingMessageId = PendingReplyStore.getPendingReply(CurrentChannelId)?.message.id;
          const MessageToReply =
            MessagesReverse[
              (ReplyingMessageId
                ? MessagesReverse.findIndex((c) => c.id === ReplyingMessageId)
                : 0) - 1
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
          break;
        }
      }

      originalKeyDown(e);
    };

    args[0].onKeyDown[PatchedCC] = true;

    return args;
  });
};
