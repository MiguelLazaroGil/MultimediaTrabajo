//Archivo de Java

//Ocultar el header
let ublicacionPrincipal = window.pageYOffset; //toma la ubicacion de la y
window.onscroll = function () {
  /*var Barra=document.getElementById("barraDeNavegacion")
	let Desplazamiento_Actual= window.pageYOffset;
	if (ublicacionPrincipal >= Desplazamiento_Actual){
		Barra.className= 'barraDeNavegacion';
	}else{
		Barra.className= 'barraDeNavegacionMinimizada';
	}
	ublicacionPrincipal= Desplazamiento_Actual;*/

  var Barra = document.getElementById("barraDeNavegacion");
  var tope = 90;
  let Desplazamiento_Actual = window.pageYOffset;

  if (Desplazamiento_Actual > tope) {
    Desplazamiento_Actual = tope;
  }
  let a = "-" + Desplazamiento_Actual + "px";
  Barra.style.top = a;
};

//SOnido boton donación
let boton = document.querySelector("#botonDonacion");
let audioElement = document.getElementById("audio");

boton.addEventListener("click", () => {
  audioElement.play();
  console.log("reproduciendo");
  setTimeout(tempo, 3000); 
});
// Función para establecer un timer entre el sonido y la redirección
function tempo (){
  window.location.href="https://www.patreon.com/PowerLine_Studios/"
}


//COmentarios
const commentContainer = document.getElementById("cajaComentarios");
document.getElementById("botonComentarios").addEventListener("click", ()=> {
  anadirComentario();
});


function anadirComentario() {

  const textBox = document.createElement("div");
  let divCometnario = document.createElement("div");
  divCometnario.className = "comentario";
 
  let commentText = document.getElementById("newComment").value;
  textBox.innerHTML = commentText;
  document.getElementById("newComment").value = ""; //Vacia la caja de escribir cuando se añade un comentario
 
  divCometnario.append(textBox);
  commentContainer.appendChild(divCometnario);
}
