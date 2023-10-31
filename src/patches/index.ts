import patchMessage from "./Message";
import patchMessageContextMenu from "./MessageContextMenu";
import patchSlate from "./Slate";
export const applyInjections = (): void => {
  patchMessage();
  patchMessageContextMenu();
  patchSlate();
};
