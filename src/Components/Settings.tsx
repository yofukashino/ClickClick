import { Category, FormNotice, RadioItem, SwitchItem } from "replugged/components";
import { PluginLogger, SettingValues } from "../index";
import { defaultSettings, modifierStates } from "../lib/consts";
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
          options={[...modifierStates, { name: "None", value: "none" }]}
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
          options={[...modifierStates, { name: "None", value: "none" }]}
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
          options={modifierStates}
          {...Utils.useSetting(SettingValues, "copyModifier", defaultSettings.copyModifier)}>
          Copy Modifier
        </RadioItem>
      </Category>
      <Category title="Better Navigation" open={false}>
        <SwitchItem
          note="Navigate message edits even better with Modifier+ArrowUp or Modifier+ArrowDown."
          {...Utils.useSetting(SettingValues, "editNagivation", defaultSettings.editNagivation)}>
          Enable Better Edit Navigation
        </SwitchItem>
        <RadioItem
          disabled={!SettingValues.get("editNagivation", defaultSettings.editNagivation)}
          note="Modifier for using arrow keys to edit."
          options={modifierStates}
          {...Utils.useSetting(
            SettingValues,
            "editNagivationModifier",
            defaultSettings.editNagivationModifier,
          )}>
          Better Edit Nagivation Modifier
        </RadioItem>
        <SwitchItem
          note="Navigate message edits even better with Modifier+ArrowUp or Modifier+ArrowDown."
          {...Utils.useSetting(SettingValues, "replyNagivation", defaultSettings.replyNagivation)}>
          Enable Better Reply Navigation
        </SwitchItem>
        <RadioItem
          disabled={!SettingValues.get("replyNagivation", defaultSettings.replyNagivation)}
          note="Modifier for using arrow keys to reply."
          options={modifierStates}
          {...Utils.useSetting(
            SettingValues,
            "replyNagivationModifier",
            defaultSettings.replyNagivationModifier,
          )}>
          Better Reply Nagivation Modifier
        </RadioItem>
        {SettingValues.get("editNagivationModifier", defaultSettings.editNagivationModifier) ===
          SettingValues.get("replyNagivationModifier", defaultSettings.replyNagivationModifier) &&
          SettingValues.get("editNagivation", defaultSettings.editNagivation) ===
            SettingValues.get("replyNagivation", defaultSettings.replyNagivation) && (
            <FormNotice
              title="Same Modifier"
              body="Selecting same modifier for both reply and edit would result in error and unexpected behaviour."
              type={FormNotice.Types.DANGER}
            />
          )}
        <FormNotice
          title="Override"
          body="This will override any default discord keybinds if any."
          type={FormNotice.Types.WARNING}
        />
      </Category>
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
