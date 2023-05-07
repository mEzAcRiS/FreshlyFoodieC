// Obtiene la imagen y la ventana modal
var imagen = document.getElementById("imagen");
var modal = document.getElementById("modal");
var imagen2 = document.getElementById("imagen2");
var modal2 = document.getElementById("modal2");
var imagen3 = document.getElementById("imagen3");
var modal3 = document.getElementById("modal3");
var imagen4 = document.getElementById("imagen4");
var modal4 = document.getElementById("modal4");
var imagen5 = document.getElementById("imagen5");
var modal5 = document.getElementById("modal5");
var imagen6 = document.getElementById("imagen6");
var modal6 = document.getElementById("modal6");
var imagen7 = document.getElementById("imagen7");
var modal7 = document.getElementById("modal7");
var imagen8 = document.getElementById("imagen8");
var modal8 = document.getElementById("modal8");
var imagen9 = document.getElementById("imagen9");
var modal9 = document.getElementById("modal9");
var imagen10 = document.getElementById("imagen10");
var modal10 = document.getElementById("modal10");
var imagen11 = document.getElementById("imagen11");
var modal11 = document.getElementById("modal11");
var imagen12 = document.getElementById("imagen12");
var modal12 = document.getElementById("modal12");

// Obtiene el botón de cerrar
var botonCerrar = document.getElementsByClassName("cerrar")[0];
var botonCerrar2 = document.getElementsByClassName("cerrar")[1];
var botonCerrar3 = document.getElementsByClassName("cerrar")[2];
var botonCerrar4 = document.getElementsByClassName("cerrar")[3];
var botonCerrar5 = document.getElementsByClassName("cerrar")[4];
var botonCerrar6 = document.getElementsByClassName("cerrar")[5];
var botonCerrar7 = document.getElementsByClassName("cerrar")[6];
var botonCerrar8 = document.getElementsByClassName("cerrar")[7];
var botonCerrar9 = document.getElementsByClassName("cerrar")[8];
var botonCerrar10 = document.getElementsByClassName("cerrar")[9];
var botonCerrar11 = document.getElementsByClassName("cerrar")[10];
var botonCerrar12 = document.getElementsByClassName("cerrar")[11];
// Cuando se hace clic en la imagen, muestra la ventana modal correspondiente
imagen.onclick = function() {
	modal.style.display = "block";
}

imagen2.onclick = function() {
	modal2.style.display = "block";
}

imagen3.onclick = function() {
	modal3.style.display = "block";
}
imagen4.onclick = function() {
	modal4.style.display = "block";
}
imagen5.onclick = function() {
	modal5.style.display = "block";
}
imagen6.onclick = function() {
	modal6.style.display = "block";
}
imagen7.onclick = function() {
	modal7.style.display = "block";
}
imagen8.onclick = function() {
	modal8.style.display = "block";
}
imagen9.onclick = function() {
	modal9.style.display = "block";
}
imagen10.onclick = function() {
	modal10.style.display = "block";
}
imagen11.onclick = function() {
	modal11.style.display = "block";
}
imagen12.onclick = function() {
	modal12.style.display = "block";
}

// Cuando se hace clic en el botón de cerrar, oculta la ventana modal correspondiente
botonCerrar.onclick = function() {
	modal.style.display = "none";
}

botonCerrar2.onclick = function() {
	modal2.style.display = "none";
}

botonCerrar3.onclick = function() {
	modal3.style.display = "none";
}
botonCerrar4.onclick = function() {
	modal4.style.display = "none";
}
botonCerrar5.onclick = function() {
	modal5.style.display = "none";
}
botonCerrar6.onclick = function() {
	modal6.style.display = "none";
}
botonCerrar7.onclick = function() {
	modal7.style.display = "none";
}
botonCerrar8.onclick = function() {
	modal8.style.display = "none";
}
botonCerrar9.onclick = function() {
	modal9.style.display = "none";
}
botonCerrar10.onclick = function() {
	modal10.style.display = "none";
}
botonCerrar11.onclick = function() {
	modal11.style.display = "none";
}
botonCerrar12.onclick = function() {
	modal12.style.display = "none";
}
// Cuando se hace clic fuera de la ventana modal, también la oculta
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}

	if (event.target == modal2) {
		modal2.style.display = "none";
	}

	if (event.target == modal3) {
		modal3.style.display = "none";
	}
	if (event.target == modal4) {
		modal4.style.display = "none";
	}
	if (event.target == modal5) {
		modal5.style.display = "none";
	}
	if (event.target == modal6) {
		modal6.style.display = "none";
	}
	if (event.target == modal7) {
		modal7.style.display = "none";
	}
	if (event.target == modal8) {
		modal8.style.display = "none";
	}
	if (event.target == modal9) {
		modal9.style.display = "none";
	}
	if (event.target == modal10) {
		modal10.style.display = "none";
	}
	if (event.target == modal11) {
		modal11.style.display = "none";
	}
	if (event.target == modal12) {
		modal12.style.display = "none";
	}

}

