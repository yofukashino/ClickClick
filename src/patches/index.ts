import { patchMessage } from "./Message";
import { patchMessageContextMenu } from "./MessageContextMenu";
export const applyInjections = (): void => {
  patchMessage();
  patchMessageContextMenu();
};
