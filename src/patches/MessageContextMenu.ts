import { users as UltimateUserStore } from "replugged/common";
import { PluginInjectorUtils, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Types from "../types";
export default (): void => {
  PluginInjectorUtils.addMenuItem(
    Types.DefaultTypes.ContextMenuTypes.Message,
    ({ message }: { message: Types.Message }, menu) => {
      menu.children = (menu.children as React.ReactElement[]).filter((value) => {
        if (!SettingValues.get("hideContextMenuItem", defaultSettings.hideContextMenuItem))
          return true;
        if (!value?.props?.children) return false;
        if (Array.isArray(value.props.children))
          value.props.children = value?.props?.children?.filter(
            (m: React.ReactElement) =>
              !(
                m?.props?.id == "edit" ||
                (message?.author?.id !== UltimateUserStore?.getCurrentUser()?.id &&
                  m?.props?.id == "reply")
              ),
          );
        return true;
      });
    },
  );
};
