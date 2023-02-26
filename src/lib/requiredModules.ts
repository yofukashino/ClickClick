import { webpack } from "replugged";
import * as Types from "../types";
export const MessageClasses = webpack.getByProps(
  "message",
  "mentioned",
) as unknown as Types.MessageClasses;
export const { exports: MessageConstructor } = webpack.getBySource(
  /\.compact.*\.zalgo.*\.childrenMessageContent/,
  { raw: true },
) as unknown as Types.MessageConstructor;
export const DiscordNative = webpack.getByProps(
  "clipboard",
  "process",
) as unknown as Types.DiscordNative;
export const MessageActions = webpack.getByProps(
  "jumpToMessage",
  "_sendMessage",
) as unknown as Types.MessageActions;
export const ChannelStore = webpack.getByProps(
  "getChannel",
  "getDMFromUserId",
) as unknown as Types.ChannelStore;
export const MoreMessageActionsModule = webpack.getBySource(
  /(channel:[\w|\w],message:[\w|\w],shouldMention:![\w|\w]\.shiftKey)/,
) as unknown as Types.GenericModule;
export const MoreMessageActions = {
  replyToMessage: webpack.getFunctionBySource(
    MoreMessageActionsModule,
    /(channel:[\w|\w],message:[\w|\w],shouldMention:![\w|\w]\.shiftKey)/,
  ),
};
