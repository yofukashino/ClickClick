import { PluginInjectorUtils, SettingValues, UserStore } from "../index";
import { defaultSettings } from "../lib/consts";
import * as Types from "../types";
export const patchMessageContextMenu = (): void => {
  PluginInjectorUtils.addMenuItem(
    Types.DefaultTypes.ContextMenuTypes.Message,
    ({ message }: { message: Types.Message }, menu) => {
      menu.children = (menu.children as Types.ReactElement[]).filter((value) => {
        if (!SettingValues.get("hideContextMenuItem", defaultSettings.hideContextMenuItem))
          return true;
        if (!value?.props?.children) return false;
        if (Array.isArray(value.props.children))
          value.props.children = value?.props?.children?.filter(
            (m: Types.ReactElement) =>
              !(
                m?.props?.id == "edit" ||
                (message?.author?.id !== UserStore?.getCurrentUser()?.id && m?.props?.id == "reply")
              ),
          );
        return true;
      });
    },
  );
};
