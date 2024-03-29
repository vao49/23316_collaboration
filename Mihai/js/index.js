"use strict";

import { loadHTML } from "../../js/ajax_Html.js";

// Programme PRINCIPAL
window.addEventListener("load", () => {
  loadHTML("id-header", "../HEADER_FOOTER/HEADER.html");
  loadHTML("id-footer", "../HEADER_FOOTER/FOOTER.html");
});
