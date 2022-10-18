function validarLogin(){
    const email = document.getElementById('email');
    const pass = document.getElementById('password');
    const form = document.getElementById('form');
    const parrafo = document.getElementById('warnings');

    form.addEventListener("submit", e =>{
        e.preventDefault()
        let warnings = ""
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
        let entrar= false
        let nIntentos = 0
        parrafo.innerHTML = ""
        
        if(!regexEmail.test(email.value)){

            warnings += 'El email no es valido <br>'
            entrar = true

        }

        if(pass.value.length < 4){
        
            warnings += 'La contraseña no es valida <br>'
            entrar = true

        }

        

        if(entrar){
            parrafo.innerHTML = warnings
        }else{
            parrafo.innerHTML = "enviado"
        }

        


    })

}




