import { webpack } from "replugged";
import {
  channels as UltimateChannelStore,
  messages as UltimateMessageStore,
  users as UltimateUserStore,
} from "replugged/common";
import { PluginInjector, SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";
import Utils from "../lib/utils";
const Pressed = new Map<string, boolean>();
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
    if (
      (SettingValues.get("editNagivation", defaultSettings.editNagivation) ||
        SettingValues.get("replyNagivation", defaultSettings.replyNagivation)) &&
      !(
        SettingValues.get("editNagivation", defaultSettings.editNagivation) ===
          SettingValues.get("replyNagivation", defaultSettings.replyNagivation) &&
        SettingValues.get("editNagivationModifier", defaultSettings.editNagivationModifier) ===
          SettingValues.get("replyNagivationModifier", defaultSettings.replyNagivationModifier)
      )
    ) {
      const originalKeyDown = args[0].onKeyDown;
      args[0].onKeyDown = (e: React.KeyboardEvent) => {
        if (
          (e.key === "ArrowUp" || e.key === "ArrowDown") &&
          (Utils.checkForModifier(
            SettingValues.get("editNagivation", defaultSettings.editNagivation),
            SettingValues.get("editNagivationModifier", defaultSettings.editNagivationModifier),
            e,
          ) ||
            Utils.checkForModifier(
              SettingValues.get("replyNagivation", defaultSettings.replyNagivation),
              SettingValues.get("replyNagivationModifier", defaultSettings.replyNagivationModifier),
              e,
            ))
        ) {
          e.preventDefault();
          e.stopPropagation();
        }
        if (
          Utils.checkForModifier(
            SettingValues.get("editNagivation", defaultSettings.editNagivation),
            SettingValues.get("editNagivationModifier", defaultSettings.editNagivationModifier),
            e,
          ) &&
          e.key === "ArrowUp" &&
          !Pressed.get("ArrowUp")
        ) {
          Pressed.set("ArrowUp", true);
          const CurrentChannelId = args[0].channelId;
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
          Utils.checkForModifier(
            SettingValues.get("replyNagivation", defaultSettings.replyNagivation),
            SettingValues.get("replyNagivationModifier", defaultSettings.replyNagivationModifier),
            e,
          ) &&
          e.key === "ArrowUp" &&
          !Pressed.get("ArrowUp")
        ) {
          Pressed.set("ArrowUp", true);
          const CurrentChannelId = args[0].channelId;
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
        if (
          Utils.checkForModifier(
            SettingValues.get("editNagivation", defaultSettings.editNagivation),
            SettingValues.get("editNagivationModifier", defaultSettings.editNagivationModifier),
            e,
          ) &&
          e.key === "ArrowDown" &&
          !Pressed.get("ArrowDown")
        ) {
          Pressed.set("ArrowDown", true);
          const CurrentChannelId = args[0].channelId;
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
          Utils.checkForModifier(
            SettingValues.get("replyNagivation", defaultSettings.replyNagivation),
            SettingValues.get("replyNagivationModifier", defaultSettings.replyNagivationModifier),
            e,
          ) &&
          e.key === "ArrowDown" &&
          !Pressed.get("ArrowDown")
        ) {
          Pressed.set("ArrowDown", true);
          const CurrentChannelId = args[0].channelId;
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
      const originalKeyUp = args[0].onKeyUp;
      args[0].onKeyUp = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowUp") {
          e.preventDefault();
          e.stopPropagation();
          Pressed.set("ArrowUp", false);
        }
        if (e.key === "ArrowDown") {
          e.preventDefault();
          e.stopPropagation();
          Pressed.set("ArrowDown", false);
        }
        originalKeyUp(e);
      };
    }
    return args;
  });
};
