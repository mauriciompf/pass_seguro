import { defineConfig } from "vitest/config";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  test: {
    include: ["**/*.test.ts"],
    globals: true,
    environment: "jsdom",
  },
});
