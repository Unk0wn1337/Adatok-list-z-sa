import { OBJEKTUMLISTA } from "./adat.js";
import { rendezesObjektum } from "./rendezes.js";
import { articleElemek ,  headerElem, footerElem } from "./webkiirasPublic.js"
$(function() {
    $("header").html(headerElem());
    $("section").html(articleElemek());
    $("footer").html(footerElem());
});
//  let kiiras = articleElemek();
