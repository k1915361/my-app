import { defineConfig } from 'vitest/config';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
    base: "/solidjslearn/",
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
    },
    optimizeDeps: {
        exclude: [
            'library/model/*',
            'face_expression_model-shard1'
        ]
    }
});
