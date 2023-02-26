import { patchMessage } from "./Message";
export { patchMessageContextMenu } from "./MessageContextMenu";
export const applyInjections = (): void => {
  patchMessage();
};
