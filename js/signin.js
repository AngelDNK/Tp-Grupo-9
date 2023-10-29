// La vista inicio de sesión debe:
// ○ Almacenar el nombre de usuario que inició sesión el localstorage.
// ○ Al momento de iniciar sesión se debe validar el usuario y contraseña.
// ■ Si alguno de los datos es incorrecto, se debe mostrar el mensaje “El usuario y/o
// contraseña es incorrecto”
// ■ Si los datos son correctos, se debe marcar en el localstorage que el usuario inició
// sesión

document.addEventListener("DOMContentLoaded", function() {
    // Inicio de sesión
    const form = document.querySelector('.form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que se envíe el formulario

        const username = usernameInput.value;
        const password = passwordInput.value;

        // Recuperar los datos del usuario almacenados en el localStorage
        const savedUsername = localStorage.getItem('username');
        const savedPassword = localStorage.getItem('password');

        if (username === '' || password === '') {
            // Mostrar un mensaje de error si los campos están vacíos
            alert('Por favor, completa todos los campos.');
        } else if (username === savedUsername && password === savedPassword) {
            // Almacenar el nombre de usuario en el localStorage
            localStorage.setItem('loggedInUsername', username);

            // Redirigir a la página de inicio de sesión exitosa
            window.location.href = './views/home.html';
        } else {
            // Mostrar un mensaje de error si los datos son incorrectos
            alert('El usuario y/o contraseña son incorrectos. Por favor, inténtalo de nuevo.');
        }
    });
});

