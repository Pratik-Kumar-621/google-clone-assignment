import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.googleclone.app",
  appName: "googleClone",
  webDir: "dist",
  bundledWebRuntime: false,

  server: {
    url: "http://localhost:5173",
    cleartext: true,
  },
};

export default config;
