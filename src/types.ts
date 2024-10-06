import { types } from "replugged";
import { Store } from "replugged/dist/renderer/modules/common/flux";
import type util from "replugged/dist/renderer/util";
import type GeneralDiscordTypes from "discord-types/general";

export namespace Types {
  export import DefaultTypes = types;
  export type GenericModule = Record<string, DefaultTypes.AnyFunction>;
  export type Tree = util.Tree;
  export type Channel = GeneralDiscordTypes.Channel;
  export type Message = GeneralDiscordTypes.Message;
  export interface GenericMemo {
    $$typeof: symbol;
    compare: DefaultTypes.AnyFunction;
    type: DefaultTypes.AnyFunction;
  }
  export interface MessageDiv extends Tree {
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
    onDoubleClick: DefaultTypes.AnyFunction;
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

  export interface PermissionStore extends Store {
    can: DefaultTypes.AnyFunction;
    canAccessGuildSettings: DefaultTypes.AnyFunction;
    canAccessMemberSafetyPage: DefaultTypes.AnyFunction;
    canBasicChannel: DefaultTypes.AnyFunction;
    canImpersonateRole: DefaultTypes.AnyFunction;
    canManageUser: DefaultTypes.AnyFunction;
    canWithPartialContext: DefaultTypes.AnyFunction;
    computeBasicPermissions: DefaultTypes.AnyFunction;
    computePermissions: DefaultTypes.AnyFunction;
    getChannelPermissions: DefaultTypes.AnyFunction;
    getChannelsVersion: DefaultTypes.AnyFunction;
    getGuildPermissionProps: DefaultTypes.AnyFunction;
    getGuildPermissions: DefaultTypes.AnyFunction;
    getGuildVersion: DefaultTypes.AnyFunction;
    getHighestRole: DefaultTypes.AnyFunction;
    isRoleHigher: DefaultTypes.AnyFunction;
  }

  export interface Modules {
    loadModules?: () => Promise<void>;
    ChannelStore?: ChannelStore;
    EditMessageStore?: EditMessageStore;
    PendingReplyStore?: PendingReplyStore;
    PermissionStore?: PermissionStore;
    MessageConstructor?: GenericModule;
    MessageActions?: MessageActions;
    Slate?: GenericModule;
    MoreMessageActionsModule?: GenericModule;
    MoreMessageActions?: MoreMessageActions;
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
}
export default Types;

declare global {
  export const DiscordNative: {
    accessibility: {
      isAccessibilitySupportEnabled: Types.DefaultTypes.AnyFunction;
    };
    app: {
      dock: {
        setBadge: Types.DefaultTypes.AnyFunction;
        bounce: Types.DefaultTypes.AnyFunction;
        cancelBounce: Types.DefaultTypes.AnyFunction;
      };
      getBuildNumber: Types.DefaultTypes.AnyFunction;
      getDefaultDoubleClickAction: Types.DefaultTypes.AnyFunction;
      getModuleVersions: Types.DefaultTypes.AnyFunction;
      getPath: Types.DefaultTypes.AnyFunction;
      getReleaseChannel: Types.DefaultTypes.AnyFunction;
      getVersion: Types.DefaultTypes.AnyFunction;
      registerUserInteractionHandler: Types.DefaultTypes.AnyFunction;
      relaunch: Types.DefaultTypes.AnyFunction;
      setBadgeCount: Types.DefaultTypes.AnyFunction;
    };
    clipboard: {
      copy: Types.DefaultTypes.AnyFunction;
      copyImage: Types.DefaultTypes.AnyFunction;
      cut: Types.DefaultTypes.AnyFunction;
      paste: Types.DefaultTypes.AnyFunction;
      read: Types.DefaultTypes.AnyFunction;
    };
    clips: {
      deleteClip: Types.DefaultTypes.AnyFunction;
      loadClip: Types.DefaultTypes.AnyFunction;
      loadClipsDirectory: Types.DefaultTypes.AnyFunction;
    };
    crashReporter: {
      getMetadata: Types.DefaultTypes.AnyFunction;
      updateCrashReporter: Types.DefaultTypes.AnyFunction;
    };
    desktopCapture: {
      getDesktopCaptureSources: Types.DefaultTypes.AnyFunction;
    };
    features: {
      declareSupported: Types.DefaultTypes.AnyFunction;
      supports: Types.DefaultTypes.AnyFunction;
    };
    fileManager: {
      basename: Types.DefaultTypes.AnyFunction;
      cleanupTempFiles: Types.DefaultTypes.AnyFunction;
      dirname: Types.DefaultTypes.AnyFunction;
      extname: Types.DefaultTypes.AnyFunction;
      getModuleDataPathSync: Types.DefaultTypes.AnyFunction;
      getModulePath: Types.DefaultTypes.AnyFunction;
      join: Types.DefaultTypes.AnyFunction;
      openFiles: Types.DefaultTypes.AnyFunction;
      readLogFiles: Types.DefaultTypes.AnyFunction;
      readTimeSeriesLogFiles: Types.DefaultTypes.AnyFunction;
      saveWithDialog: Types.DefaultTypes.AnyFunction;
      showItemInFolder: Types.DefaultTypes.AnyFunction;
      showOpenDialog: Types.DefaultTypes.AnyFunction;
    };
    gpuSettings: {
      getEnableHardwareAcceleration: Types.DefaultTypes.AnyFunction;
      setEnableHardwareAcceleration: Types.DefaultTypes.AnyFunction;
    };
    http: {
      getAPIEndpoint: Types.DefaultTypes.AnyFunction;
      makeChunkedRequest: Types.DefaultTypes.AnyFunction;
    };
    ipc: {
      invoke: Types.DefaultTypes.AnyFunction;
      on: Types.DefaultTypes.AnyFunction;
      send: Types.DefaultTypes.AnyFunction;
    };
    isRenderer: boolean;
    nativeModules: {
      canBootstrapNewUpdater: boolean;
      ensureModule: Types.DefaultTypes.AnyFunction;
      requireModule: Types.DefaultTypes.AnyFunction;
    };
    os: {
      arch: string;
      release: string;
    };
    powerMonitor: {
      getSystemIdleTimeMs: Types.DefaultTypes.AnyFunction;
      on: Types.DefaultTypes.AnyFunction;
      removeAllListeners: Types.DefaultTypes.AnyFunction;
      removeListener: Types.DefaultTypes.AnyFunction;
    };
    powerSaveBlocker: {
      blockDisplaySleep: Types.DefaultTypes.AnyFunction;
      cleanupDisplaySleep: Types.DefaultTypes.AnyFunction;
      unblockDisplaySleep: Types.DefaultTypes.AnyFunction;
    };
    process: {
      arch: string;
      env: object;
      platform: string;
    };
    processUtils: {
      flushCookies: Types.DefaultTypes.AnyFunction;
      flushDNSCache: Types.DefaultTypes.AnyFunction;
      flushStorageData: Types.DefaultTypes.AnyFunction;
      getCPUCoreCount: Types.DefaultTypes.AnyFunction;
      getCurrentCPUUsagePercent: Types.DefaultTypes.AnyFunction;
      getCurrentMemoryUsageKB: Types.DefaultTypes.AnyFunction;
      getLastCrash: Types.DefaultTypes.AnyFunction;
      getMainArgvSync: Types.DefaultTypes.AnyFunction;
      purgeMemory: Types.DefaultTypes.AnyFunction;
    };
    remoteApp: {
      dock: {
        setBadge: Types.DefaultTypes.AnyFunction;
        bounce: Types.DefaultTypes.AnyFunction;
        cancelBounce: Types.DefaultTypes.AnyFunction;
      };
      getBuildNumber: Types.DefaultTypes.AnyFunction;
      getDefaultDoubleClickAction: Types.DefaultTypes.AnyFunction;
      getModuleVersions: Types.DefaultTypes.AnyFunction;
      getPath: Types.DefaultTypes.AnyFunction;
      getReleaseChannel: Types.DefaultTypes.AnyFunction;
      getVersion: Types.DefaultTypes.AnyFunction;
      registerUserInteractionHandler: Types.DefaultTypes.AnyFunction;
      relaunch: Types.DefaultTypes.AnyFunction;
      setBadgeCount: Types.DefaultTypes.AnyFunction;
    };
    remotePowerMonitor: {
      getSystemIdleTimeMs: Types.DefaultTypes.AnyFunction;
      on: Types.DefaultTypes.AnyFunction;
      removeAllListeners: Types.DefaultTypes.AnyFunction;
      removeListener: Types.DefaultTypes.AnyFunction;
    };
    safeStorage: {
      decryptString: Types.DefaultTypes.AnyFunction;
      encryptString: Types.DefaultTypes.AnyFunction;
      isEncryptionAvailable: Types.DefaultTypes.AnyFunction;
    };
    setUncaughtExceptionHandler: Types.DefaultTypes.AnyFunction;
    settings: {
      get: Types.DefaultTypes.AnyFunction;
      getSync: Types.DefaultTypes.AnyFunction;
      set: Types.DefaultTypes.AnyFunction;
    };
    spellCheck: {
      getAvailableDictionaries: Types.DefaultTypes.AnyFunction;
      on: Types.DefaultTypes.AnyFunction;
      removeListener: Types.DefaultTypes.AnyFunction;
      replaceMisspelling: Types.DefaultTypes.AnyFunction;
      setLearnedWords: Types.DefaultTypes.AnyFunction;
      setLocale: Types.DefaultTypes.AnyFunction;
    };
    thumbar: { setThumbarButtons: Types.DefaultTypes.AnyFunction };
    userDataCache: {
      cacheUserData: Types.DefaultTypes.AnyFunction;
      deleteCache: Types.DefaultTypes.AnyFunction;
      getCached: Types.DefaultTypes.AnyFunction;
    };
    window: {
      USE_OSX_NATIVE_TRAFFIC_LIGHTS: boolean;
      blur: Types.DefaultTypes.AnyFunction;
      close: Types.DefaultTypes.AnyFunction;
      flashFrame: Types.DefaultTypes.AnyFunction;
      focus: Types.DefaultTypes.AnyFunction;
      fullscreen: Types.DefaultTypes.AnyFunction;
      isAlwaysOnTop: Types.DefaultTypes.AnyFunction;
      maximize: Types.DefaultTypes.AnyFunction;
      minimize: Types.DefaultTypes.AnyFunction;
      restore: Types.DefaultTypes.AnyFunction;
      setAlwaysOnTop: Types.DefaultTypes.AnyFunction;
      setBackgroundThrottling: Types.DefaultTypes.AnyFunction;
      setDevtoolsCallbacks: Types.DefaultTypes.AnyFunction;
      setProgressBar: Types.DefaultTypes.AnyFunction;
      setZoomFactor: Types.DefaultTypes.AnyFunction;
    };
  };
}
