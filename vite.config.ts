import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const APP_NAME = process.env.VITE_APP_NAME || "APP NAME";

  return defineConfig({
    base: `/${process.env.VITE_APP_REPO_NAME}`,
    plugins: [react(), legacy()],
    // test: {
    //   globals: true,
    //   environment: 'jsdom',
    //   setupFiles: './src/setupTests.ts',
    // }
  });
};
