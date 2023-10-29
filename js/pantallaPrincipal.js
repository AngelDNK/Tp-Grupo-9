document.addEventListener("DOMContentLoaded", function() {
    const profileTitle = document.querySelector('.profile__title');
    const profileLinkSession = document.querySelector('.profile__link-session');
    
    // Verificar si el usuario está registrado
    const loggedInUsername = localStorage.getItem('loggedInUsername');

    if (loggedInUsername) {
        // Si el usuario está registrado, muestra el nombre de usuario y la opción de cerrar sesión
        profileTitle.textContent = loggedInUsername;
        
        // Agregar un evento al enlace de "Cerrar sesión" para marcar que el usuario cerró sesión
        profileLinkSession.addEventListener('click', function() {
            localStorage.removeItem('loggedInUsername'); // Marcar que el usuario cerró sesión
            profileTitle.textContent = 'Nombre de usuario'; // Restablecer el nombre de usuario en la interfaz
        });
    } else {
        // Si el usuario no está registrado, muestra un valor predeterminado o un mensaje
        profileTitle.textContent = 'Nombre de usuario'; // Puedes personalizar el mensaje para invitados
    }
});

// Función para cargar los álbumes favoritos desde el localStorage
function cargarAlbumsFavoritos() {
    const favoritos = localStorage.getItem("favoritos");
    return favoritos ? JSON.parse(favoritos) : [];
}

// Función para guardar los álbumes favoritos en el localStorage
function guardarAlbumsFavoritos(favoritos) {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

// Seleccionar todos los elementos con la clase 'songs__article'
const songsArticles = document.querySelectorAll(".songs__article");

// Cargar los álbumes favoritos existentes desde el localStorage
const favoritos = cargarAlbumsFavoritos();

// Iterar a través de los elementos
songsArticles.forEach((article) => {
    // Encontrar la estrella dentro de este artículo
    const star = article.querySelector(".songs__star");

    // Obtener el nombre del álbum
    const albumName = article.querySelector(".songs__image").getAttribute("src");

    // Agregar un manejador de eventos al hacer clic en la estrella
    star.addEventListener("click", () => {
        const isFavorite = star.classList.contains("selected")
        if (isFavorite) {
            // Si ya es un favorito, eliminarlo de la lista de favoritos y actualizar el estilo
            const indexToRemove = favoritos.indexOf(albumName);
            if (indexToRemove !== -1) {
                favoritos.splice(indexToRemove, 1);
                guardarAlbumsFavoritos(favoritos);
            }
            star.classList.remove("selected");
        } else {
            // Si no es un favorito, agregarlo a la lista de favoritos y actualizar el estilo
            favoritos.push(albumName);
            guardarAlbumsFavoritos(favoritos);
            star.classList.add("selected");
        }
    });
});