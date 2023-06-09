export { types as DefaultTypes } from "replugged";
import { types as DefaultTypes } from "replugged";
export type { ReactElement, ComponentClass, MouseEvent } from "react";
import type { ReactElement } from "react";
export interface messageDiv {
  "aria-describedby": undefined | string;
  "aria-labelledby": string;
  "aria-roledescription": string;
  "aria-setsize": number;
  childrenAccessories: ReactElement;
  childrenButtons: ReactElement;
  childrenExecutedCommand: null;
  childrenHeader: ReactElement;
  childrenHighlight: null;
  childrenMessageContent: ReactElement;
  childrenRepliedMessage: null | ReactElement;
  childrenSystemMessage: null | ReactElement;
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
export interface MessageClasses {
  automodMessage: string;
  backgroundFlash: string;
  beforeGroup: string;
  buttons: string;
  channelTextArea: string;
  cozyMessage: string;
  disableInteraction: string;
  divider: string;
  ephemeral: string;
  groupStart: string;
  hasContent: string;
  highlightContainer: string;
  highlightIcon: string;
  highlighted: string;
  interactionSending: string;
  jump: string;
  mentioned: string;
  message: string;
  messageListItem: string;
  quotedChatMessage: string;
  replying: string;
  selected: string;
  systemMessage: string;
}
export interface GenericModule {
  [key: string]: DefaultTypes.AnyFunction;
}
export interface MessageConstructor {
  exports: GenericModule;
}
export interface MoreMessageActions {
  replyToMessage: DefaultTypes.AnyFunction;
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
export interface User {
  avatar: string;
  avatarDecoration: undefined | string;
  bot: boolean;
  desktop: boolean;
  discriminator: string;
  email: null | string;
  flags: number;
  guildMemberAvatars: {
    [key: number]: string;
  };
  hasBouncedEmail: boolean;
  hasFlag: DefaultTypes.AnyFunction;
  id: string;
  isStaff: DefaultTypes.AnyFunction;
  isStaffPersonal: DefaultTypes.AnyFunction;
  mfaEnabled: boolean;
  mobile: boolean;
  nsfwAllowed: undefined | boolean;
  personalConnectionId: null | string;
  phone: null | string;
  premiumType: undefined | number;
  premiumUsageFlags: number;
  publicFlags: number;
  purchasedFlags: number;
  system: boolean;
  username: string;
  verified: boolean;
  createdAt: Date;
  tag: string;
}
export interface Message {
  activity: null | string;
  application: null | object;
  applicationId: null | string;
  attachments: object[];
  author: User;
  blocked: boolean;
  bot: boolean;
  call: null | string;
  channel_id: string;
  codedLinks: string[];
  colorString: undefined | string;
  components: [];
  content: string;
  customRenderedContent: undefined;
  editedTimestamp: object;
  embeds: [];
  flags: number;
  giftCodes: [];
  id: string;
  interaction: null | unknown;
  interactionData: null | unknown;
  interactionError: null | unknown;
  isSearchHit: boolean;
  loggingName: null | unknown;
  mentionChannels: [];
  mentionEveryone: boolean;
  mentionRoles: [];
  mentioned: boolean;
  mentions: [];
  messageReference: null | unknown;
  nick: undefined | string;
  nonce: null | unknown;
  pinned: boolean;
  reactions: Array<{
    burst_colors: [];
    burst_count: number;
    burst_me: boolean;
    burst_user_ids: string[];
    count: number;
    count_details: {
      burst: number;
      normal: number;
    };
    emoji: {
      id: null | string;
      name: string;
    };
    me: boolean;
    me_burst: boolean;
  }>;
  roleSubscriptionData: undefined | unknown;
  state: string;
  stickerItems: unknown[];
  stickers: unknown[];
  timestamp: object;
  tts: boolean;
  type: number;
  webhookId: null | string;
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
export interface Channel {
  defaultAutoArchiveDuration: undefined | number;
  defaultThreadRateLimitPerUser: undefined | number;
  flags_: number;
  id: string;
  lastMessageId: string;
  lastPinTimestamp: string;
  memberListId: undefined | string;
  name: string;
  nsfw_: boolean;
  permissionOverwrites_: {
    [key: string | number]: {
      allow: bigint;
      deny: bigint;
      id: string;
      type: number;
    };
  };
  guild_id: string;
  position_: number;
  rateLimitPerUser_: number;
  topic_: string;
  type: number;
  version: undefined | number;
  accessPermissions: bigint;
  bitrate: number;
  flags: number;
  nsfw: boolean;
  permissionOverwrites: {
    [key: string | number]: {
      allow: bigint;
      deny: bigint;
      id: string;
      type: number;
    };
  };
  position: number;
  rateLimitPerUser: number;
  topic: undefined | string;
  userLimit: number;
  availableTags: Array<{
    name: string;
  }>;
  isHidden: () => boolean;
  isGuildVocal: () => boolean;
}
export interface ChannelStore {
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
export interface Settings {
  edit: boolean;
  editModifier: string;
  reply: boolean;
  replyModifier: string;
  copy: boolean;
  copyModifier: string;
  hideContextMenuItem: boolean;
}
