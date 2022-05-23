//import { AstroIntegration } from 'astro';

//const error = import.meta.env.DEV ? true : false

function createScript() {
	console.log("I'M WORKING!!!");
	return `
	        import render from 'katex/contrib/auto-render';
			console.warn("I'M WORKING VERY MUCH!!!");
			const elements = window?.document.getElementsByClassName('astro-katex');
			let size = elements.length;
			for (let i = 0; i<size; i++) {
				render(elements[i], {
					throwOnError: false
				});
			}
		`
}


export default function () {
	return {
		name: '@astrojs/astro-katex',
		hooks: {
			'astro:config:setup': ({ injectScript }) => {
				injectScript(
                    'page',
                    createScript()
                )
			},
		},
	};
}