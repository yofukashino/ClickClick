import Modules from "../lib/requiredModules";
import patchMessage from "./Message";
import patchMessageContextMenu from "./MessageContextMenu";
import patchSlate from "./Slate";
export const applyInjections = async (): Promise<void> => {
  await Modules.loadModules(); 
  patchMessage();
  patchMessageContextMenu();
  patchSlate();
};

export default {applyInjections}
