export interface RelatedApplication {
  /**
   * A string that identifies the platform on which the application can be found.
   * Examples include `amazon` (Amazon App Store), `play` (Google Play Store), and `windows` (Windows Store).
   * See the complete list of possible [platform values](https://github.com/w3c/manifest/wiki/Platforms).
   */
  readonly platform: string;
  /**
   * A string that represents the URL at which the platform-specific application can be found. If not specified, an `id` must be provided.
   */
  readonly url?: string;
  /**
   * A string with the ID used to represent the application on the specified platform. If not specified, a `url` must be provided.
   */
  readonly id?: string;
}
