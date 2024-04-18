import { Injector, Logger, settings } from "replugged";
import { defaultSettings } from "./lib/consts";
export const PluginLogger = Logger.plugin("ClickClick");
export const SettingValues = await settings.init("dev.tharki.ClickClick", defaultSettings);
export const PluginInjector = new Injector();
export const { utils: PluginInjectorUtils } = PluginInjector;
import { registerSettings } from "./Components/Settings";
import Injections from "./patches/index";
export const start = (): void => {
  registerSettings();
  Injections.applyInjections();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
};

export { Settings } from "./Components/Settings";
