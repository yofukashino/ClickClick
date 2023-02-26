import { SettingValues, UserStore } from "../index";
import { defaultSettings } from "../lib/consts";
import * as Types from "../types";
export const patchMessageContextMenu = (
  value: Types.ReactElement,
  message: Types.Message,
): boolean => {
  if (!SettingValues.get("hideContextMenuItem", defaultSettings.hideContextMenuItem)) return true;
  if (!value?.props?.children) return false;
  if (Array.isArray(value.props.children))
    value.props.children = value?.props?.children?.filter(
      (m: Types.ReactElement) =>
        m?.props?.id !== "edit" &&
        (message?.author?.id == UserStore?.getCurrentUser()?.id || m?.props?.id !== "reply"),
    );
  return true;
};
