/**
 * DOC https://developer.mozilla.org/en-US/docs/Web/Manifest/launch_handler
 * API https://wicg.github.io/web-app-launch/#launch_handler-member
 */

type ClientMode =
  | "auto"
  | "focus-existing"
  | "navigate-existing"
  | "navigate-new";

export interface LaunchHandler {
  readonly client_mode: ClientMode | ClientMode[];
}
