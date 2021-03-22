import { ssr } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import * as setup from "../../src/setup/index.ts";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\" class=\"h-100\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <link rel=\"icon\" href=\"/favicon.ico\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    " + head + "\n\n    <link rel='stylesheet' href='/css/bootstrap.min.css'>\n    <link rel='stylesheet' href='/css/floating-labels.css'>\n\n  </head>\n  <body id=\"svelte\" class=\"d-flex flex-column\">\n    " + body + "\n  </body>\n  <script defer src='/js/bootstrap.min.js'></script>\n</html>\n";

set_paths({"base":"","assets":"/."});

// allow paths to be overridden in svelte-kit start
export function init({ paths }) {
	set_paths(paths);
}

const d = decodeURIComponent;
const empty = () => ({});

const components = [
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/advanced.svelte"),
	() => import("../../src/routes/settings.svelte"),
	() => import("../../src/routes/login.svelte"),
	() => import("../../src/routes/edit/[slug].svelte")
];



const manifest = {
	assets: [{"file":"css/bootstrap.min.css","size":153402,"type":"text/css"},{"file":"css/floating-labels.css","size":1712,"type":"text/css"},{"file":"css/ke.css","size":151,"type":"text/css"},{"file":"favicon.ico","size":15406,"type":"image/vnd.microsoft.icon"},{"file":"images/Alerts/FordWarning.png","size":2315,"type":"image/png"},{"file":"images/Alerts/gauge.png","size":2315,"type":"image/png"},{"file":"images/Alerts/warningBlock.png","size":7013,"type":"image/png"},{"file":"images/Background/BlackBackground.png","size":3868,"type":"image/png"},{"file":"images/Background/CarbonFiber.png","size":223442,"type":"image/png"},{"file":"images/Background/alignment.png","size":9103,"type":"image/png"},{"file":"images/Background/banner1.jpg","size":18600,"type":"image/jpeg"},{"file":"images/Background/bg.jpg","size":58523,"type":"image/jpeg"},{"file":"images/Background/green.jpg","size":95095,"type":"image/jpeg"},{"file":"images/Clock/Gauge.png","size":56425,"type":"image/png"},{"file":"images/Dirt/gauge.png","size":20032,"type":"image/png"},{"file":"images/Dirt/needle.png","size":24328,"type":"image/png"},{"file":"images/Glow/gauge.png","size":46894,"type":"image/png"},{"file":"images/Glow/needle.png","size":1691,"type":"image/png"},{"file":"images/Linear/gauge.png","size":645,"type":"image/png"},{"file":"images/Stock/gauge.png","size":49334,"type":"image/png"},{"file":"images/Stock/needle.png","size":12646,"type":"image/png"},{"file":"images/StockRS/gauge.png","size":51697,"type":"image/png"},{"file":"images/StockRS/needle.png","size":10993,"type":"image/png"},{"file":"images/Stock_orange/gauge.png","size":17507,"type":"image/png"},{"file":"images/Stock_orange/needle.png","size":12646,"type":"image/png"},{"file":"images/logo.png","size":14975,"type":"image/png"},{"file":"js/bootstrap.bundle.js","size":246809,"type":"application/javascript"},{"file":"js/bootstrap.bundle.js.map","size":438468,"type":"application/json"},{"file":"js/bootstrap.bundle.min.js","size":80217,"type":"application/javascript"},{"file":"js/bootstrap.bundle.min.js.map","size":315920,"type":"application/json"},{"file":"js/bootstrap.esm.js","size":144926,"type":"application/javascript"},{"file":"js/bootstrap.esm.js.map","size":282055,"type":"application/json"},{"file":"js/bootstrap.esm.min.js","size":79148,"type":"application/javascript"},{"file":"js/bootstrap.esm.min.js.map","size":221500,"type":"application/json"},{"file":"js/bootstrap.js","size":153916,"type":"application/javascript"},{"file":"js/bootstrap.js.map","size":283267,"type":"application/json"},{"file":"js/bootstrap.min.css.map","size":588906,"type":"application/json"},{"file":"js/bootstrap.min.js","size":63450,"type":"application/javascript"},{"file":"js/bootstrap.min.js.map","size":214935,"type":"application/json"},{"file":"robots.txt","size":67,"type":"text/plain"}],
	layout: () => import("../../src/routes/$layout.svelte"),
	error: () => import("../../src/routes/$error.svelte"),
	pages: [
		{
					pattern: /^\/$/,
					params: empty,
					parts: [components[0]],
					css: ["assets/start-dbd11ffd.css", "assets/pages/index.svelte-42fcf5f8.css", "assets/Slider-ae22a239.css"],
					js: ["start-92340a14.js", "chunks/stores-dbc60e4c.js", "chunks/singletons-dd9f995d.js", "pages/index.svelte-f4498729.js", "chunks/Slider-b4cf688f.js"]
				},
		{
					pattern: /^\/advanced\/?$/,
					params: empty,
					parts: [components[1]],
					css: ["assets/start-dbd11ffd.css", "assets/pages/advanced.svelte-be6f3cc0.css"],
					js: ["start-92340a14.js", "chunks/stores-dbc60e4c.js", "chunks/singletons-dd9f995d.js", "pages/advanced.svelte-03b75e45.js"]
				},
		{
					pattern: /^\/settings\/?$/,
					params: empty,
					parts: [components[2]],
					css: ["assets/start-dbd11ffd.css"],
					js: ["start-92340a14.js", "chunks/stores-dbc60e4c.js", "chunks/singletons-dd9f995d.js", "pages/settings.svelte-1e3af1ce.js"]
				},
		{
					pattern: /^\/login\/?$/,
					params: empty,
					parts: [components[3]],
					css: ["assets/start-dbd11ffd.css"],
					js: ["start-92340a14.js", "chunks/stores-dbc60e4c.js", "chunks/singletons-dd9f995d.js", "pages/login.svelte-6a2e6eb4.js"]
				},
		{
					pattern: /^\/edit\/([^/]+?)\/?$/,
					params: (m) => ({ slug: d(m[1])}),
					parts: [components[4]],
					css: ["assets/start-dbd11ffd.css", "assets/pages/edit/[slug].svelte-cf839993.css", "assets/Slider-ae22a239.css"],
					js: ["start-92340a14.js", "chunks/stores-dbc60e4c.js", "chunks/singletons-dd9f995d.js", "pages/edit/[slug].svelte-3018a69b.js", "chunks/Slider-b4cf688f.js"]
				}
	],
	endpoints: [
		{ pattern: /^\/api\/constants\/?$/, params: empty, load: () => import("../../src/routes/api/constants.ts") },
		{ pattern: /^\/api\/config\/?$/, params: empty, load: () => import("../../src/routes/api/config.ts") },
		{ pattern: /^\/api\/user\/?$/, params: empty, load: () => import("../../src/routes/api/user.ts") }
	]
};

export function render(request, {
	paths = {"base":"","assets":"/."},
	local = false,
	only_prerender = false,
	get_static_file
} = {}) {
	return ssr(request, {
		paths,
		local,
		template,
		manifest,
		target: "#svelte",
		entry: "/./_app/start-92340a14.js",
		root,
		setup,
		dev: false,
		amp: false,
		only_prerender,
		app_dir: "_app",
		host: null,
		host_header: null,
		get_stack: error => error.stack,
		get_static_file,
		get_amp_css: dep => amp_css_lookup[dep]
	});
}