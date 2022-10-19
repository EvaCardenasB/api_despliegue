// RAFAEL
function validarLogin() {
    const email = document.getElementById('email');
    const pass = document.getElementById('password');
    const form = document.getElementById('form');


    form.addEventListener("submit", e => {
        e.preventDefault()

        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/



        if (!regexEmail.test(email.value)) {

            mostrarMensaje('El email no es valido', true)
            document.getElementById('email').style.borderColor = 'red'

        }

        if (pass.value.length < 4) {

            mostrarMensaje('La contraseña no es valida', true)
            document.getElementById('password').style.borderColor = 'red'
        }
    })

    function mostrarMensaje(mensaje, error = null) {
        let alerta = document.createElement('P')
        alerta.textContent = mensaje

        if (error) {
            alerta.classList.add('alerta', 'error')
        } else {
            alerta.classList.add('alerta', 'correcto')
        }

        form.appendChild(alerta)

        setTimeout(() => {
            alerta.remove()
        }, 5000)
    }
}
// PABLO
function validarRegistro() {
    let formulario = document.querySelector('.form')
    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault()
        let nombre = document.getElementById('nombre').value
        let apellidos = document.getElementById('apellidos').value
        let direccion = document.getElementById('direccion').value
        let postal = document.getElementById('postal').value
        let telefono = document.getElementById('telefono').value
        let correo = document.getElementById('correo').value
        let dni = document.getElementById('dni').value
        let fechaNac = document.getElementById('fechaNac').value
        let sexo = document.querySelector('input[name="sexo"]:checked')
        let cuenta = document.getElementById('cuenta').value
        let banco = document.getElementById('banco').value
        let cuota = document.querySelector('input[name="cuota"]:checked')

        if (nombre == '') {
            mostrarMensaje('El nombre es obligatorio', true)
            document.getElementById('nombre').style.borderColor = 'red'
        }

        if (apellidos == '') {
            mostrarMensaje('El apellido es obligatorio', true)
            document.getElementById('apellidos').style.borderColor = 'red'
        }

        if (direccion == '') {
            mostrarMensaje('La dirección es obligatorio', true)
            document.getElementById('direccion').style.borderColor = 'red'
        }

        if (postal == '') {
            mostrarMensaje('El código postal es obligatorio', true)
            document.getElementById('postal').style.borderColor = 'red'
        } else if (postal.length !== 5) {
            mostrarMensaje('El código postal debe tener 5 caracteres', true)
            document.getElementById('postal').style.borderColor = 'red'
        }

        if (telefono == '') {
            mostrarMensaje('El teléfono es obligatorio', true)
            document.getElementById('telefono').style.borderColor = 'red'
        } else if (telefono.length !== 9) {
            mostrarMensaje('El teléfono debe tener 9 caracteres', true)
            document.getElementById('telefono').style.borderColor = 'red'
        }

        if (correo == '') {
            mostrarMensaje('El email es obligatorio', true)
            document.getElementById('correo').style.borderColor = 'red'
        } else if (!validarEmail(correo)) {
            mostrarMensaje('El email no es valido', true)
            document.getElementById('correo').style.borderColor = 'red'
        }

        if (dni == '') {
            mostrarMensaje('El dni es obligatorio', true)
            document.getElementById('dni').style.borderColor = 'red'
        } else if (dni.length !== 9) {
            mostrarMensaje('El dni debe tener 9 caracteres', true)
            document.getElementById('dni').style.borderColor = 'red'
        } else if (!validarDni(dni)) {
            mostrarMensaje('Introduzca un DNI válido', true)
            document.getElementById('dni').style.borderColor = 'red'
        }

        if (fechaNac == '') {
            mostrarMensaje('La fecha nacimiento es obligatoria', true)
            document.getElementById('fechaNac').style.borderColor = 'red'
        } else if (calcularEdad(fechaNac) < 15) {
            mostrarMensaje('La edad mínima son 15 años', true)
            document.getElementById('fechaNac').style.borderColor = 'red'
        }

        if (!sexo) {
            mostrarMensaje('No ha seleccionado ningún sexo', true)
            document.getElementById('sexo').style.borderColor = 'red'
        }

        if (cuenta == '') {
            mostrarMensaje('La cuenta es obligatorio', true)
            document.getElementById('cuenta').style.borderColor = 'red'
        } else if (cuenta.length !== 24) {
            mostrarMensaje('La cuenta debe tener 20 caracteres', true)
            document.getElementById('cuenta').style.borderColor = 'red'
        }

        if (banco == '') {
            mostrarMensaje('El nombre del banco es obligatorio', true)
            document.getElementById('banco').style.borderColor = 'red'
        }

        if (!cuota) {
            mostrarMensaje('No ha seleccionado ninguna cuota', true)
            document.getElementById('cuota').style.input = 'red'
        }

        if (nombre != '' && apellidos != '' && direccion != '' && postal != '' && telefono != '' && correo != '' && dni != '' && fechaNac != '' && sexo && cuenta != '' && banco != '' && cuota) {
            mostrarMensaje('El registro se ha completado con exito')
        }
    })

    function mostrarMensaje(mensaje, error = null) {
        let alerta = document.createElement('P')
        alerta.textContent = mensaje

        if (error) {
            alerta.classList.add('alerta', 'error')
        } else {
            alerta.classList.add('alerta', 'correcto')
        }

        formulario.appendChild(alerta)

        setTimeout(() => {
            alerta.remove()
        }, 5000)
    }
    //Validar mail con expresiones regulares
    function validarEmail(email) {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        return re.test(email)
    }

    function validarDni(dni) {

        let re = /^\d{8}[a-zA-Z]$/
        if (re.test(dni)) {
            //Se separan los números de la letra
            let letraDNI = dni.substring(8, 9).toUpperCase()
            let numDNI = parseInt(dni.substring(0, 8))

            //Se calcula la letra correspondiente al número
            let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
            let letraCorrecta = letras[numDNI % 23]

            if (letraDNI != letraCorrecta) {
                return false
            } else {
                return true
            }
        } else {
            return false
        }
    }
    //Calcular edad segun fecha de nacimiento
    function calcularEdad(fecha) {
        let hoy = new Date();
        let cumpleanos = new Date(fecha);
        let edad = hoy.getFullYear() - cumpleanos.getFullYear();
        let m = hoy.getMonth() - cumpleanos.getMonth();

        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }
        return edad;
    }
}
