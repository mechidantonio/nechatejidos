 function respuestaClick(){
 alert("Ups, todavía no está listo");
 }

 function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let fecha = document.getElementById("fecha").value;
    let radioBtn = document.getElementsByName("radioButton");
    let boleana = false;

    //Campo nombre
    if (nombre == null || nombre.length == 0) {
        alert(
            "ERROR: El campo nombre no debe ir vacío o lleno de solamente espacios en blanco"
        );
        return false;
    }
    //Correo
    if (!/\S+@\S+\.\S+/.test(correo)) {
        alert("Debe escribir un correo válido");
        return false;
    }

    //Fecha
    if (!isNaN(fecha)) {
        alert("Debe elegir una fecha");
        return false;
    }

    //Radio Buttons
    for (let i = 0; i < radioBtn.length; i++) {
        if (radioBtn[i].checked) {
            boleana = true;
            break;
        }
    }
    if (!boleana) {
        alert("Debe seleccionar una opción");
        return false;
    }
    
    return true;
}

function formularioCompleto() {
    if (validarFormulario()==true)
    {alert("Su registro fue exitoso.")}
    
}

