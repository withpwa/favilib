/* eslint-disable */

/**
    Make sure you have the lates build. Run `npm run build` to rebuild.
    Run `node createExamples.js` to create the icons, splashs and files.
**/

import favicons from "../dist/index.mjs";
import fs from "fs/promises";
import { fileURLToPath } from "url";

const source = fileURLToPath(new URL("fixtures/logo.png", import.meta.url)); // Source image(s). `string`, `buffer` or array of `string`

const configuration = {
  name: null, // Your application's name. `string`
  short_name: null, // Your application's short_name. `string`. Optional. If not set, appName will be used
  description: null, // Your application's description. `string`
  appleStatusBarStyle: "black-translucent", // Style for Apple status bar: "black-translucent", "default", "black". `string`
  themes: ["#fff", "#000"], // Theme color user for example in Android's task switcher. `string`
  manifest: {
    dir: "auto", // Primary text direction for name, short_name, and description
    lang: "en-US", // Primary language for name and short_name
    background: "#fff", // Background colour for flattened icons. `string`
    orientation: "any", // Default orientation: "any", "natural", "portrait" or "landscape". `string`
    scope: "/", // set of URLs that the browser considers within your app
    start_url: "/?homescreen=1", // Start URL when launching the application from a device. `string`
    display: "standalone", // Preferred display mode: "fullscreen", "standalone", "minimal-ui" or "browser". `string`
    display_override: ["window-controls-overlay", "minimal-ui"],
    // ......
  },
  icons: {
    android: true, // Create Android homescreen icon. `boolean` or `{ offset, background }`
    appleIcon: true, // Create Apple touch icons. `boolean` or `{ offset, background }`
    appleStartup: true, // Create Apple startup images. `boolean` or `{ offset, background }`
    favicons: true, // Create regular favicons. `boolean` or `{ offset, background }`
    windows: true, // Create Windows 8 tile icons. `boolean` or `{ offset, background }`
    yandex: true, // Create Yandex browser icon. `boolean` or `{ offset, background }`
  },
  manifestMaskable: false,
  pixel_art: false, // Keeps pixels "sharp" when scaling up, for pixel art.  Only supported in offline mode.
  cacheBustingQueryParam: null, // Query parameter added to all URLs that acts as a cache busting system. `string | null`
  version: "1.0", // Your application's version string. `string`
  loadManifestWithCredentials: false, // Browsers don't send cookies when fetching a manifest, enable this to fix that. `boolean`
};

const response = await favicons(source, configuration);

const outputDir = fileURLToPath(new URL("tmp/", import.meta.url));
await fs.mkdir(outputDir, { recursive: true });

// Save images
for (let item of response.images) {
  await fs.writeFile(`${outputDir}${item.name}`, item.contents, "binary");
  console.log(`${item.name} saved.`);
}

// Save files
for (let item of response.files) {
  await fs.writeFile(`${outputDir}${item.name}`, item.contents, "binary");
  console.log(`${item.name} saved.`);
}

// Save HTML files
await fs.writeFile(`${outputDir}index.html`, response.html, "binary");
console.log("index.html saved.");
