import { webpack } from "replugged";
import Types from "../types";
export const MessageConstructor = webpack.getByProps<Types.MessageConstructor>(
  "ThreadStarterChatMessage",
);
export const DiscordNative = webpack.getByProps<Types.DiscordNative>("clipboard", "process");
export const MessageActions = webpack.getByProps<Types.MessageActions>(
  "jumpToMessage",
  "_sendMessage",
);
export const Slate = webpack.getByProps<Types.Slate>("Slate");
export const ChannelStore = webpack.getByStoreName<Types.ChannelStore>("ChannelStore");
export const EditMessageStore = webpack.getByStoreName<Types.EditMessageStore>("EditMessageStore");
export const PendingReplyStore =
  webpack.getByStoreName<Types.PendingReplyStore>("PendingReplyStore");
// thanks https://github.com/fres621/repluggins/blob/main/plugins/QuickReply/index.tsx#L25 for this module
export const MoreMessageActions =
  webpack.getByProps<Types.MoreMessageActions>("createPendingReply");
