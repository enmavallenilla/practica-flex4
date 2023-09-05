const formulario = document.querySelector('#formulario');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const inputEmail = document.querySelector('#email');
const inputContraseña = document.querySelector('#contraseña');


firstName.addEventListener('blur', validar);
lastName.addEventListener('blur', validar);
inputEmail.addEventListener('blur', validar);
inputContraseña.addEventListener('blur', validar);


//funciones

function validar(e) {
    if (e.target.value.trim() === '') {

        mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
        return
    }

    limpiarAlerta(e.target.parentElement);
}

function mostrarAlerta(mensaje, referencia) {

    limpiarAlerta(referencia);

    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('bg-red-600', 'text-white')

    referencia.appendChild(error);

}

function limpiarAlerta(referencia) {

    // Comprobar si existe una Alerta

    const alerta = referencia.querySelector('.bg-red-600');

    if (alerta) {

        alerta.remove();
    }

}