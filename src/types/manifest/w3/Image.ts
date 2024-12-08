import {
  DevicePlatformIdentifiers,
  DistributionPlatformIdentifiers,
} from "./Platform";

export interface Image {
  /**
   * A string that specifies the path to the icon image file.
   */
  readonly src: string;
  /**
   * A string that specifies one or more sizes at which the icon file can be used.
   * Each size is specified as `<width in pixels>`x`<height in pixels>`.
   * If multiple sizes are specified, they are separated by spaces; for example, `48x48 96x96`.
   * Refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/Manifest/icons#sizes)
   */
  readonly sizes?: string;
  /**
   * A string that specifies the [MIME type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type) of the icon.
   */
  readonly type?: string;
}

export interface Icon extends Image {
  /**
   * Specifies the purpose of the icon, allowing one or more keywords separated by spaces.
   * Valid values are:
   *
   * - `monochrome`: Indicates the icon is intended to be used as a monochrome icon with a solid fill.
   * - `maskable`: Designed with icon masks and safe zones in mind, allowing parts outside the safe zone to be ignored.
   * - `any`: Indicates the icon is suitable for any context.
   *
   * Examples: `"monochrome"`, `"maskable any"`, `"any maskable"`.
   *
   * **Note**: Order and duplicates are not enforced.
   * @default "any"
   */
  readonly purpose?: string;
}

export interface Screenshot extends Image {
  /**
   * String that represents a class of devices.
   * This should be used only when the screenshot is only applicable for a particular form factor.
   *
   * - `narrow` the screenshot is applicable only to narrow screens.
   * - `wide` the screenshot is applicable only to wide screens.
   *
   */
  readonly form_factor: "narrow" | "wide";
  /**
   * String that represents the accessible name of the screenshot object.
   */
  readonly label: string;
  /**
   * String that represents the platform to which the screenshot applies.
   * This should be used when a screenshot is only applicable to a specific device or distribution platform.
   */
  readonly platform:
    | DevicePlatformIdentifiers
    | DistributionPlatformIdentifiers
    | (string & NonNullable<unknown>);
}
