let users = JSON.parse(localStorage.getItem('users')) || [];

// Función para registrar un usuario con validación de contraseñas coincidentes
function registerUser(username, password, confirmPassword, email, birthdate, premium) {
        // Verifica si el usuario o el email ya existen
        const userExists = users.some((user) => user.username === username || user.email === email);
        if (userExists) {
            alert('El nombre de usuario o el email ya existen. Por favor, elija otro.');
            return;
        }
    
        // Verifica si las contraseñas coinciden
        if (password !== confirmPassword) {
            document.getElementById('errorDialogPasswordNotMatch').showModal();
            return;
        }
    
        const transformedPassword = password.slice(Math.ceil(password.length / 2)) + password.slice(0, Math.ceil(password.length / 2));

        // Crea el nuevo usuario
        const newUser = {
            username,
            password: transformedPassword,
            email,
            birthdate,
            albumsFavoritos: [],
            premium,
        };
    
        // Agrega el usuario al array de usuarios
        users.push(newUser);
    
        // Almacena el array de usuarios actualizado en el localStorage
        localStorage.setItem('users', JSON.stringify(users));
    
    }    
    // Función para manejar el envío del formulario de registro
    function handleRegistration(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('password-repeat').value;
        const email = document.getElementById('email').value;
        const birthdate = document.getElementById('birth-date').value;
        const premium = false;
    
        registerUser(username, password, confirmPassword, email, birthdate, premium);
    
        // Restablece el formulario
        event.target.reset();
    }

    function cerrarDialogoErrorIncorrect() {
        document.getElementById('errorDialogPasswordNotMatch').close();
    }
    
    // Agrega un controlador de eventos al formulario de registro
    document.querySelector('.form').addEventListener('submit', handleRegistration);


