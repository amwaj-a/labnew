let pages;

function page(params) {
  pages = params;
}

function size(w,h) {
  window.open(pages, "_blank", `width=${w}, height=${h}`);
}
