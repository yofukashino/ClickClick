import { util } from "replugged";
export const checkForModifier = (
  enabled: boolean,
  modifier: string,
  event: React.MouseEvent | React.KeyboardEvent,
): boolean => {
  if (!enabled) return false;
  switch (modifier) {
    case "ctrl":
      return event.ctrlKey || event.getModifierState("Control");
    case "shift":
      return event.shiftKey || event.getModifierState("Shift");
    case "alt":
      return event.altKey || event.getModifierState("Alt");
    case "ctrl+shift":
      return (
        (event.ctrlKey && event.shiftKey) ||
        (event.getModifierState("Control") && event.getModifierState("Shift"))
      );
    case "ctrl+alt":
      return (
        (event.ctrlKey && event.altKey) ||
        (event.getModifierState("Control") && event.getModifierState("Alt"))
      );
    case "shift+alt":
      return (
        (event.shiftKey && event.altKey) ||
        (event.getModifierState("Shift") && event.getModifierState("Alt"))
      );
    case "ctrl+shift+alt":
      return (
        (event.ctrlKey && event.shiftKey && event.altKey) ||
        (event.getModifierState("Control") &&
          event.getModifierState("Shift") &&
          event.getModifierState("Alt"))
      );
    case "none":
      return true;
  }
};

export default { ...util, checkForModifier };
