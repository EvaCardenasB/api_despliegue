const nombre = document.getElementById("nombre")
const apellidos = document.getElementById("apellidos")
const opcion = document.getElementById("myselect_contact")
const email = document.getElementById("id_email")
const telefono = document.getElementById("id_telefono")
const textarea = document.getElementById("area_contact")
const check = document.getElementById("check")

const form =document.getElementById("form_contact")
const error = document.getElementById("warnings_contact")

form.addEventListener("submit",e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let rexPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
    if(nombre.value.length <3){
        warnings +='El nombre no es valido <br>'
        entrar = true
    }
    if(apellidos.value.length <3){
        warnings +='El apellido no es valido <br>'
        entrar = true
    }
    
    if(opcion.value=='email'){
        if(email.value==''){
        alert('El campo de contacto no puede estar vacío')
        entrar = true
    }else if(!regexEmail.test(email.value)){
        warnings +='El email no es válido <br>'
        entrar = true
    }
    }else if(opcion.value=='telefono'){
        if(telefono.value==''){
            alert('El campo de contacto tel no puede estar vacío')
            entrar = true
        }
    }else{
        alert('Debes escoger una opción para poderle contactar')
    }
    
    if (entrar){
        error.innerHTML= warnings
    }
})



