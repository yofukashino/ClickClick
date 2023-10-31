import { util } from "replugged";
export const checkForModifier = (
  enabled: boolean,
  modifier: string,
  event: React.MouseEvent,
): boolean => {
  if (!enabled) return false;
  switch (modifier) {
    case "shift":
      return event.shiftKey;
    case "ctrl":
      return event.ctrlKey;
    case "alt":
      return event.altKey;
    case "none":
      return true;
  }
};

export default { ...util, checkForModifier };
