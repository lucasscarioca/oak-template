import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
	server: {
		port: 3000,
	},
	preview: {
		port: 3000,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@shared': path.resolve(__dirname, '../../shared'),
			'@server': path.resolve(__dirname, '../server'),
		},
	},
	plugins: [react()],
})
