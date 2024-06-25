import { Injector, Logger, settings } from "replugged";
import { defaultSettings } from "./lib/consts";
export const PluginLogger = Logger.plugin("ClickClick", "#b380ff");
export const SettingValues = await settings.init("dev.tharki.ClickClick", defaultSettings);
export const PluginInjector = new Injector();
export const { utils: PluginInjectorUtils } = PluginInjector;
import { registerSettings } from "./Components/Settings";
import Injections from "./injections/index";
export const start = (): void => {
  registerSettings();
  void Injections.applyInjections().catch((err) => PluginLogger.error(err));
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
};

export { Settings } from "./Components/Settings";
