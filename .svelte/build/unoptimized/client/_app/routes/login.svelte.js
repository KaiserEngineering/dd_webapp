/* src/routes/login.svelte generated by Svelte v3.32.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_space,
	claim_text,
	component_subscribe,
	detach,
	element,
	init,
	insert,
	listen,
	noop,
	prevent_default,
	run_all,
	safe_not_equal,
	set_input_value,
	set_store_value,
	space,
	text
} from "../../_snowpack/pkg/svelte/internal.js";

import { goto } from "../assets/runtime/app/navigation.js";
import { session } from "../assets/runtime/app/stores.js";

function create_fragment(ctx) {
	let div3;
	let form;
	let div0;
	let img;
	let img_src_value;
	let t0;
	let h1;
	let t1;
	let t2;
	let div1;
	let input0;
	let t3;
	let label0;
	let t4;
	let t5;
	let div2;
	let input1;
	let t6;
	let label1;
	let t7;
	let t8;
	let button;
	let t9;
	let mounted;
	let dispose;

	return {
		c() {
			div3 = element("div");
			form = element("form");
			div0 = element("div");
			img = element("img");
			t0 = space();
			h1 = element("h1");
			t1 = text("Please sign in");
			t2 = space();
			div1 = element("div");
			input0 = element("input");
			t3 = space();
			label0 = element("label");
			t4 = text("Username");
			t5 = space();
			div2 = element("div");
			input1 = element("input");
			t6 = space();
			label1 = element("label");
			t7 = text("Password");
			t8 = space();
			button = element("button");
			t9 = text("Sign in");
			this.h();
		},
		l(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			form = claim_element(div3_nodes, "FORM", { class: true });
			var form_nodes = children(form);
			div0 = claim_element(form_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			img = claim_element(div0_nodes, "IMG", {
				src: true,
				alt: true,
				width: true,
				height: true
			});

			t0 = claim_space(div0_nodes);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Please sign in");
			h1_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t2 = claim_space(form_nodes);
			div1 = claim_element(form_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);

			input0 = claim_element(div1_nodes, "INPUT", {
				type: true,
				name: true,
				id: true,
				class: true,
				placeholder: true,
				required: true
			});

			t3 = claim_space(div1_nodes);
			label0 = claim_element(div1_nodes, "LABEL", { for: true });
			var label0_nodes = children(label0);
			t4 = claim_text(label0_nodes, "Username");
			label0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t5 = claim_space(form_nodes);
			div2 = claim_element(form_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);

			input1 = claim_element(div2_nodes, "INPUT", {
				type: true,
				name: true,
				id: true,
				class: true,
				placeholder: true,
				required: true
			});

			t6 = claim_space(div2_nodes);
			label1 = claim_element(div2_nodes, "LABEL", { for: true });
			var label1_nodes = children(label1);
			t7 = claim_text(label1_nodes, "Password");
			label1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t8 = claim_space(form_nodes);
			button = claim_element(form_nodes, "BUTTON", { class: true, type: true });
			var button_nodes = children(button);
			t9 = claim_text(button_nodes, "Sign in");
			button_nodes.forEach(detach);
			form_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			this.h();
		},
		h() {
			if (img.src !== (img_src_value = "images/logo.png")) attr(img, "src", img_src_value);
			attr(img, "alt", "");
			attr(img, "width", "72");
			attr(img, "height", "72");
			attr(h1, "class", "h3 mb-3 font-weight-normal");
			attr(div0, "class", "text-center container");
			attr(input0, "type", "text");
			attr(input0, "name", "username");
			attr(input0, "id", "Username");
			attr(input0, "class", "mb-2 form-control");
			attr(input0, "placeholder", "username");
			input0.required = true;
			attr(label0, "for", "username");
			attr(div1, "class", "form-label-group");
			attr(input1, "type", "password");
			attr(input1, "name", "password");
			attr(input1, "id", "password");
			attr(input1, "class", "mb-2 form-control");
			attr(input1, "placeholder", "Password");
			input1.required = true;
			attr(label1, "for", "password");
			attr(div2, "class", "form-label-group");
			attr(button, "class", "btn btn-lg btn-primary btn-block");
			attr(button, "type", "submit");
			attr(form, "class", "form-signin");
			attr(div3, "class", "col-sm-12 col-md-6 justify-content-center d-flex");
		},
		m(target, anchor) {
			insert(target, div3, anchor);
			append(div3, form);
			append(form, div0);
			append(div0, img);
			append(div0, t0);
			append(div0, h1);
			append(h1, t1);
			append(form, t2);
			append(form, div1);
			append(div1, input0);
			set_input_value(input0, /*username*/ ctx[0]);
			append(div1, t3);
			append(div1, label0);
			append(label0, t4);
			append(form, t5);
			append(form, div2);
			append(div2, input1);
			set_input_value(input1, /*password*/ ctx[1]);
			append(div2, t6);
			append(div2, label1);
			append(label1, t7);
			append(form, t8);
			append(form, button);
			append(button, t9);

			if (!mounted) {
				dispose = [
					listen(input0, "input", /*input0_input_handler*/ ctx[3]),
					listen(input1, "input", /*input1_input_handler*/ ctx[4]),
					listen(form, "submit", prevent_default(/*handleSubmit*/ ctx[2]))
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*username*/ 1 && input0.value !== /*username*/ ctx[0]) {
				set_input_value(input0, /*username*/ ctx[0]);
			}

			if (dirty & /*password*/ 2 && input1.value !== /*password*/ ctx[1]) {
				set_input_value(input1, /*password*/ ctx[1]);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div3);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $session;
	component_subscribe($$self, session, $$value => $$invalidate(5, $session = $$value));
	let username;
	let password;

	function handleSubmit(event) {
		fetch("/api/user", {
			method: "POST",
			mode: "cors",
			credentials: "same-origin",
			body: JSON.stringify({ Username: username, Password: password })
		}).then(d => d.json()).then(d => {
			if (d.ret) {
				set_store_value(session, $session.User = d.user, $session);
				goto("/");
			} else // Only add notification for failed login
			{
				set_store_value(
					session,
					$session.actions = [
						{
							id: $session.count,
							msg: d.message,
							theme: "alert-danger"
						},
						...$session.actions
					],
					$session
				);
			}
		});
	}

	function input0_input_handler() {
		username = this.value;
		$$invalidate(0, username);
	}

	function input1_input_handler() {
		password = this.value;
		$$invalidate(1, password);
	}

	return [username, password, handleSubmit, input0_input_handler, input1_input_handler];
}

class Login extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Login;
//# sourceMappingURL=login.svelte.js.map
