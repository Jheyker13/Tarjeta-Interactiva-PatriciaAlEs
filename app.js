// window.onload para asegurarnos de que todo el html carga antes de ejecutar JavaScript
window.onload = function () {

    // Inicializa con el primer mensaje
    let descripcion = document.getElementById("descripcionPersonaje");
    descripcion.innerHTML = "Antes era esclavo de los Malfoy, pero Harry Potter lo libera en Harry Potter y la cámara secreta."; // Primer mensaje al cargar

    // Accedemos al documento y luego obtenemos por #id y disparamos la ejecución de la función con el evento onclick
    document.getElementById("botonCambiarTexto").onclick = function () {

        // Definimos los tres mensajes, cada uno en su variable (const porque no va a cambiar)
        const mensaje1 = "Antes era esclavo de los Malfoy, pero Harry Potter lo libera en Harry Potter y la cámara secreta."; // Primer mensaje
        const mensaje2 = "Dobby ama la libertad y los calcetines, ¡y es muy leal a sus amigos! ✨"; // Segundo mensaje
        const mensaje3 = "¡Dobby está feliz de ser libre!✨"; // Tercer mensaje

        // Condición para cambiar el mensaje
        if (descripcion.innerHTML === mensaje1) {
            descripcion.innerHTML = mensaje2; // Primer click muestra el segundo mensaje
        } else if (descripcion.innerHTML === mensaje2) {
            descripcion.innerHTML = mensaje3; // Segundo click muestra el tercer mensaje
        } else {
            descripcion.innerHTML = mensaje1; // Vuelve al primer mensaje
        }
    };
};
