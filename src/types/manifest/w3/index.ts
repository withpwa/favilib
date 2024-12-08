import { Orientation } from "./Orientation";
import { Icon, Screenshot } from "./Image";
import { FileHandler } from "./FileHandler";
import { Category } from "./Category";
import { ProtocolHandler } from "./ProtocolHandler";
import { Shotcut } from "./Shotcut";
import { LaunchHandler } from "./LaunchHandler";
import { Display, DisplayOverride } from "./Display";
import { Direction } from "./Direction";
import { LocalizedMember } from "./Localized";
import { RelatedApplication } from "./RelatedApplication";
import { ShareTarget } from "./ShareTarget";

export interface W3Manifest extends LocalizedMember {
  /**
   * The name of the app, used by the OS to display next to the app's icon.
   */
  readonly name: string;
  /**
   * This can be used to display the name of the app when there isn't enough space for `name`.
   * It is recommended that `short_name` be 12 characters or less in length.
   */
  readonly short_name: string;
  /**
   *  Specify a unique identifier for your web application.
   */
  readonly id?: string;
  /**
   * The description of the app.
   */
  readonly description?: string;
  /**
   * The list of categories the app belongs to.
   */
  readonly categories?: Array<Category>;
  /**
   * Array of icon image objects that are used by the OS in different contexts.
   */
  readonly icons: Array<Icon>;
  /**
   * Array of screenshot image objects, also used by the OS in different contexts.
   */
  readonly screenshots?: Array<Screenshot>;
  /**
   * The preferred URL that should be navigated to when the operating system launches your app.
   */
  readonly start_url: string;
  /**
   * Defines the navigation scope for the app. Outside of this scope, the visited page reverts to a normal webpage, not a PWA. This defaults to start_url.
   */
  readonly scope?: string;
  /**
   * @description
   * A string with keyword values. If not specified, the default value `browser` is used.
   *
   * - `browser`: Opens the app in a conventional browser tab or new window, using the platform-specific convention for opening links.
   * - `minimal-ui`: Opens the app to look and feel like a standalone app but with a minimal set of UI elements for navigation.
   * - `standalone`: Opens the app to look and feel like a standalone native app.
   * - `fullscreen`: The application will make use of all available display space.
   *
   * @example
   * ```js
   * display: "standalone"
   * ```
   * @tutorial
   * The [display-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/display-mode) media feature can be used
   * to configure your application styles and other behavior based on the current display mode.
   *
   * ```css
   * media(display-mode: standalone){
   *  body {
   *    color: red;
   *  }
   * }
   * ```
   */
  readonly display?: Display;
  /**
   * It's similar to the `display` member, but allows you to select a fallback order for different display modes.
   * - `tabbed`
   * [Experimental] - The application can contain multiple application contexts inside a single OS-level window.
   * - `window-controls-overlay`
   * [Experimental] - This display mode only applies when the application is in a separate PWA window and on a desktop OS.
   */
  readonly display_override: Array<DisplayOverride>;
  /**
   * Changes the default color used by certain OS features.
   * For example, this would change the color of your title bar when the application is installed on Windows.
   */
  readonly theme_color?: string;
  /**
   * Represents the page color of the window that your application will be opened in. This is the color that your app will default to before any styles are loaded. Once styles are loaded, your application will use the background color defined in your CSS.
   */
  readonly background_color?: string;
  /**
   * On supporting devices, this defines the default orientation for the app.
   */
  readonly orientation?: Orientation;
  /**
   * Specify an array of protocols that the application can handle.
   * A protocol handler will contain `protocol` and `url` members to specify how each valid protocol is handled.
   */
  readonly protocol_handlers?: Array<ProtocolHandler>;
  /**
   * The list of common tasks users will be able to do by right-clicking or long-pressing on the app icon.
   */
  readonly shortcuts?: Array<Shotcut>;
  /**
   * Allows your PWA to be registered as a share target.
   */
  readonly share_target?: Array<ShareTarget>;
  /**
   * Specify how your PWA should handle different file types.
   */
  readonly file_handlers?: Array<FileHandler>;
  /**
   * Specify the text direction for your PWA.
   */
  readonly dir?: Direction;
  /**
   * Specify the primary language of your app.
   */
  readonly lang?: string;
  /**
   * Specify a suitable age range for their application.
   * A rating ID is obtained by answering a questionnaire about an application, and then providing the associated ID for that application.
   * You can read more about IARC [here](https://www.globalratings.com/how-iarc-works.aspx).
   * @example
   * ```js
   * iarc_rating_id: 'e58c174a-81d2-5c3c-32cc-34b8de4a52e9'
   * ```
   */
  readonly iarc_rating_id?: string;
  /**
   * Specify applications that have similar or adjacent functionality to your application.
   */
  readonly related_applications?: Array<RelatedApplication>;
  /**
   * Specify whether or not related_applications should be preferred to this one.
   * This member defaults to `false`, but if set to `true`, the browser may recommend an alternate application to the user.
   */
  readonly prefer_related_applications?: boolean;
  /**
   * Defines values that control the launch of a web application.
   */
  readonly launch_handler?: LaunchHandler;
  /**
   * Specify the default link handling for the web app.
   *
   * - `auto`: The user agent should select the appropriate behavior for the platform (Default if not otherwise specified).
   * - `preferred`: the user agent should open in-scope links within the installed application.
   * - `not-preferred`: The user agent should not open links within the installed application.
   */
  readonly handle_links?: "auto" | "preferred" | "not-preferred";
}
