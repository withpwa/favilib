/* eslint-disable */
const { favicons, config } = require("favilib");

const ok = favicons != null && config != null;
process.exit(ok ? 0 : 1);
