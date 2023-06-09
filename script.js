import { OBJEKTUMLISTA } from "./adat.js";
import { rendezesObjektum } from "./rendezes.js";
import { listabaUjelem , alapNav, sorValtozo} from "./webkiiras.js";
import { szuLista } from "./kereses.js";
const kuka = `<img src="kepek/kuka.png" alt="cera" class="kuka" width="30px"`
const ceruzaCigi = `<img src="kepek/ceruza.png" alt="tölés" class="cerka" width="30px"`
const uploadButton = `<img src="kepek/upload.png" alt="upi" class="upload" width="30px"`
const round = `class="szort"`;
const kutya = "";
const szortirozo = `<tr id ='semmi'> <th id='nev'${round}> Név: </th> <th id='kor'  ${round}>Kor:</th><th id='fajta'  ${round} > Fajta: </th> <th class='üres'> </th> <th class="üres"> </th></tr>`;

$(function () {
  
  $("nav").html(alapNav());
  init(OBJEKTUMLISTA);

});


function init(lista) {
  
  console.log("hi");
  const articleElem = $("article");
  let tablazat = tablazatKeszit(OBJEKTUMLISTA);
  console.log(tablazat);
  articleElem.html(tablazat);
  const thElem = $("th");
  thElem.on("click", function () {
    let kulcs = $(event.target).attr("id");
    rendezesObjektum(lista, kulcs);
    console.log(OBJEKTUMLISTA);
    init(lista);
    
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
function search() {
  let kutyaKor = "";
  let kutyaFaj = "";
  let kutyaNev = "";
  $("#nev").keyup(function () {
    kutyaNev = $(this).val();
    let szuresiEredemeny = szuLista("nev",OBJEKTUMLISTA,kutyaNev);
    init(szuresiEredemeny);
    
  });
  $("#kor").keyup(function () {
    kutyaKor = $(this).val();
  });
  $("#fajta").keyup(function () {
    kutyaFaj = $(this).val();
  });
  
  szuLista(kutyaNev, OBJEKTUMLISTA);
  
  
  
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
      init(OBJEKTUMLISTA);
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
  modificIcon.on("click", function () {
    const ceruzaSor = $(this).attr("id");
    console.log(ceruzaSor);
    const sorValtozas = $(`#sor${ceruzaSor}`);
    const ujAdatSor = sorValtozo(OBJEKTUMLISTA[ceruzaSor]);
    sorValtozas.html(ujAdatSor);
    const megse = $("#vissza");
    megse.on("click", function () {
      init();
    });
    adatVarialas(ceruzaSor);
  });
}



function adatVarialas(ceruzaSor) {
  let kutyaKor = OBJEKTUMLISTA[ceruzaSor].kor;
  let kutyaFaj = OBJEKTUMLISTA[ceruzaSor].fajta;
  let kutyaNev = OBJEKTUMLISTA[ceruzaSor].nev;
    $("#neve").keyup(function () {
      kutyaNev = $(this).val();
    });
    $("#kora").keyup(function () {
      kutyaKor = $(this).val();
    });
    $("#fajtaja").keyup(function () {
      kutyaFaj = $(this).val();
    });
    $(".modos").on("click", function () {
      if ((kutyaNev.length < 3) || (kutyaFaj.length < 3) || (kutyaKor == "")) {
        console.log("visszza");
        console.log(kutyaNev);
        console.log(kutyaKor);
        console.log(kutyaFaj);
        modifikalas();
      }
      else {
        OBJEKTUMLISTA[ceruzaSor] = { nev: kutyaNev, kor: kutyaKor, fajta: kutyaFaj };
        init()
      }
    });
  }
  search();
  
  
 

function tablazatKeszit(OBJEKTUMLISTA) {
  
  let tablazat = "<table class='table table-striped'>";
  tablazat += "<thead class='table-dark'>";
  tablazat += szortirozo;
  tablazat += "</thead>";
  for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
    console.log(OBJEKTUMLISTA[index]);
    console.log(index);
    tablazat += `<tr id="sor${index}">`;
    tablazat +=
      "<td>" +
      OBJEKTUMLISTA[index].nev +
      "</td>" +
      "<td>" +
      OBJEKTUMLISTA[index].kor +
      "</td>" +
      "<td>" +
      OBJEKTUMLISTA[index].fajta +
      "</td>" +
      "<td>" +
      kuka +
      `id="${index}">` +
      "</td>";
    tablazat += "<td>" + ceruzaCigi + `id="${index}">` + "</td>" + "</tr>";
  }
  tablazat += "</table>";

  return tablazat += "</table>";


}





