import { OBJEKTUMLISTA } from "./adat.js";
import { rendezesObjektum } from "./rendezes.js";
import { listabaUjelem , alapNav } from "./webkiiras.js";
const kuka = `<img src="kepek/kuka.png" alt="cera" class="kuka" width="3%"`
const ceruzaCigi = `<img src="kepek/ceruza.png" alt="tölés" class="cerka" width="3%"`
const uploadButton = `<img src="kepek/upload.png" alt="upi" class="upload" width="3%"`
const round = `class="szort"`;
const kutya = "";
const szortirozo = `"<tr id ='semmi'> <th id='nev'${round}> Név: </th> <th id='kor'  ${round}>Kor:</th><th id='fajta'  ${round} > Fajta: </th> <th class='üres'> </th></tr>";`;
$(function () {
  init();


});


function init() {
  $("nav").html(alapNav());
  console.log("hi");
  const articleElem = $("article");
  let tablazat = tablazatKeszit(OBJEKTUMLISTA);
  console.log(tablazat);
  articleElem.html(tablazat);
  const thElem = $("th");
  thElem.on("click", function () {
    let kulcs = $(event.target).attr("id")
    rendezesObjektum(OBJEKTUMLISTA, kulcs);
    console.log(OBJEKTUMLISTA);
    init();
  });
  
  modifikalas();
  kukazas();
  
  const gomb = $("#add");
  gomb.on("click", function () {
    const ujElemek = $("nav");
    let uj = listabaUjelem();
    ujElemek.html(uj);
    hozzaad();
  });
}
function hozzaad() {
  const ujAdat = $("#feltolt");
  let kutyaKor = "";
  let kutyaFaj = "";
  let kutyaNev = "";
  $("#nev").keyup(function () {
    kutyaNev = $(this).val();
  });
  $("#kor").keyup(function () {
    kutyaKor = $(this).val();
  });
  $("#fajta").keyup(function () {
    kutyaFaj = $(this).val();
  });
  ujAdat.on("click", function () {
    if ((kutyaNev.length < 3) || (kutyaFaj.length < 3) || (kutyaKor == "")) {
      const hiba = $(".warning");
      hiba.html("<p>Kérem mindegyik mezőbe írjon megfelelő mennyiségű karaktert!</p>")
        kutyaNev == "";
        kutyaKor == "";
        kutyaFaj == "";
      hozzaad();
    } else {
      OBJEKTUMLISTA.push({ nev: kutyaNev, kor: kutyaKor, fajta: kutyaFaj });
      console.log(kutyaNev);
      console.log(kutyaKor);
      console.log(kutyaFaj);
      init();
    }
  });
}

function meghatarozo(ertek) {
  ertek.keyup(function () {
    kutya = $(this).val();
    return kutya;
  });
}


  function kukazas(){
    const kukaIcon = $(".kuka");
    kukaIcon.on("click", function() {
      const kuka = $(this);
      const sor = kuka.attr("id");
      OBJEKTUMLISTA.splice(sor,1);
      init();

    });

  }
  function modifikalas() {
    const modificIcon = $(".cerka");
    modificIcon.on("click", function() {
      const ceruzaCigi = $(this);
      const ceruzaSor = ceruzaCigi.attr("id");
      const modifikacio = OBJEKTUMLISTA[nev, fajta, kor];
      
      
      
      init();
    
    });

  }
  
 

function tablazatKeszit(OBJEKTUMLISTA) {
  
  let tablazat = "<table class='table table-striped'>";
  tablazat += " <thead class='table-dark'>";
  tablazat += "<tr> <th id='nev'> Név: </th> <th id='kor'>Kor:</th><th id='fajta'> Fajta: </th> <th> </th></tr>"
  tablazat += "</thead>"
  for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
    tablazat += "<tr>";
    tablazat += "<td>" + OBJEKTUMLISTA[index].nev + "</td>" + "<td>" + OBJEKTUMLISTA[index].kor + "</td>" + "<td>" + OBJEKTUMLISTA[index].fajta + "</td>" + "<td>" + kuka + `id="${index}">` + "</td>" + "</td>" + "<td>" + ceruzaCigi + `id="${index}">` + "</td>";
    tablazat += "</tr>";
  }
  tablazat += "</table>";

  return tablazat += "</table>";


}





