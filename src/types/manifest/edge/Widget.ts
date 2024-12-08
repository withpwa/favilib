import { Screenshot } from "../w3/Image";
import { Icon } from "../w3/Image";

// https://learn.microsoft.com/en/microsoft-edge/progressive-web-apps-chromium/how-to/widgets
export interface Widget {
  /**
   * The title of the widget, presented to users.
   */
  readonly name: string;
  /**
   * An alternative short version of the name.
   */
  readonly short_name?: string;
  /**
   * A description of what the widget does.
   */
  readonly description: string;
  /**
   * An array of icons to be used for the widget.
   * If missing, the icons manifest member is used instead.
   * Icons larger than `1024x1024` are ignored.
   */
  readonly icons?: Array<Icon>;
  /**
   * An array of screenshots that show what the widget looks like.
   * Analogous to the [screenshot manifest](https://developer.mozilla.org/docs/Web/Manifest/screenshots) member.
   * The platform field of a screenshot item supports the Windows and any values.
   * Images larger than `1024x1024` pixels are ignored.
   * For screenshot requirements specific to the Windows 11 Widgets Board,
   * see Screenshot image requirements in Integrate with the widget picker.
   */
  readonly screenshots: Array<Screenshot>;
  /**
   * A string used to reference the widget in the PWA service worker.
   */
  readonly tag: string;
  /**
   * The template to use to display the widget in the operating system widgets dashboard.
   * Note: this property is currently only informational and not used. See `ms_ac_template` below.
   */
  readonly template?: string;
  /**
   * The URL of the custom Adaptive Cards template to use to display the widget in the operating system widgets dashboard. See Define a widget template below.
   */
  readonly ms_ac_template: string;
  /**
   * The URL where the data to fill the template with can be found. If present, this URL is required to return valid JSON.
   */
  readonly data?: string;
  /**
   * The MIME type for the widget data.
   */
  readonly type?: string;
  /**
   * A boolean indicating if the widget requires authentication.
   */
  readonly auth?: boolean;
  /**
   * The frequency, in seconds, at which the widget will be updated.
   * Code in your service worker must perform the updating; the widget is not updated automatically.
   * See [Access widget instances at runtime](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/widgets#access-widget-instances-at-runtime).
   */
  readonly update?: number;
  /**
   * A boolean indicating whether to allow multiple instances of the widget. Defaults to true.
   */
  readonly multiple?: boolean;
}
