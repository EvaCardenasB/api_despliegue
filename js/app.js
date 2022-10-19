function validarLogin(){
    const email = document.getElementById('email');
    const pass = document.getElementById('password');
    const form = document.getElementById('form');
    

    form.addEventListener("submit", e =>{
        e.preventDefault()
        
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
        
        
        
        if(!regexEmail.test(email.value)){

            mostrarMensaje('El email no es valido' ,  true)
            document.getElementById('email').style.borderColor = 'red'

        }

        if(pass.value.length < 4){
        
            mostrarMensaje('La contraseña no es valida' , true)
            document.getElementById('password').style.borderColor = 'red'
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

        form.appendChild(alerta)

        setTimeout(() => {
            alerta.remove()
        }, 5000)
    }

}




