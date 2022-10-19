//EVA
function validarContacto() {
    let nombre = document.getElementById("nombre")
    let apellidos = document.getElementById("apellidos")
    let opcion = document.getElementById("myselect_contact")
    let email = document.getElementById("id_email")
    let telefono = document.getElementById("id_telefono")
    let formulario = document.getElementById("form_contact")
    let check = document.querySelector('input[name="check"]:checked')
    
    formulario.addEventListener("submit",e=>{
        e.preventDefault()
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(nombre.value.length <3){
            mostrarMensaje('El nombre no es valido',true)
        }
        if(apellidos.value.length <3){
            mostrarMensaje('El apellido no es valido', true)
        }
        
        if(opcion.value=='email'){
            if(email.value==''){
                mostrarMensaje('El campo de contacto no puede estar vacío', true)
        }else if(!regexEmail.test(email.value)){
            mostrarMensaje('El email no es válido', true)
        }
        }else if(opcion.value=='telefono'){
            if(telefono.value==''){
                mostrarMensaje('El campo de contacto tel no puede estar vacío', true)
            }
        }else{
            mostrarMensaje('Debes escoger una opción para poderle contactar', true)
        }

        if (!check) {
            mostrarMensaje('No ha aceptado los terminos y condiciones', true)
        }

        if (nombre.value != '' && apellidos.value != '' && (email.value != '' || telefono.value != '') && check) {
            mostrarMensaje('El mensaje se ha enviado con exito')
        }
    })

    function mostrarMensaje(mensaje, error = null) {
        let alerta = document.createElement('P')
        alerta.textContent = mensaje

        if(error) {
            alerta.classList.add('alerta','error')
        } else {
            alerta.classList.add('alerta','correcto')
        }      

        formulario.appendChild(alerta)

        setTimeout(() => {
            alerta.remove()
        }, 5000)
    }
}

function mostrarOption(){
            
    var getSelectValue = document.getElementById("myselect_contact").value;
    var getIdTelephone = document.getElementById("id_telefono");
    var getIdEmail = document.getElementById("id_email");
    if(getSelectValue=="telefono") {
        getIdTelephone.style.display = "block";
        getIdEmail.style.display = "none";
    
    }else if(getSelectValue=="email"){
        getIdEmail.style.display = "block";
        getIdTelephone.style.display = "none";

    }else{
        getIdEmail.style.display = "none";
        getIdTelephone.style.display = "none";
    }    
}