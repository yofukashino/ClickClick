import patchMessage from "./Message";
import patchMessageContextMenu from "./MessageContextMenu";
import patchSlate from "./Slate";
export default (): void => {
  patchMessage();
  patchMessageContextMenu();
  patchSlate();
};
