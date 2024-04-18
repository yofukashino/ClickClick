import { webpack } from "replugged";
import Types from "../types";

const Modules: Types.Modules = {};
Modules.loadModules = async () => {
  Modules.ChannelStore ??= webpack.getByStoreName<Types.ChannelStore>("ChannelStore");
  Modules.EditMessageStore ??= webpack.getByStoreName<Types.EditMessageStore>("EditMessageStore");
  Modules.PendingReplyStore ??=
    webpack.getByStoreName<Types.PendingReplyStore>("PendingReplyStore");
  Modules.MessageConstructor ??= await webpack.waitForProps<Types.MessageConstructor>(
    "ThreadStarterChatMessage",
  );
  Modules.MessageActions = await webpack.waitForProps<Types.MessageActions>(
    "jumpToMessage",
    "_sendMessage",
  );
  Modules.Slate ??= await webpack.waitForProps<Types.Slate>("Slate");
  // thanks https://github.com/fres621/repluggins/blob/main/plugins/QuickReply/index.tsx#L25 for this module
  Modules.MoreMessageActions ??= await webpack.waitForProps<Types.MoreMessageActions>(
    "createPendingReply",
  );
};

export default Modules;
