import { defineConfig } from 'vitest/config';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
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
