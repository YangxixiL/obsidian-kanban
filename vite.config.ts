import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

const pluginOutDir = path.resolve(
    process.env.HOME!,
    'Sync/Obsidian Vault/.obsidian/plugins/obsidian-kanban-dev'
);

export default defineConfig({
    plugins: [preact(), tsconfigPaths()],
    build: {
        target: 'esnext',
        outDir: pluginOutDir,
        emptyOutDir: false,
        sourcemap: true,
        minify: false,
        lib: {
            entry: './src/main.ts',
            formats: ['cjs'],
            fileName: () => 'main.js',
        },
        rollupOptions: {
            external: ['obsidian',
                '@codemirror/state',
                '@codemirror/view',
                '@codemirror/language',
                '@codemirror/commands'],
            output: {
                exports: 'default',
            },
        },
    },
});