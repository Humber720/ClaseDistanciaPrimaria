//////////////////////////////////////////////////////
// ABRIR IMAGEN
//////////////////////////////////////////////////////

function abrirImagen(src){

    document.getElementById("modalImagen").style.display = "block";

    document.getElementById("imgGrande").src = src;

}

//////////////////////////////////////////////////////
// CERRAR IMAGEN
//////////////////////////////////////////////////////

function cerrarImagen(){

    document.getElementById("modalImagen").style.display = "none";

}

//////////////////////////////////////////////////////
// CERRAR MODAL CON CLICK FUERA
//////////////////////////////////////////////////////

window.onclick = function(event){

    const modal = document.getElementById("modalImagen");

    if(event.target == modal){

        modal.style.display = "none";

    }

}

//////////////////////////////////////////////////////
// BOTON SALIR DIRECTO
//////////////////////////////////////////////////////

function salirPagina(){

    window.location.href = "index.html";

}

//////////////////////////////////////////////////////
// BLOQUEAR BOTON ATRAS DEL CELULAR
//////////////////////////////////////////////////////

/*
Evita salir accidentalmente.
*/

history.pushState(null, null, location.href);

window.addEventListener("popstate", function () {

    const confirmar = confirm(
        "¿Desea salir de la clase a distancia?"
    );

    if(confirmar){

        /*
        Regresa al inicio
        */

        window.location.href = "index.html";

    }

    else{

        /*
        Permanece en la pagina
        */

        history.pushState(null, null, location.href);

    }

});