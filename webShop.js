import { OBJEKTUMLISTA } from "./adat.js";
import { rendezesObjektum } from "./rendezes.js";
import { articleElemek ,  headerElem , } from "./webkiirasPublic.js"
$(function() {
    $("header").html(headerElem());
    $("section").html(articleElemek());
   
});
//  let kiiras = articleElemek();
