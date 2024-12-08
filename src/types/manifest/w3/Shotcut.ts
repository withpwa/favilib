import { Icon } from "./Image";
import { LocalizedMember } from "./Localized";

// https://developer.mozilla.org/en-US/docs/Web/Manifest/shortcuts#values
export interface Shotcut extends LocalizedMember {
  /**
   * A string that represents the name of the shortcut, which is displayed to users in a context menu.
   */
  readonly name: string;
  /**
   * A string that represents a short version of the shortcut's name.
   */
  readonly short_name?: string;
  /**
   * A string that describes the purpose of the shortcut.
   */
  readonly description?: string;
  /**
   * An app URL that opens when the associated shortcut is activated.
   * The URL must be within the `scope` of the web app manifest.
   */
  readonly url: string;
  /**
   * An array of icon objects representing the shortcut in various contexts.
   * This has the same format as the `icons` manifest member.
   */
  readonly icons?: Array<Icon>;
}
