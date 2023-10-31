import {
  channels as UltimateChannelStore,
  messages as UltimateMessageStore,
  users as UltimateUserStore,
} from "replugged/common";
import { PluginInjector, SettingValues } from "../index";
import { EditMessageStore, MessageActions, Slate } from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";
const Pressed = new Map<string, boolean>();
export default (): void => {
  PluginInjector.before(Slate, "Editable", (args) => {
    if (SettingValues.get("controlEdit", defaultSettings.controlEdit)) {
      const originalKeyDown = args[0].onKeyDown;
      args[0].onKeyDown = (e: React.KeyboardEvent) => {
        if (e.getModifierState("Control") && e.key === "ArrowUp" && !Pressed.get("ArrowUp")) {
          Pressed.set("ArrowUp", true);
          const CurrentChannelId = UltimateChannelStore.getCurrentlySelectedChannelId();
          const Messages = UltimateMessageStore.getMessages(CurrentChannelId);
          const EditingMessageId = EditMessageStore.getEditingMessageId(CurrentChannelId);
          const UserMessages = Messages.toArray().filter(
            (c) => c.author.id === UltimateUserStore.getCurrentUser().id,
          );
          const MessageToEdit = UserMessages.at(
            (EditingMessageId ? UserMessages.findIndex((c) => c.id === EditingMessageId) : 0) - 1,
          );
          if (MessageToEdit)
            MessageActions.startEditMessage(
              MessageToEdit.channel_id,
              MessageToEdit.id,
              MessageToEdit.content,
            );
        }
        if (e.getModifierState("Control") && e.key === "ArrowDown" && !Pressed.get("ArrowDown")) {
          Pressed.set("ArrowDown", true);
          const CurrentChannelId = UltimateChannelStore.getCurrentlySelectedChannelId();
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
        }
        originalKeyDown(e);
      };
      const originalKeyUp = args[0].onKeyUp;
      args[0].onKeyUp = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowUp") {
          Pressed.set("ArrowUp", false);
        }
        if (e.key === "ArrowDown") {
          Pressed.set("ArrowDown", false);
        }
        originalKeyUp(e);
      };
    }
    return args;
  });
};
