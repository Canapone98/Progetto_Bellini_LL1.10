function gestoreClickAvanti () {
	try {
		if (!automatico) {
			cambiafoto(+1);
		}
	}	catch (e) {
		alert("gestoreClickAvanti" + e);
	}
}
	
	
	
function gestoreClickIndietro () {
    try {
        if (!automatico) {
            cambiafoto(-1);
        }			
	}   catch (e) {
		alert("gestoreClickIndietro " + e);
	}
}


function cambiafoto (x) {
	indiceFoto += x;
	if (indiceFoto == numeroFoto) {
		indiceFoto = 0;
	}
	if (indiceFoto < 0) {
		indiceFoto = numeroFoto - 1;
	}
	nodoFoto.setAttribute("src", galleria[indiceFoto]);
}

function GestoreClickStartStop () {
	try {
		if (automatico) {
			nodoStartStop.value = "Start";
			automatico = false;
		} else {
			nodoStartStop.value ="Stop";
			automatico = true;
			cambiaFotoInAutomatico ();
		}
	} catch (e) {
		alert ("GestoreClickStartStop " + e);
	}
}


function cambiaFotoInAutomatico () {
	try {
		if (automatico) {
			cambiafoto (+ 1);
			setTimeout (cambiaFotoInAutomatico, RITARDO);
		}
	} catch (e) {
		alert ("cambiaFotoInAutomatico" + e);
	}
}



const RITARDO = 2000;
var indiceFoto;
var numeroFoto;
var automatico;
var nodoAvanti;
var nodoIndietro;
var nodoStarStop;
var nodoFoto;




function GestoreLoad () {
	try {
		nodoAvanti = document.getElementById("avanti");
		nodoIndietro = document.getElementById("indietro");
		nodoStartStop = document.getElementById("startStop");
		nodoFoto = document.getElementById("foto");
		nodoAvanti.onclick = gestoreClickAvanti;
		nodoIndietro.onclick = gestoreClickIndietro;
		nodoStartStop.onclick = GestoreClickStartStop;
		nodoStartStop.value = "Start";
		numeroFoto = galleria.length;
		automatico = false;
		indiceFoto = 0;
		cambiafoto(0);
		
	} catch (e) {
		alert ("GestoreLoad " + e);
	}
}

window.onload = GestoreLoad;
		
var galleria = [
"LL1.10_0001.jpg",
"LL1.10_0002.jpg",
"LL1.10_0003.jpg",
"LL1.10_0004.jpg",
 ]