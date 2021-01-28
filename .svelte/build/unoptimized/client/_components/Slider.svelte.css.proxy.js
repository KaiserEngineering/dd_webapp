// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".switch.svelte-1wgc2n4.svelte-1wgc2n4{position:relative;display:inline-block;width:60px;height:34px}.switch.svelte-1wgc2n4 input.svelte-1wgc2n4{opacity:0;width:0;height:0}.slider.svelte-1wgc2n4.svelte-1wgc2n4{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:.4s;transition:.4s}.slider.svelte-1wgc2n4.svelte-1wgc2n4:before{position:absolute;content:\"\";height:26px;width:26px;left:4px;bottom:4px;background-color:white;-webkit-transition:.4s;transition:.4s}input.svelte-1wgc2n4:checked+.slider.svelte-1wgc2n4{background-color:#FF4D4D}input.svelte-1wgc2n4:focus+.slider.svelte-1wgc2n4{box-shadow:0 0 1px #FF4D4D}input.svelte-1wgc2n4:checked+.slider.svelte-1wgc2n4:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px)}.slider.round.svelte-1wgc2n4.svelte-1wgc2n4{border-radius:34px}.slider.round.svelte-1wgc2n4.svelte-1wgc2n4:before{border-radius:50%}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}