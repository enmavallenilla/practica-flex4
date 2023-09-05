const formulario = document.querySelector('#formulario');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

firstName.addEventListener('blur', validar);
lastName.addEventListener('blur', validar);
email.addEventListener('blur', validar);
password.addEventListener('blur', validar);


function validar(e) {
    if (e.target.value.trim() === '') {
        mostrarAlert(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
        return;
    }

     if(e.target.id ==='email' && !validarEmail(e.target.value)){

        mostrarAlert(`El email no es valido` , e.target.parentElement);
        return
     }

    limpiarAlerta(e.target.parentElement);
}

function mostrarAlert(mensaje, referencia) {

    limpiarAlerta(referencia);

    const error = document.createElement('P');
    error.textContent = mensaje;

    error.classList.add('bg-red', 'text-center');
    referencia.appendChild(error);


}

function limpiarAlerta(referencia) {

    const alerta = referencia.querySelector('.bg-red');

    if (alerta) {
        alerta.remove();
    }
}

function validarEmail(email) {

    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

    const resultado = regex.test(email);
    return resultado;

}
