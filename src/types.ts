export { types as DefaultTypes } from "replugged";
import { types as DefaultTypes } from "replugged";
import type { Tree } from "replugged/dist/renderer/util";
import { Store } from "replugged/dist/renderer/modules/common/flux";
export type { Message } from "discord-types/general";
export type { Tree } from "replugged/dist/renderer/util";
import type { Channel, Message } from "discord-types/general";
export interface MessageConstructor {
  ThreadStarterChatMessage: unknown;
  default: {
    $$typeof: symbol;
    compare: null;
    type: DefaultTypes.AnyFunction;
  };
}
export interface messageDiv extends Tree {
  "aria-describedby": undefined | string;
  "aria-labelledby": string;
  "aria-roledescription": string;
  "aria-setsize": number;
  childrenAccessories: React.ReactElement;
  childrenButtons: React.ReactElement;
  childrenExecutedCommand: null;
  childrenHeader: React.ReactElement;
  childrenHighlight: null;
  childrenMessageContent: React.ReactElement;
  childrenRepliedMessage: null | React.ReactElement;
  childrenSystemMessage: null | React.ReactElement;
  className: string;
  compact: boolean;
  "data-list-item-id": string;
  hasReply: boolean;
  hasThread: boolean;
  isSystemMessage: boolean;
  onBlur: DefaultTypes.AnyFunction;
  onClick: DefaultTypes.AnyFunction;
  onContextMenu: DefaultTypes.AnyFunction;
  onFocus: DefaultTypes.AnyFunction;
  onKeyDown: DefaultTypes.AnyFunction;
  onMouseLeave: DefaultTypes.AnyFunction;
  onMouseMove: DefaultTypes.AnyFunction;
  role: string;
  tabIndex: number;
  zalgo: boolean;
}

export interface Slate {
  Slate: DefaultTypes.AnyFunction;
  Editable: DefaultTypes.AnyFunction;
}

export interface MoreMessageActions {
  createPendingReply: DefaultTypes.AnyFunction;
  deletePendingReply: DefaultTypes.AnyFunction;
  setPendingReplyShouldMention: DefaultTypes.AnyFunction;
}
export interface DiscordNative {
  accessibility: {
    isAccessibilitySupportEnabled: DefaultTypes.AnyFunction;
  };
  app: {
    dock: {
      setBadge: DefaultTypes.AnyFunction;
      bounce: DefaultTypes.AnyFunction;
      cancelBounce: DefaultTypes.AnyFunction;
    };
    getBuildNumber: DefaultTypes.AnyFunction;
    getDefaultDoubleClickAction: DefaultTypes.AnyFunction;
    getModuleVersions: DefaultTypes.AnyFunction;
    getPath: DefaultTypes.AnyFunction;
    getReleaseChannel: DefaultTypes.AnyFunction;
    getVersion: DefaultTypes.AnyFunction;
    registerUserInteractionHandler: DefaultTypes.AnyFunction;
    relaunch: DefaultTypes.AnyFunction;
    setBadgeCount: DefaultTypes.AnyFunction;
  };
  clipboard: {
    copy: DefaultTypes.AnyFunction;
    copyImage: DefaultTypes.AnyFunction;
    cut: DefaultTypes.AnyFunction;
    paste: DefaultTypes.AnyFunction;
    read: DefaultTypes.AnyFunction;
  };
  clips: {
    deleteClip: DefaultTypes.AnyFunction;
    loadClip: DefaultTypes.AnyFunction;
    loadClipsDirectory: DefaultTypes.AnyFunction;
  };
  crashReporter: {
    getMetadata: DefaultTypes.AnyFunction;
    updateCrashReporter: DefaultTypes.AnyFunction;
  };
  desktopCapture: {
    getDesktopCaptureSources: DefaultTypes.AnyFunction;
  };
  features: {
    declareSupported: DefaultTypes.AnyFunction;
    supports: DefaultTypes.AnyFunction;
  };
  fileManager: {
    basename: DefaultTypes.AnyFunction;
    cleanupTempFiles: DefaultTypes.AnyFunction;
    dirname: DefaultTypes.AnyFunction;
    extname: DefaultTypes.AnyFunction;
    getModuleDataPathSync: DefaultTypes.AnyFunction;
    getModulePath: DefaultTypes.AnyFunction;
    join: DefaultTypes.AnyFunction;
    openFiles: DefaultTypes.AnyFunction;
    readLogFiles: DefaultTypes.AnyFunction;
    readTimeSeriesLogFiles: DefaultTypes.AnyFunction;
    saveWithDialog: DefaultTypes.AnyFunction;
    showItemInFolder: DefaultTypes.AnyFunction;
    showOpenDialog: DefaultTypes.AnyFunction;
  };
  gpuSettings: {
    getEnableHardwareAcceleration: DefaultTypes.AnyFunction;
    setEnableHardwareAcceleration: DefaultTypes.AnyFunction;
  };
  http: {
    getAPIEndpoint: DefaultTypes.AnyFunction;
    makeChunkedRequest: DefaultTypes.AnyFunction;
  };
  ipc: {
    invoke: DefaultTypes.AnyFunction;
    on: DefaultTypes.AnyFunction;
    send: DefaultTypes.AnyFunction;
  };
  isRenderer: boolean;
  nativeModules: {
    canBootstrapNewUpdater: boolean;
    ensureModule: DefaultTypes.AnyFunction;
    requireModule: DefaultTypes.AnyFunction;
  };
  os: {
    arch: string;
    release: string;
  };
  powerMonitor: {
    getSystemIdleTimeMs: DefaultTypes.AnyFunction;
    on: DefaultTypes.AnyFunction;
    removeAllListeners: DefaultTypes.AnyFunction;
    removeListener: DefaultTypes.AnyFunction;
  };
  powerSaveBlocker: {
    blockDisplaySleep: DefaultTypes.AnyFunction;
    cleanupDisplaySleep: DefaultTypes.AnyFunction;
    unblockDisplaySleep: DefaultTypes.AnyFunction;
  };
  process: {
    arch: string;
    env: object;
    platform: string;
  };
  processUtils: {
    flushCookies: DefaultTypes.AnyFunction;
    flushDNSCache: DefaultTypes.AnyFunction;
    flushStorageData: DefaultTypes.AnyFunction;
    getCPUCoreCount: DefaultTypes.AnyFunction;
    getCurrentCPUUsagePercent: DefaultTypes.AnyFunction;
    getCurrentMemoryUsageKB: DefaultTypes.AnyFunction;
    getLastCrash: DefaultTypes.AnyFunction;
    getMainArgvSync: DefaultTypes.AnyFunction;
    purgeMemory: DefaultTypes.AnyFunction;
  };
  remoteApp: {
    dock: {
      setBadge: DefaultTypes.AnyFunction;
      bounce: DefaultTypes.AnyFunction;
      cancelBounce: DefaultTypes.AnyFunction;
    };
    getBuildNumber: DefaultTypes.AnyFunction;
    getDefaultDoubleClickAction: DefaultTypes.AnyFunction;
    getModuleVersions: DefaultTypes.AnyFunction;
    getPath: DefaultTypes.AnyFunction;
    getReleaseChannel: DefaultTypes.AnyFunction;
    getVersion: DefaultTypes.AnyFunction;
    registerUserInteractionHandler: DefaultTypes.AnyFunction;
    relaunch: DefaultTypes.AnyFunction;
    setBadgeCount: DefaultTypes.AnyFunction;
  };
  remotePowerMonitor: {
    getSystemIdleTimeMs: DefaultTypes.AnyFunction;
    on: DefaultTypes.AnyFunction;
    removeAllListeners: DefaultTypes.AnyFunction;
    removeListener: DefaultTypes.AnyFunction;
  };
  safeStorage: {
    decryptString: DefaultTypes.AnyFunction;
    encryptString: DefaultTypes.AnyFunction;
    isEncryptionAvailable: DefaultTypes.AnyFunction;
  };
  setUncaughtExceptionHandler: DefaultTypes.AnyFunction;
  settings: {
    get: DefaultTypes.AnyFunction;
    getSync: DefaultTypes.AnyFunction;
    set: DefaultTypes.AnyFunction;
  };
  spellCheck: {
    getAvailableDictionaries: DefaultTypes.AnyFunction;
    on: DefaultTypes.AnyFunction;
    removeListener: DefaultTypes.AnyFunction;
    replaceMisspelling: DefaultTypes.AnyFunction;
    setLearnedWords: DefaultTypes.AnyFunction;
    setLocale: DefaultTypes.AnyFunction;
  };
  thumbar: { setThumbarButtons: DefaultTypes.AnyFunction };
  userDataCache: {
    cacheUserData: DefaultTypes.AnyFunction;
    deleteCache: DefaultTypes.AnyFunction;
    getCached: DefaultTypes.AnyFunction;
  };
  window: {
    USE_OSX_NATIVE_TRAFFIC_LIGHTS: boolean;
    blur: DefaultTypes.AnyFunction;
    close: DefaultTypes.AnyFunction;
    flashFrame: DefaultTypes.AnyFunction;
    focus: DefaultTypes.AnyFunction;
    fullscreen: DefaultTypes.AnyFunction;
    isAlwaysOnTop: DefaultTypes.AnyFunction;
    maximize: DefaultTypes.AnyFunction;
    minimize: DefaultTypes.AnyFunction;
    restore: DefaultTypes.AnyFunction;
    setAlwaysOnTop: DefaultTypes.AnyFunction;
    setBackgroundThrottling: DefaultTypes.AnyFunction;
    setDevtoolsCallbacks: DefaultTypes.AnyFunction;
    setProgressBar: DefaultTypes.AnyFunction;
    setZoomFactor: DefaultTypes.AnyFunction;
  };
}
export interface MessageActions {
  clearChannel: DefaultTypes.AnyFunction;
  crosspostMessage: DefaultTypes.AnyFunction;
  deleteMessage: DefaultTypes.AnyFunction;
  dismissAutomatedMessage: DefaultTypes.AnyFunction;
  editMessage: DefaultTypes.AnyFunction;
  endEditMessage: DefaultTypes.AnyFunction;
  fetchMessages: DefaultTypes.AnyFunction;
  focusMessage: DefaultTypes.AnyFunction;
  getSendMessageOptionsForReply: DefaultTypes.AnyFunction;
  jumpToMessage: DefaultTypes.AnyFunction;
  jumpToPresent: DefaultTypes.AnyFunction;
  patchMessageAttachments: DefaultTypes.AnyFunction;
  receiveMessage: DefaultTypes.AnyFunction;
  revealMessage: DefaultTypes.AnyFunction;
  sendBotMessage: DefaultTypes.AnyFunction;
  sendClydeError: DefaultTypes.AnyFunction;
  sendGreetMessage: DefaultTypes.AnyFunction;
  sendInvite: DefaultTypes.AnyFunction;
  sendMessage: DefaultTypes.AnyFunction;
  sendStickers: DefaultTypes.AnyFunction;
  startEditMessage: DefaultTypes.AnyFunction;
  suppressEmbeds: DefaultTypes.AnyFunction;
  trackInvite: DefaultTypes.AnyFunction;
  trackJump: DefaultTypes.AnyFunction;
  truncateMessages: DefaultTypes.AnyFunction;
  updateEditMessage: DefaultTypes.AnyFunction;
  _sendMessage: DefaultTypes.AnyFunction;
  _tryFetchMessagesCached: DefaultTypes.AnyFunction;
}
export interface ChannelStore extends Store {
  getAllThreadsForParent: DefaultTypes.AnyFunction;
  getBasicChannel: DefaultTypes.AnyFunction;
  getCachedChannelJsonForGuild: DefaultTypes.AnyFunction;
  getChannel: (e: string) => Channel;
  getDMFromUserId: DefaultTypes.AnyFunction;
  getDMUserIds: DefaultTypes.AnyFunction;
  getGuildChannelsVersion: DefaultTypes.AnyFunction;
  getInitialOverlayState: DefaultTypes.AnyFunction;
  getMutableBasicGuildChannelsForGuild: DefaultTypes.AnyFunction;
  getMutableGuildChannelsForGuild: DefaultTypes.AnyFunction;
  getMutablePrivateChannels: DefaultTypes.AnyFunction;
  getPrivateChannelsVersion: DefaultTypes.AnyFunction;
  getSortedPrivateChannels: DefaultTypes.AnyFunction;
  hasChannel: DefaultTypes.AnyFunction;
  hasRestoredGuild: DefaultTypes.AnyFunction;
  initialize: DefaultTypes.AnyFunction;
  loadAllGuildAndPrivateChannelsFromDisk: DefaultTypes.AnyFunction;
}
export interface EditMessageStore extends Store {
  getEditingMessage: DefaultTypes.AnyFunction;
  getEditingMessageId: DefaultTypes.AnyFunction;
  getEditingRichValue: DefaultTypes.AnyFunction;
  getEditingTextValue: DefaultTypes.AnyFunction;
  isEditing: DefaultTypes.AnyFunction;
  isEditingAny: DefaultTypes.AnyFunction;
}

export interface PendingReplyStore extends Store {
  getPendingReply: (e: string) =>
    | {
        channel: Channel;
        message: Message;
        shouldMention: boolean;
        showMentionToggle: boolean;
      }
    | undefined;
  getPendingReplyActionSource: DefaultTypes.AnyFunction;
}

export interface Settings {
  edit: boolean;
  editModifier: string;
  reply: boolean;
  replyModifier: string;
  copy: boolean;
  copyModifier: string;
  hideContextMenuItem: boolean;
}

export * as default from "./types";
