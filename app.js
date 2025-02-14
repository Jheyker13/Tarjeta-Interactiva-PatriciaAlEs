// window.onload para asegurarnos de que todo el html carga antes de ejecutar JavaScript
window.onload = function(){

    // Inicializa con el primer mensaje
    let descripcion = document.getElementById("descripcionPersonaje");
      descripcion.innerHTML= "Mago de sangre mestiza, sobeviviente de la maldición de Avada Kedavra,  amigo de Ron y hermione"         // Primer mensaje al cargar
   
    // Accedemos al documento y luego obtenemos por #id y disparamos la ejecución de la función con el evento onclick
     document.getElementById("botonCambiarTexto").onclick = function(){

        // Definimos losn tres mensajes, cada uno en su variable (const porque no va a cambiar)
         //const PrimerMensaje = "Un niño de 11 años que descubre que es hijo de magos famosos y que asistirá al Colegio Hogwarts de Magia y Hechicería"; // Primer mensaje
         //const segundoMensaje = "Lucha para derrotar a Lord Voldemort"; // Segundo mensaje
         //const tercerMensaje = "Poseedor final de las reliquias de la muerte"; // Tercer mensaje

         let mensajes =["Un niño de 11 años que descubre que es hijo de magos famosos y que asistirá al Colegio Hogwarts de Magia y Hechicería" ,"Lucha para derrotar a Lord Voldemort","Poseedor final de las reliquias de la muerte",
         ]

         let random = Math.floor(Math.random() * mensajes.length)
         
        document.querySelector("#descripcionPersonaje").innerHTML= mensajes[random]
         // Condición para cambiar el mensaje
         // Primer click muestra el segundo mensaje
        // Segundo click muestra el tercer mensaje
        // Vuelve al primer mensaje
    }
}
