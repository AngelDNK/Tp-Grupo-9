document.addEventListener("DOMContentLoaded", function() {
    const profileTitle = document.querySelector('.profile__title');
    const profileLinkSession = document.querySelector('.profile__link-session');

    // Cargar los usuarios desde el localStorage
    const users = JSON.parse(localStorage.getItem('users'));

    // Verificar si el usuario está registrado
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        // Si el usuario está registrado, muestra el nombre de usuario y la opción de cerrar sesión
        profileTitle.textContent = loggedInUser.username;

        // Agregar un evento al enlace de "Cerrar sesión" para marcar que el usuario cerró sesión
        profileLinkSession.addEventListener('click', function() {
            localStorage.removeItem('loggedInUser'); // Marcar que el usuario cerró sesión
            profileTitle.textContent = 'Nombre de usuario'; // Restablecer el nombre de usuario en la interfaz
        });
    } else {
        // Si el usuario no está registrado, muestra un valor predeterminado o un mensaje
        profileTitle.textContent = 'Nombre de usuario'; // Puedes personalizar el mensaje para invitados
    }

    // Seleccionar todas las estrellas
    const stars = document.querySelectorAll(".songs__star");

    // Obtener el índice del usuario actual en el array de usuarios
    const userIndex = users.findIndex((user) => user.username === loggedInUser.username);

    // Cargar los álbumes favoritos del usuario actual desde el objeto del usuario
    const favoritos = loggedInUser.albumsFavoritos || [];

    // Iterar a través de las estrellas
    stars.forEach((star, index) => {
        star.addEventListener("click", () => {
            // Verificar si el álbum ya es un favorito
            const isFavorite = star.classList.contains("selected");
            const albumName = document.querySelectorAll(".songs__image")[index].getAttribute("alt");

            if (isFavorite) {
                // Si ya es un favorito, quitarlo de la lista de favoritos y actualizar el estilo
                favoritos.splice(favoritos.indexOf(albumName), 1);
                star.classList.remove("selected");
            } else {
                // Si no es un favorito, agregarlo a la lista de favoritos y actualizar el estilo
                favoritos.push(albumName);
                star.classList.add("selected");
            }

            // Actualizar la lista de álbumes favoritos del usuario en el objeto del usuario
            loggedInUser.albumsFavoritos = favoritos;

            // Actualizar el objeto del usuario en el localStorage
            localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

            // Actualizar el array de usuarios en el localStorage
            users[userIndex] = loggedInUser;
            localStorage.setItem('users', JSON.stringify(users));
        });
    });

    // Marcar las estrellas según los álbumes favoritos del usuario
    favoritos.forEach((albumName) => {
        // Aquí, puedes utilizar el albumName para identificar y marcar las estrellas de los álbumes favoritos
        // Puedes comparar el valor de albumName con el atributo alt de las imágenes para determinar cuáles deben estar marcadas.
        document.querySelectorAll(".songs__image").forEach((image, index) => {
            if (image.getAttribute("alt") === albumName) {
                stars[index].classList.add("selected");
            }
        });
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
