import { resolve } from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const isStorybook = Boolean(process.env.STORYBOOK);

export default defineConfig({
  plugins: isStorybook
    ? []
    : [
        dts({
          include: ["src"],
          exclude: ["src/stories/**", "src/**/*.stories.*", "src/**/*.mdx"],
          rollupTypes: true,
        }),
      ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "recharts",
      ],
    },
    copyPublicDir: false,
  },
});
