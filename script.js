import{OBJEKTUMLISTA} from "./adat.js";
import {rendezesObjektum} from "./rendezes.js";
$(function(){
    init();


  });
  const kuka = `<img src="kepek/kuka.png" alt=kep id="torles" class="kuka" width=2%"`



function init(){
  const articleElem = $("article");
  let tablazat = tablazatKeszit(OBJEKTUMLISTA);
  articleElem.html(tablazat);
  const thElem = $("th");
  thElem.on("click", function(){
    let kulcs = $(event.target).attr("id")
    rendezesObjektum(OBJEKTUMLISTA, kulcs);
    console.log(OBJEKTUMLISTA);
    init();
  });
  const kukaIcon = $(".kuka");
  $(".kuka").on("click",function(){
    console.log("kuka");
    const kuka = $(this);
    const oszlop = kuka.attr("id");
    console.log(oszlop);

  });
  

  

}
function tablazatKeszit(OBJEKTUMLISTA){
    let tablazat = "<table class='table table-striped'>";
    tablazat += " <thead class='table-dark'>";
    tablazat += "<tr> <th id='nev'> Név: </th> <th id='kor'>Kor:</th><th id='fajta'> Fajta: </th><th></th></tr>"
    tablazat += "</thead>" 
    for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
      tablazat +="<tr>";
      tablazat += "<td>" + OBJEKTUMLISTA[index].nev + "</td>" + "<td>" + OBJEKTUMLISTA[index].kor +"</td>" + "<td>" + OBJEKTUMLISTA[index].fajta+"</td>"+"<td>"+ kuka +`id="${index}"` +"</td>";  
      tablazat +="</tr>";
    }
    tablazat += "</table>";
    
    return tablazat += "</table>";
  
  
  }
  