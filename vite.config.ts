import solid from "solid-start/vite";
import staticAdapter from "solid-start";
import { defineConfig } from 'vitest/config';

export default defineConfig({
  base: "/solidjslearn/",
  plugins: [solid({ adapter: staticAdapter() })],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  test: {
    includeSource: ["src/**/*.{ts,tsx}"],
    coverage: {
        reporter: ["text", "html"],
    }
  }
});
