// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "img.svelte-1t6ndzl{border-radius:25px}.transparent.svelte-1t6ndzl{border:transparent;background-color:transparent}.pid.svelte-1t6ndzl{background-color:#FF4D4D;border-radius:0.5em;padding:2px;color:white;font-size:calc(100% + 1.1vw)}.image-overlay.svelte-1t6ndzl{width:50%;position:absolute;top:25%;right:0;bottom:25%;left:0;padding:1rem;border-radius:calc(.25rem - 1px)}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}