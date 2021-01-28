/* .svelte/assets/components/error.svelte generated by Svelte v3.32.0 */
import {
	SvelteComponent,
	append,
	children,
	claim_element,
	claim_space,
	claim_text,
	detach,
	element,
	empty,
	init,
	insert,
	noop,
	safe_not_equal,
	set_data,
	space,
	text
} from "../../../_snowpack/pkg/svelte/internal.js";

function create_if_block(ctx) {
	let pre;
	let t_value = /*error*/ ctx[1].stack + "";
	let t;

	return {
		c() {
			pre = element("pre");
			t = text(t_value);
		},
		l(nodes) {
			pre = claim_element(nodes, "PRE", {});
			var pre_nodes = children(pre);
			t = claim_text(pre_nodes, t_value);
			pre_nodes.forEach(detach);
		},
		m(target, anchor) {
			insert(target, pre, anchor);
			append(pre, t);
		},
		p(ctx, dirty) {
			if (dirty & /*error*/ 2 && t_value !== (t_value = /*error*/ ctx[1].stack + "")) set_data(t, t_value);
		},
		d(detaching) {
			if (detaching) detach(pre);
		}
	};
}

function create_fragment(ctx) {
	let h1;
	let t0;
	let t1;
	let p;
	let t2_value = /*error*/ ctx[1].message + "";
	let t2;
	let t3;
	let if_block_anchor;
	let if_block = /*error*/ ctx[1].stack && create_if_block(ctx);

	return {
		c() {
			h1 = element("h1");
			t0 = text(/*status*/ ctx[0]);
			t1 = space();
			p = element("p");
			t2 = text(t2_value);
			t3 = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, /*status*/ ctx[0]);
			h1_nodes.forEach(detach);
			t1 = claim_space(nodes);
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, t2_value);
			p_nodes.forEach(detach);
			t3 = claim_space(nodes);
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, p, anchor);
			append(p, t2);
			insert(target, t3, anchor);
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
		},
		p(ctx, [dirty]) {
			if (dirty & /*status*/ 1) set_data(t0, /*status*/ ctx[0]);
			if (dirty & /*error*/ 2 && t2_value !== (t2_value = /*error*/ ctx[1].message + "")) set_data(t2, t2_value);

			if (/*error*/ ctx[1].stack) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(h1);
			if (detaching) detach(t1);
			if (detaching) detach(p);
			if (detaching) detach(t3);
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { status } = $$props;
	let { error } = $$props;

	$$self.$$set = $$props => {
		if ("status" in $$props) $$invalidate(0, status = $$props.status);
		if ("error" in $$props) $$invalidate(1, error = $$props.error);
	};

	return [status, error];
}

class Error extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { status: 0, error: 1 });
	}
}

export default Error;
//# sourceMappingURL=error.svelte.js.map
