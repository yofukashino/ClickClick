import { Category, SwitchItem, RadioItem } from "replugged/components";
import { PluginLogger, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Utils from "../lib/utils";
import Types from "../types";
export const registerSettings = (): void => {
  for (const key in defaultSettings) {
    if (SettingValues.has(key as keyof Types.Settings)) return;
    PluginLogger.log(`Adding new setting ${key} with value ${defaultSettings[key]}.`);
    SettingValues.set(key as keyof Types.Settings, defaultSettings[key]);
  }
};

export const Settings = () => {
  return (
    <div>
      <Category title="Edit" open={false}>
        <SwitchItem
          note="Double click your's message and start editing."
          {...Utils.useSetting(SettingValues, "edit", defaultSettings.edit)}>
          Enable Editing
        </SwitchItem>
        <RadioItem
          disabled={!SettingValues.get("edit", defaultSettings.edit)}
          note="Modifier for double clicking to edit"
          options={[
            { name: "Shift", value: "shift" },
            { name: "Ctrl", value: "ctrl" },
            { name: "Alt", value: "alt" },
            { name: "None", value: "none" },
          ]}
          {...Utils.useSetting(SettingValues, "editModifier", defaultSettings.editModifier)}>
          Edit Modifier
        </RadioItem>
      </Category>
      <Category title="Reply" open={false}>
        <SwitchItem
          note="Double click other's message and start replying."
          {...Utils.useSetting(SettingValues, "reply", defaultSettings.reply)}>
          Enable Replying
        </SwitchItem>
        <RadioItem
          disabled={!SettingValues.get("reply", defaultSettings.reply)}
          note="Modifier for double clicking to reply."
          options={[
            { name: "Shift", value: "shift" },
            { name: "Ctrl", value: "ctrl" },
            { name: "Alt", value: "alt" },
            { name: "None", value: "none" },
          ]}
          {...Utils.useSetting(SettingValues, "replyModifier", defaultSettings.replyModifier)}>
          Edit Modifier
        </RadioItem>
      </Category>
      <Category title="Copy" open={false}>
        <SwitchItem
          note="Double click any message and copy."
          {...Utils.useSetting(SettingValues, "copy", defaultSettings.copy)}>
          Enable Copying
        </SwitchItem>
        <RadioItem
          disabled={!SettingValues.get("copy", defaultSettings.copy)}
          note="Modifier for double clicking to copying."
          options={[
            { name: "Shift", value: "shift" },
            { name: "Ctrl", value: "ctrl" },
            { name: "Alt", value: "alt" },
          ]}
          {...Utils.useSetting(SettingValues, "copyModifier", defaultSettings.copyModifier)}>
          Copy Modifier
        </RadioItem>
      </Category>
      <SwitchItem
        note="Navigate message edits even better with CTRL+ArrowUp or CTRL+ArrowDown."
        {...Utils.useSetting(SettingValues, "controlEdit", defaultSettings.controlEdit)}>
        Better Edit Navigation
      </SwitchItem>
      <SwitchItem
        note="Hide reply and edit from options from message context menu. The reply option will still be shown on your own messages."
        {...Utils.useSetting(
          SettingValues,
          "hideContextMenuItem",
          defaultSettings.hideContextMenuItem,
        )}>
        Hide Context Menu Entries
      </SwitchItem>
    </div>
  );
};
