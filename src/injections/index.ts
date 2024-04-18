import Modules from "../lib/requiredModules";
import injectMessage from "./Message";
import injectMessageContextMenu from "./MessageContextMenu";
import injectSlate from "./Slate";
export const applyInjections = async (): Promise<void> => {
  await Modules.loadModules();
  injectMessage();
  injectMessageContextMenu();
  injectSlate();
};

export default { applyInjections };
