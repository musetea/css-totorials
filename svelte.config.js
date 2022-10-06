import adapter from '@sveltejs/adapter-auto';
import preprocessor from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocessor({
        sass:{
            prependData: '@import "./src/scss/main.scss";',
            charset: false,
        }
    }),

    onwarn: (warning, handler) => {
        const {code, frame} = warning;
        if(code === 'css-unused-selector'){
            return;
        }
        handler(warning);
    },

	kit: {
		adapter: adapter(),
	},

};

export default config;
