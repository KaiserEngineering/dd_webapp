import './index.svelte.css.proxy.js';
/* src/routes/index.svelte generated by Svelte v3.32.0 */
import {
	SvelteComponent,
	append,
	attr,
	check_outros,
	children,
	claim_component,
	claim_element,
	claim_space,
	claim_text,
	component_subscribe,
	create_component,
	destroy_component,
	destroy_each,
	detach,
	element,
	empty,
	group_outros,
	init,
	insert,
	mount_component,
	safe_not_equal,
	set_data,
	set_store_value,
	space,
	text,
	transition_in,
	transition_out
} from "../../_snowpack/pkg/svelte/internal.js";

import { session } from "../assets/runtime/app/stores.js";
import { _ } from "../../_snowpack/pkg/lodash.js";
import Slider from "../../_components/Slider.svelte.js";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[4] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	return child_ctx;
}

// (32:0) {#if views}
function create_if_block(ctx) {
	let each_1_anchor;
	let current;
	let each_value = Object.keys(/*views*/ ctx[0]);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l(nodes) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, each_1_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (dirty & /*Object, views, KE_PIDS, Slider, toggleEnabled*/ 7) {
				each_value = Object.keys(/*views*/ ctx[0]);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach(each_1_anchor);
		}
	};
}

// (59:16) {#if gauge && gauge.pid}
function create_if_block_1(ctx) {
	let div;
	let p;

	let t0_value = (/*KE_PIDS*/ ctx[1][/*gauge*/ ctx[7].pid].shortName
	? /*KE_PIDS*/ ctx[1][/*gauge*/ ctx[7].pid].shortName
	: /*KE_PIDS*/ ctx[1][/*gauge*/ ctx[7].pid].name) + "";

	let t0;
	let t1;

	return {
		c() {
			div = element("div");
			p = element("p");
			t0 = text(t0_value);
			t1 = space();
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			p = claim_element(div_nodes, "P", { class: true });
			var p_nodes = children(p);
			t0 = claim_text(p_nodes, t0_value);
			p_nodes.forEach(detach);
			t1 = claim_space(div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(p, "class", "pid svelte-1t6ndzl");
			attr(div, "class", "text-center");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, p);
			append(p, t0);
			append(div, t1);
		},
		p(ctx, dirty) {
			if (dirty & /*views*/ 1 && t0_value !== (t0_value = (/*KE_PIDS*/ ctx[1][/*gauge*/ ctx[7].pid].shortName
			? /*KE_PIDS*/ ctx[1][/*gauge*/ ctx[7].pid].shortName
			: /*KE_PIDS*/ ctx[1][/*gauge*/ ctx[7].pid].name) + "")) set_data(t0, t0_value);
		},
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

// (58:14) {#each views[id].gauges as gauge}
function create_each_block_1(ctx) {
	let if_block_anchor;
	let if_block = /*gauge*/ ctx[7] && /*gauge*/ ctx[7].pid && create_if_block_1(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
		},
		p(ctx, dirty) {
			if (/*gauge*/ ctx[7] && /*gauge*/ ctx[7].pid) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

// (33:2) {#each Object.keys(views) as id }
function create_each_block(ctx) {
	let div7;
	let div2;
	let div0;
	let h5;
	let t0_value = /*views*/ ctx[0][/*id*/ ctx[4]].name + "";
	let t0;
	let t1;
	let div1;
	let switch_instance;
	let t2;
	let a;
	let div6;
	let img0;
	let img0_src_value;
	let t3;
	let div5;
	let div3;
	let img1;
	let img1_src_value;
	let t4;
	let img2;
	let img2_src_value;
	let t5;
	let div4;
	let a_href_value;
	let t6;
	let current;
	var switch_value = Slider;

	function switch_props(ctx) {
		return {
			props: {
				callback: /*toggleEnabled*/ ctx[2],
				callbackArgs: /*id*/ ctx[4],
				checked: /*views*/ ctx[0][/*id*/ ctx[4]].enabled
			}
		};
	}

	if (switch_value) {
		switch_instance = new switch_value(switch_props(ctx));
	}

	let each_value_1 = /*views*/ ctx[0][/*id*/ ctx[4]].gauges;
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	return {
		c() {
			div7 = element("div");
			div2 = element("div");
			div0 = element("div");
			h5 = element("h5");
			t0 = text(t0_value);
			t1 = space();
			div1 = element("div");
			if (switch_instance) create_component(switch_instance.$$.fragment);
			t2 = space();
			a = element("a");
			div6 = element("div");
			img0 = element("img");
			t3 = space();
			div5 = element("div");
			div3 = element("div");
			img1 = element("img");
			t4 = space();
			img2 = element("img");
			t5 = space();
			div4 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t6 = space();
			this.h();
		},
		l(nodes) {
			div7 = claim_element(nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div2 = claim_element(div7_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h5 = claim_element(div0_nodes, "H5", {});
			var h5_nodes = children(h5);
			t0 = claim_text(h5_nodes, t0_value);
			h5_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t1 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			if (switch_instance) claim_component(switch_instance.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t2 = claim_space(div7_nodes);
			a = claim_element(div7_nodes, "A", { href: true });
			var a_nodes = children(a);
			div6 = claim_element(a_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			img0 = claim_element(div6_nodes, "IMG", { class: true, src: true, alt: true });
			t3 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div3 = claim_element(div5_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			img1 = claim_element(div3_nodes, "IMG", { class: true, src: true });
			t4 = claim_space(div3_nodes);
			img2 = claim_element(div3_nodes, "IMG", { class: true, src: true });
			div3_nodes.forEach(detach);
			t5 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div4_nodes);
			}

			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			a_nodes.forEach(detach);
			t6 = claim_space(div7_nodes);
			div7_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "text-left col-6");
			attr(div1, "class", "text-right col-6");
			attr(div2, "class", "row m-2");
			attr(img0, "class", "card-img-top svelte-1t6ndzl");
			if (img0.src !== (img0_src_value = "images/Background/" + /*views*/ ctx[0][/*id*/ ctx[4]].background)) attr(img0, "src", img0_src_value);
			attr(img0, "alt", "view background");
			attr(img1, "class", "image-overlay svelte-1t6ndzl");
			if (img1.src !== (img1_src_value = "images/" + /*views*/ ctx[0][/*id*/ ctx[4]].theme + "/needle.png")) attr(img1, "src", img1_src_value);
			attr(img2, "class", "image-overlay svelte-1t6ndzl");
			if (img2.src !== (img2_src_value = "images/" + /*views*/ ctx[0][/*id*/ ctx[4]].theme + "/gauge.png")) attr(img2, "src", img2_src_value);
			attr(div3, "class", "col-6 text-left");
			attr(div4, "class", "col-6 d-flex flex-column justify-content-center");
			attr(div5, "class", "row card-img-overlay");
			attr(div6, "class", "card transparent svelte-1t6ndzl");
			attr(a, "href", a_href_value = "/edit/" + /*id*/ ctx[4]);
			attr(div7, "class", "container col-sm-10 col-md-6 pr-4 pl-4");
		},
		m(target, anchor) {
			insert(target, div7, anchor);
			append(div7, div2);
			append(div2, div0);
			append(div0, h5);
			append(h5, t0);
			append(div2, t1);
			append(div2, div1);

			if (switch_instance) {
				mount_component(switch_instance, div1, null);
			}

			append(div7, t2);
			append(div7, a);
			append(a, div6);
			append(div6, img0);
			append(div6, t3);
			append(div6, div5);
			append(div5, div3);
			append(div3, img1);
			append(div3, t4);
			append(div3, img2);
			append(div5, t5);
			append(div5, div4);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div4, null);
			}

			append(div7, t6);
			current = true;
		},
		p(ctx, dirty) {
			if ((!current || dirty & /*views*/ 1) && t0_value !== (t0_value = /*views*/ ctx[0][/*id*/ ctx[4]].name + "")) set_data(t0, t0_value);
			const switch_instance_changes = {};
			if (dirty & /*views*/ 1) switch_instance_changes.callbackArgs = /*id*/ ctx[4];
			if (dirty & /*views*/ 1) switch_instance_changes.checked = /*views*/ ctx[0][/*id*/ ctx[4]].enabled;

			if (switch_value !== (switch_value = Slider)) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, div1, null);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}

			if (!current || dirty & /*views*/ 1 && img0.src !== (img0_src_value = "images/Background/" + /*views*/ ctx[0][/*id*/ ctx[4]].background)) {
				attr(img0, "src", img0_src_value);
			}

			if (!current || dirty & /*views*/ 1 && img1.src !== (img1_src_value = "images/" + /*views*/ ctx[0][/*id*/ ctx[4]].theme + "/needle.png")) {
				attr(img1, "src", img1_src_value);
			}

			if (!current || dirty & /*views*/ 1 && img2.src !== (img2_src_value = "images/" + /*views*/ ctx[0][/*id*/ ctx[4]].theme + "/gauge.png")) {
				attr(img2, "src", img2_src_value);
			}

			if (dirty & /*KE_PIDS, views, Object*/ 3) {
				each_value_1 = /*views*/ ctx[0][/*id*/ ctx[4]].gauges;
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div4, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_1.length;
			}

			if (!current || dirty & /*views*/ 1 && a_href_value !== (a_href_value = "/edit/" + /*id*/ ctx[4])) {
				attr(a, "href", a_href_value);
			}
		},
		i(local) {
			if (current) return;
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o(local) {
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div7);
			if (switch_instance) destroy_component(switch_instance);
			destroy_each(each_blocks, detaching);
		}
	};
}

function create_fragment(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*views*/ ctx[0] && create_if_block(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if (/*views*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*views*/ 1) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let views;
	let $session;
	component_subscribe($$self, session, $$value => $$invalidate(3, $session = $$value));
	let KE_PIDS = $session.constants.KE_PID;

	function toggleEnabled(id) {
		fetch("./api/config", {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ id })
		}).then(d => d.json()).then(d => {
			console.log(d);

			if (!_.isEqual(views, d.views)) {
				$$invalidate(0, views = d.views.views);
				set_store_value(session, $session.configuration.views = d.views.views, $session);
			}

			set_store_value(
				session,
				$session.actions = [
					{
						id: $session.count,
						msg: d.message,
						theme: d.ret ? "alert-info" : "alert-warning"
					},
					...$session.actions
				],
				$session
			);
		});
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$session*/ 8) {
			$: $$invalidate(0, views = $session.configuration.views);
		}
	};

	return [views, KE_PIDS, toggleEnabled, $session];
}

class Routes extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Routes;
//# sourceMappingURL=index.svelte.js.map
