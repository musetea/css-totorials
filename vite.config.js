import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
const pathSrc = path.resolve(__dirname, "./src");

/** @type {import('vite').UserConfig} */
const config = {
    // css:{
    //     preprocessorOptions: {
    //         scss: { additionalData: `@import "${pathSrc}/scss/main";` },
    //     },
    // },

	plugins: [
        sveltekit({}),
    ],
    resolve:{
        alias:{
            $comp: path.resolve('./src/components'),
            $scss: path.resolve('./src/scss')
        }
    }
};

export default config;
