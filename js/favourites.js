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


// Al hacer click se actualiza la imagen de la cancion sonando y el texto
const cancion1 = document.querySelector("#song__first");
const cancion2 = document.querySelector("#song__second");
const cancion3 = document.querySelector("#song__third");
const cancion4 = document.querySelector("#song__fourth");
const cancion5 = document.querySelector("#song__fifth");
const cancion6 = document.querySelector("#song__sixth");
const songAside = document.querySelector(".song__image");
const texto = document.querySelector(".song__description");

cancion1.addEventListener("click", function() {
    songAside.src= '../img/canserbero cancion 1.jpg';
    texto.textContent = "La canción Na de Canserbero es una canción de rap intensa y apasionada que se centra en los desafíos y luchas de ser un artista y una persona que se niega a conformarse con las normas y expectativas sociales. Las letras son crudas y poderosas, transmitiendo una sensación de frustración, ira y desafío.";
})

cancion2.addEventListener("click", function() {
    songAside.src= '../img/salando las heridas cancion 2.jpg';
    texto.textContent = "La canción Salando las Heridas de Patricio Rey y sus Redonditos de Ricota explora temas de traición, supervivencia y las consecuencias de las acciones de uno. A través de imágenes vívidas y lenguaje metafórico, las letras pintan un cuadro de una persona que ha engañado y dañado repetidamente a otros pero que ahora enfrenta las repercusiones.";
})

cancion3.addEventListener("click", function() {
    songAside.src= '../img/ciro cancion 3.jpg';
    texto.textContent = "La canción Caminando de Ciro y los Persas explora temas de resiliencia, determinación y abrazar la individualidad. Las letras describen el viaje del narrador, quien navega por los desafíos de la vida con un sentido de propósito y confianza en sí mismo.";
})

cancion4.addEventListener("click", function() {
    songAside.src= '../img/wos cancion 4.jpg';
    texto.textContent = "La canción FREESTYLE (Live Set) de WOS explora temas de autoexpresión, libertad y luchas internas. Las letras profundizan en el viaje introspectivo del artista, abrazando su identidad única y encontrando consuelo en su arte."
})

cancion5.addEventListener("click", function() {
    songAside.src= '../img/tupac album 5.jpg';
    texto.textContent = "La canción Only God Can Judge Me de 2Pac (ft. Rappin' 4-Tay) explora la vida de los afroamericanos que viven en los guetos de Estados Unidos, donde se enfrentan a diario a la pobreza, la delincuencia y el racismo.";
})

cancion6.addEventListener("click", function() {
    songAside.src= '../img/Idontwanttomissathing cancion 6.jpg';
    texto.textContent = "La canción I Don't Want to Miss a Thing de Aerosmith es una declaración de amor y devoción, expresando admiración por alguien tan envuelto en ellos que nunca quiere separarse de su lado. La letra habla del deseo de permanecer en el momento para siempre y nunca dejar ir su amor."
})


// Al hacer click en las estrellas, el álbum se debe agregar/retirar como álbum favorito.
let estrellaNegra = document.getElementById