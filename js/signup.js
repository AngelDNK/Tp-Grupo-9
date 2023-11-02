document.addEventListener("DOMContentLoaded", function() {
    // Registro de usuario
    const form = document.querySelector('.form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const passwordRepeatInput = document.getElementById('password-repeat');
    const emailInput =  document.getElementById('email');
    const birthDateInput =  document.getElementById('birth-date');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que se envíe el formulario

        const username = usernameInput.value;
        const password = passwordInput.value;
        const passwordRepeat = passwordRepeatInput.value;
        const email = emailInput.value;
        const birth_Date = birthDateInput.value;

        if (username === '' || password === '' || passwordRepeat ==='' ){
        document.getElementById('errorDialogEmpty').showModal();
        return false;
         }
            if (password === passwordRepeat) {
            // Realizar la transformación de la contraseña
            const transformedPassword = password.slice(password.length / 2) + password.slice(0, password.length / 2);

            // Guardar los datos del usuario en el localStorage
            localStorage.setItem('username', username);
            localStorage.setItem('password', transformedPassword);
            localStorage.setItem('email', email);
            localStorage.setItem('birth-date', birth_Date);

            // Redirigir a la página de inicio de sesión
            window.location.href = '../index.html';

            // Limpiar el formulario
            form.reset();
            
        } else {
            // Mostrar un mensaje de error si las contraseñas no coinciden
            document.getElementById('errorDialogPasswordNotMatch').showModal();
        }
        
    });

});

// Función para cerrar el diálogo de error por campos vacíos
function cerrarDialogoErrorEmpty() {
    document.getElementById('errorDialogEmpty').close();
}

// Función para cerrar el diálogo de error por contraseña desiguales
function cerrarDialogoErrorIncorrect() {
    document.getElementById('errorDialogPasswordNotMatch').close();
}
