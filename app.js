document.getElementById("cambiarTexto").onclick = function () {
    let descripcion = document.getElementById("descripcion");
    
    if (descripcion.innerHTML === "Soy estudiante del bootcamp en 4Geeks Academy.") {
        descripcion.innerHTML = "¡Estoy aprendiendo HTML, CSS y JavaScript!";
    } else {
        descripcion.innerHTML = "Soy estudiante del bootcamp en 4Geeks Academy.";
    }
};