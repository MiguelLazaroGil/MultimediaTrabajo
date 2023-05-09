//Archivo de Java
let ublicacionPrincipal= window.pageYOffset; //toma la ubicacion de la y
window.onscroll= function(){
	var Barra=document.getElementById("barraDeNavegacion")
	let Desplazamiento_Actual= window.pageYOffset;
	if (ublicacionPrincipal >= Desplazamiento_Actual){
		Barra.className= 'barraDeNavegacion';
	}else{
		Barra.className= 'barraDeNavegacionMinimizada';
	}
	ublicacionPrincipal= Desplazamiento_Actual;
}
