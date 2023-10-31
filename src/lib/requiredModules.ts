import { webpack } from "replugged";
import * as Types from "../types";
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
export const MoreMessageActions = webpack.getByProps<Types.MoreMessageActions>("replyToMessage");
