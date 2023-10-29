document.addEventListener("DOMContentLoaded", function() {
    // Registro de usuario
    const form = document.querySelector('.form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const passwordRepeatInput = document.getElementById('password-repeat');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que se envíe el formulario

        const username = usernameInput.value;
        const password = passwordInput.value;
        const passwordRepeat = passwordRepeatInput.value;

        if (password === passwordRepeat) {
            // Realizar la transformación de la contraseña
            const transformedPassword = password.slice(password.length / 2) + password.slice(0, password.length / 2);

            // Guardar los datos del usuario en el localStorage
            localStorage.setItem('username', username);
            localStorage.setItem('password', transformedPassword);

            // Redirigir a la página de inicio de sesión
            window.location.href = '../index.html';

            // Limpiar el formulario
            form.reset();
            
        } else {
            // Mostrar un mensaje de error si las contraseñas no coinciden
            alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
        }
    });
});