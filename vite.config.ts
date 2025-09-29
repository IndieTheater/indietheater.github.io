import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
        plugins: [tailwindcss(), sveltekit()],
        test: {
                projects: [
                        {
                                extends: './vite.config.ts',
                                test: {
                                        name: 'client',
                                        environment: 'browser',
                                        browser: {
                                                enabled: true,
                                                provider: 'playwright',
                                                instances: [{ browser: 'chromium' }]
                                        },
                                        include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
                                        exclude: ['src/lib/server/**'],
                                        setupFiles: ['./vitest-setup-client.ts']
                                }
                        },
                        {
                                extends: './vite.config.ts',
                                test: {
                                        name: 'server',
                                        environment: 'node',
                                        include: ['src/**/*.{test,spec}.{js,ts}'],
                                        exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
                                }
                        }
                ]
        },
        server: {
                host: '0.0.0.0',
                port: 5000,
                strictPort: true,
                allowedHosts: true
        }
});
