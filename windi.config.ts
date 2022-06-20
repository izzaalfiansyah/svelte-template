import { defineConfig } from "windicss/helpers";

export default defineConfig({
  darkMode: false,
  extract: {
    include: ['src/**/*.svelte'],
    exclude: ['node_modules', '.git'],
  }
})