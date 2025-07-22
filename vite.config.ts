// ABOUTME: Vite configuration for React project with TailwindCSS and path aliasing.
// ABOUTME: Sets up plugins and resolves @ to src directory.
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { designTokensPlugin } from "./src/design-system/vite-plugin"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), designTokensPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
    },
  },
})
