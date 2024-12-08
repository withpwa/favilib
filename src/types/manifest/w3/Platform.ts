// https://developer.mozilla.org/en-US/docs/Web/Manifest/screenshots#platform
// https://w3c.github.io/manifest-app-info/#screenshots-member
// https://github.com/w3c/manifest/wiki/Platforms
export type DevicePlatformIdentifiers =
  | "android"
  | "chromeos"
  | "ipados"
  | "huawei"
  | "ios"
  | "kaios"
  | "macos"
  | "windows"
  | "xbox";

export type DistributionPlatformIdentifiers =
  | "chrome_web_store"
  | "chromeos_play"
  | "webapp"
  | "itunes"
  | "microsoft-inbox"
  | "microsoft-store"
  | "play";
