import "zx/globals";

import react from "@vitejs/plugin-react";
import {defineConfig, Plugin} from "vite";

import {manifest} from "./nwts.manifest";

async function options() {
  await import("zx/globals");

  await fs.writeJSON(path.join("public", "package.json"), manifest);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), {options} as unknown as Plugin],
  build: {sourcemap: "inline", outDir: process.env.BUILD_DIRECTORY}
});
