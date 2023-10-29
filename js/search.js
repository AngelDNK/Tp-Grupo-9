document.addEventListener("DOMContentLoaded", function () {
    const profileTitle = document.querySelector('.profile__title');
    const profileLinkSession = document.querySelector('.profile__link-session');

    // Verificar si el usuario está registrado
    const loggedInUsername = localStorage.getItem('loggedInUsername');

    if (loggedInUsername) {
        // Si el usuario está registrado, muestra el nombre de usuario y la opción de cerrar sesión
        profileTitle.textContent = loggedInUsername;

        // Agregar un evento al enlace de "Cerrar sesión" para marcar que el usuario cerró sesión
        profileLinkSession.addEventListener('click', function () {
            localStorage.removeItem('loggedInUsername'); // Marcar que el usuario cerró sesión
            profileTitle.textContent = 'NombreDeUsuario'; // Restablecer el nombre de usuario en la interfaz
        });
    } else {
        // Si el usuario no está registrado, muestra un valor predeterminado o un mensaje
        profileTitle.textContent = 'NombreDeUsuario'; // Puedes personalizar el mensaje para invitados
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const search__Input = document.getElementById('search');
    const songs__section = document.querySelector('#songs__section');

    search__Input.addEventListener('input', function () {
        const search = search__Input.value.toLowerCase();

        const articles = songs__section.querySelectorAll('#songs__article');
        articles.forEach(function (article) {
            const image = article.querySelector('#songs__image');
            const description = article.querySelector('#song__description b');
            const title = description.textContent.toLowerCase();

        });
    });
});