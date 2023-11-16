import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { typescriptPaths } from "rollup-plugin-typescript-paths";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
	plugins: [
		react(),
		dts({
			outDir: "dist",
		}),
	],
	resolve: {
		alias: [
			{
				find: "~",
				replacement: path.resolve(__dirname, "./src"),
			},
		],
	},
	build: {
		manifest: true,
		minify: true,
		reportCompressedSize: true,
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"),
			fileName: (format) => `index.${format}.js`,
			name: "index",
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
				},
			},
			plugins: [
				typescriptPaths({
					preserveExtensions: true,
				}),
				typescript({
					sourceMap: false,
					declaration: true,
					outDir: "dist",
				}),
			],
		},
	},
});
