import { webpack } from "replugged";
import * as Types from "../types";
export const MessageClasses = webpack.getByProps<Types.MessageClasses>("message", "mentioned");
export const { exports: MessageConstructor } = webpack.getBySource<Types.MessageConstructor>(
  /\.compact.*\.zalgo.*\.childrenMessageContent/,
  { raw: true },
);
export const DiscordNative = webpack.getByProps<Types.DiscordNative>("clipboard", "process");
export const MessageActions = webpack.getByProps<Types.MessageActions>(
  "jumpToMessage",
  "_sendMessage",
);
export const ChannelStore = webpack.getByProps<Types.ChannelStore>("getChannel", "getDMFromUserId");
export const MoreMessageActionsModule = webpack.getBySource<Types.GenericModule>(
  /(channel:[\w|\w],message:[\w|\w],shouldMention:![\w|\w]\.shiftKey)/,
);
export const MoreMessageActions = {
  replyToMessage: webpack.getFunctionBySource(
    MoreMessageActionsModule,
    /(channel:[\w|\w],message:[\w|\w],shouldMention:![\w|\w]\.shiftKey)/,
  ),
} as Types.MoreMessageActions;
