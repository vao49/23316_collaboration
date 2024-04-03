"use strict";

import { loadHTML } from "./ajax_Html.js";

// Programme PRINCIPAL
window.addEventListener("load", () => {
  loadHTML("id-header", "./HEADER.html");
  loadHTML("id-footer", "./FOOTER.html");
});
