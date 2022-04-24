import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'juan',
		secondName: "ignacio"
	}
});

export default app;