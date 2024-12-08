import favicons from "../src";
import { logo_png } from "./util";

test("manifest should support user's prefer color scheme", async () => {
  expect.assertions(3);

  const result = await favicons(logo_png, {
    themes: ["#fff", "#000"],
    icons: {
      android: ["android-chrome-192x192.png"],
      appleIcon: false,
      appleStartup: false,
      favicons: false,
      windows: false,
      yandex: false,
    },
  });

  const manifestFile = result.files.find(
    (file) => file.name === "manifest.webmanifest",
  );

  const manifest = JSON.parse(manifestFile.contents);

  await expect(result).toMatchFaviconsSnapshot();

  expect(result.html).toEqual(
    expect.arrayContaining([
      expect.stringContaining("theme-color"),
      expect.stringContaining("prefers-color-scheme: light"),
      expect.stringContaining("#fff"),
      expect.stringContaining("prefers-color-scheme: dark"),
      expect.stringContaining("#000"),
    ]),
  );

  expect(manifest.theme_color).toBe(
    "#fff",
    "Expected theme_color in manifest.webmanifest to be '#fff'",
  );
});
