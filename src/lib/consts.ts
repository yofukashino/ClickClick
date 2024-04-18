export const defaultSettings = {
  edit: true,
  editModifier: "none",
  reply: true,
  replyModifier: "none",
  copy: false,
  copyModifier: "alt",
  editNagivation: true,
  editNagivationModifier: "ctrl",
  replyNagivation: true,
  replyNagivationModifier: "ctrl+shift",
  hideContextMenuItem: false,
};

export const modifierStates = [
  { name: "Ctrl", value: "ctrl" },
  { name: "Shift", value: "shift" },
  { name: "Alt", value: "alt" },
  { name: "Ctrl + Shift", value: "ctrl+shift" },
  { name: "Ctrl + Alt", value: "ctrl+alt" },
  { name: "Shift + Alt", value: "shift+alt" },
  { name: "Ctrl + Shift + Alt", value: "ctrl+shift+alt" },
];
