export function headerElem(){
    let kutyaShop = `<h1>kutyashop</h1>
    <a href="login.php" target="_blank">
    <img src="kepek/login.png" alt="loginka" width=5%>
    </a>`;
    return kutyaShop;
    
}

    //kep 164x164 ideális képarány
export function articleElemek(){
    let kutyaDobozok =
    `<div class="kutya">
                <br>
                <img src="kutyakepek/Rottweiler.jpg" alt="Rotiiii" class="kutyusKepek">     
                <h3>Dézi</h3>
                <h4>2 eves</h4>
                <h5>fajta keverék</h5>
                <button id="kosar">kosar</button>
            </div>

            <div class="kutya">
                <br>
                <img src="kutyakepek/rövidszőrű tacskó.jpg" alt="Rotiiii" class="kutyusKepek">     
                <h3>Bodri</h3>
                <h4>13 eves</h4>
                <h5>fajta mudi</h5>
                <button id="kosar">kosar</button>
            </div>
            <div class="kutya">
                <br>
                <img src="kutyakepek/schnauzer.jpg" alt="Rotiiii" class="kutyusKepek">     
                <h3>Loki</h3>
                <h4>5 eves</h4>
                <h5>Fajta: tacskó</h5>
                <button id="kosar">kosar</button>
            </div>
            <div class="kutya">
            <br>
            <img src="kutyakepek/k9.jpg" alt="Rotiiii" class="kutyusKepek">     
            <h3>Balint</h3>
            <h4>4 eves</h4>
            <h5>Fajta: foxterrier</h5>
            <button id="kosar">kosar</button>
            </div> <div class="kutya">
            <br>
            <img src="kutyakepek/schnauzer.jpg" alt="Rotiiii" class="kutyusKepek">     
            <h3>Happy</h3>
            <h4>42 eves</h4>
            <h5>Fajta: németjuhász</h5>
            <button id="kosar">kosar</button>
            </div>
            </div> <div class="kutya">
            <br>
            <img src="kutyakepek/rövidszőrű tacskó.jpg" alt="Rotiiii" class="kutyusKepek">     
            <h3>Kankapec Jozsef</h3>
            <h4>18 eves</h4>
            <h5>Fajta: vizsla</h5>
            <button id="kosar">kosar</button>
            </div>`;
            
            
    return kutyaDobozok;
}
export  function footerElem (){
   let footersElem = `<div id="kosarbaVele">
    <br>
    <img src="kepek/kosarka.png" alt="kosaracska" width="5%">
    </div>`;
    return footersElem;
}