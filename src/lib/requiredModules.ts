import { webpack } from "replugged";
import Types from "../types";

const Modules: Types.Modules = {};
Modules.loadModules = async () => {
  Modules.ChannelStore ??= webpack.getByStoreName<Types.ChannelStore>("ChannelStore");
  Modules.EditMessageStore ??= webpack.getByStoreName<Types.EditMessageStore>("EditMessageStore");
  Modules.PendingReplyStore ??=
    webpack.getByStoreName<Types.PendingReplyStore>("PendingReplyStore");
  Modules.PermissionStore ??= webpack.getByStoreName<Types.PermissionStore>("PermissionStore");
  Modules.MessageConstructor ??= await webpack
    .waitForModule<Types.GenericModule>(webpack.filters.bySource(".backgroundFlash]"), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find MessageConstructor Module");
    });

  Modules.MessageActions = await webpack
    .waitForProps<Types.MessageActions>(["jumpToMessage", "_sendMessage"], {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find MessageActions Module");
    });

  Modules.Slate ??= await webpack
    .waitForModule<Types.GenericModule>(webpack.filters.bySource("[data-slate-spacer]"), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find Slate Module");
    });

  Modules.MoreMessageActionsModule = await webpack
    .waitForModule<Types.GenericModule>(webpack.filters.bySource('type:"CREATE_PENDING_REPLY"'), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find MoreMessageActions Module");
    });

  Modules.MoreMessageActions ??= {
    createPendingReply: webpack.getFunctionBySource(
      Modules.MoreMessageActionsModule,
      "CREATE_PENDING_REPLY",
    ),
    deletePendingReply: webpack.getFunctionBySource(
      Modules.MoreMessageActionsModule,
      "DELETE_PENDING_REPLY",
    ),
    setPendingReplyShouldMention: webpack.getFunctionBySource(
      Modules.MoreMessageActionsModule,
      "SET_PENDING_REPLY_SHOULD_MENTION",
    ),
  };
};

export default Modules;
