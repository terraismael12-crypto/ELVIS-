const checkMostrar = document.getElementById('verPass');
const inputPass = document.getElementById('passAdmin');
const inputCedula = document.getElementById('cedulaAdmin');

checkMostrar.addEventListener('change', function() {
    if (this.checked) {
        inputPass.type = "text";
    } else {
        inputPass.type = "password";
    }
});

document.getElementById('formLogin').addEventListener('submit', function(event) {
   

    const cedulaIngresada = inputCedula.value;
    const passIngresada = inputPass.value;
    const cedulaCorrecta = "22222222";
    const passCorrecta = "admin1234"; 

    if (cedulaIngresada === cedulaCorrecta && passIngresada === passCorrecta) {
       document.getElementById('contenedor-login').style.display = 'none';
        document.getElementById('contenedor-tabla').style.display = 'block';
        console.log("Acceso de administrador verificado.");
        event.preventDefault();
    } else {
        
        alert("Cédula o contraseña incorrecta.");
    }
}); 