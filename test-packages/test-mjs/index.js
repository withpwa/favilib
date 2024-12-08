/* eslint-disable */
import { favicons, config } from "favilib";

const ok = favicons != null && config != null;
process.exit(ok ? 0 : 1);
