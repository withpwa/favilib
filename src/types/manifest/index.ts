import { W3Manifest } from "./w3";
import { EdgeManifest } from "./edge";

type PlatformManifests = W3Manifest & EdgeManifest;

export interface Manifest extends PlatformManifests {}
