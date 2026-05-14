function ingresar(){

    const curso = document.getElementById("curso").value;
    const clave = document.getElementById("clave").value;
    const mensaje = document.getElementById("mensaje");

    /* PRIMERO */
    if(curso === "1ro" && clave === "111"){
        window.location.href = "1ro.html";
    }

    /* SEGUNDO */
    else if(curso === "2do" && clave === "222"){
        window.location.href = "2do.html";
    }

    /* TERCERO */
    else if(curso === "3ro" && clave === "333"){
        window.location.href = "3ro.html";
    }

        /* CUARTO */
    else if(curso === "4to" && clave === "444"){
        window.location.href = "4to.html";
    }

        /* QUINTO */
    else if(curso === "5to" && clave === "555"){
        window.location.href = "5to.html";
    }

        /* SEXTO */
    else if(curso === "6to" && clave === "666"){
        window.location.href = "6to.html";
    }

    else{

        mensaje.innerHTML = "❌ Curso o clave incorrecta";

    }

}
/* MOSTRAR CLAVE */

function mostrarClave(){

    const input = document.getElementById("clave");

    const icono = document.getElementById("iconoClave");

    if(input.type === "password"){

        input.type = "text";

        icono.classList.remove("fa-eye");

        icono.classList.add("fa-eye-slash");

    }

    else{

        input.type = "password";

        icono.classList.remove("fa-eye-slash");

        icono.classList.add("fa-eye");

    }

}