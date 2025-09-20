import * as path from "node:path";
import reactRefresh from "@vitejs/plugin-react-refresh";
import {defineConfig} from "vite";
import {viteSingleFile} from "vite-plugin-singlefile";

// https://vitejs.dev/config/
export default defineConfig({
	root: "./ui-src",
	plugins: [reactRefresh(), viteSingleFile()],
	resolve: {
		alias: {
			"@plugin-src": path.resolve(__dirname, "plugin-src"),
			"@ui-src": path.resolve(__dirname, "ui-src"),
			"@shared": path.resolve(__dirname, "shared"),
		},
	},
	build: {
		target: "esnext",
		assetsInlineLimit: 100000000,
		chunkSizeWarningLimit: 100000000,
		cssCodeSplit: false,
		outDir: "../dist",
		rollupOptions: {
			output: {
				inlineDynamicImports: true,
			},
		},
	},
});
