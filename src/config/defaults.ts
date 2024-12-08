import { Manifest } from "../types/manifest";
import { Shotcut } from "../types/manifest/w3/Shotcut";
import { Screenshot } from "../types/manifest/w3/Image";
import { AppleStatusBarStyle } from "../types/apple";
import { PlatformName } from "../platforms";

export interface IconSize {
  readonly width: number;
  readonly height: number;
}

export interface IconOptions {
  readonly sizes: IconSize[];
  readonly offset?: number;
  readonly background?: string | boolean;
  readonly transparent: boolean;
  readonly rotate: boolean;
  readonly purpose?: string;
  readonly pixelArt?: boolean;
}

export interface NamedIconOptions extends IconOptions {
  readonly name: string;
}

export interface FileOptions {
  readonly manifestFileName?: string;
}

export interface OutputOptions {
  images?: boolean | string;
  files?: boolean | string;
  html?: boolean;
  assetsPrefix?: string;
}

export interface ShortcutOptions
  extends Omit<Shotcut, "icons" | "icons_localized"> {
  /**
   * Shortcut icon source file, used to automatically generate transparent icons of (36, 48, 72, 96, 144, 192) square sizes.
   */
  readonly icon?: string | Buffer | (string | Buffer)[];
}

export interface ScreenshotOptions
  extends Omit<Screenshot, "src" | "form_factor"> {
  /**
   * Source file used to produce screenshots. Currently only supports format conversion, controlled by `type` type
   */
  readonly src: string | Buffer | (string | Buffer)[];
  readonly form_factor?: Screenshot["form_factor"];
}

export interface FaviconOptions
  extends Pick<
    Manifest,
    "name" | "name_localized" | "short_name" | "short_name_localized"
  > {
  /**
   * Specify the value of the `theme_color` member in the manifest. Control the user's preferred color scheme (light and dark).
   * @example
   * ```js
   * themes: ["#fff", "#000"]
   * ```
   * output HTML
   * ```html
   * <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff">
   * <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000">
   * ```
   */
  readonly themes?: string[];
  readonly appleStatusBarStyle?: AppleStatusBarStyle;
  /**
   * Similar to the background_color in the manifest.
   * Will be used as the default background color when some icons are generated
   */
  readonly background?: string;
  /**
   * Specify the rules you need in `manifest.webmanifest`.
   *
   * @tutorial
   * Currently supports all rules in [w3.org](https://www.w3.org/TR/appmanifest/#web-application-manifest) and some rules in Edge.
   * Please submit an issue if necessary to expand more.
   */
  readonly manifest?: Omit<
    Manifest,
    | "name"
    | "name_localized"
    | "short_name"
    | "short_name_localized"
    | "theme_color"
    | "background_color"
    | "icons"
    | "shortcuts"
    | "screenshots"
  >;
  /**
   * Specify generated rules and automatically add `icons` member to manifest.
   */
  readonly icons?: Record<
    PlatformName,
    boolean | (NamedIconOptions | string)[]
  >;
  /**
   * Specify generated rules and automatically add `shortcuts` member to manifest.
   */
  readonly shortcuts?: Array<ShortcutOptions>;
  /**
   * Specify generated rules and automatically add `screenshots` member to manifest.
   */
  readonly screenshots?: Array<ScreenshotOptions>;
  readonly loadManifestWithCredentials?: boolean;
  readonly manifestRelativePaths?: boolean;
  /**
   * Specify rules for `maskable` icons and automatically add sub-items to the `icons` member in the manifest.
   */
  readonly manifestMaskable?: boolean | string | Buffer | (string | Buffer)[];
  /**
   * @example "v=1.0.0"
   */
  readonly cacheBustingQueryParam?: string | null;
  /**
   * Keeps pixels "sharp" when scaling up, for pixel art.
   */
  readonly pixel_art?: boolean;
  readonly output?: OutputOptions;
  /**
   * Customize the manifest file name for each platform.
   */
  readonly files?: Record<PlatformName, FileOptions>;
  /**
   * Specify the version value in the Yandex browser manifest.
   */
  readonly version?: string;
}

export const defaultOptions: FaviconOptions = {
  name: null,
  short_name: null,
  appleStatusBarStyle: "black-translucent",
  themes: ["#fff", "#000"],
  background: "#fff",
  manifest: {
    start_url: "/?homescreen=1",
    orientation: "any",
    display: "standalone",
    display_override: ["window-controls-overlay", "minimal-ui"],
  },
  icons: {
    favicons: true,
    android: true,
    appleIcon: true,
    appleStartup: true,
    windows: true,
    yandex: true,
  },
  loadManifestWithCredentials: false,
  manifestRelativePaths: false,
  manifestMaskable: false,
  cacheBustingQueryParam: null,
  pixel_art: false,
  output: {
    images: true,
    files: true,
    html: true,
    assetsPrefix: "/",
  },
  version: "1.0.0",
};
