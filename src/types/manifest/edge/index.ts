import { W3Manifest } from "../w3";
import { Widget } from "./Widget";

interface EdageSidePanel {
  preferred_width: number;
}

export interface EdgeManifest extends W3Manifest {
  /**
   * Enable [sidebar](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/sidebar) support in your PWA
   */
  readonly edge_side_panel?: EdageSidePanel;
  /**
   * Widgets are [defined](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/widgets#define-widgets)
   * in your PWA manifest file, by using the `widgets` manifest member.
   */
  readonly widgets?: Array<Widget>;
}
