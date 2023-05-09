//Archivo de Java
let ublicacionPrincipal= window.pageYOffset; //toma la ubicacion de la y
window.onscroll= function(){
	/*var Barra=document.getElementById("barraDeNavegacion")
	let Desplazamiento_Actual= window.pageYOffset;
	if (ublicacionPrincipal >= Desplazamiento_Actual){
		Barra.className= 'barraDeNavegacion';
	}else{
		Barra.className= 'barraDeNavegacionMinimizada';
	}
	ublicacionPrincipal= Desplazamiento_Actual;*/


	var Barra=document.getElementById("barraDeNavegacion");
	var tope = 90;
	let Desplazamiento_Actual= window.pageYOffset;

	if (Desplazamiento_Actual>tope) {
		Desplazamiento_Actual = tope;
	}
	let a = "-" + Desplazamiento_Actual + "px"
	Barra.style.top = a;
}
