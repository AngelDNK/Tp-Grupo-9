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

/*document.addEventListener('DOMContentLoaded', function () {
    const search__Input = document.getElementById('search');
    const songs__section = document.querySelector('.songs__section');

    search__Input.addEventListener('input', function () {
        const search = search__Input.value.toLowerCase();

        const articles = songs__section.querySelectorAll('.songs__article');
        articles.forEach(function (article) {
            const image = article.querySelector('.songs__image');
            const description = article.querySelector('song__description');
            const title = description.textContent.toLowerCase();

        });
    });
});*/


const ALBUM1 = { album: document.querySelector('#cancerbero') }
const ALBUM2 = { album: document.querySelector('#salandolasheridas') }
const ALBUM3 = { album: document.querySelector('#ciro') }
const ALBUM4 = { album: document.querySelector('#wos') }
const ALBUM5 = { album: document.querySelector('#tupac') }
const ALBUM6 = { album: document.querySelector('#idontwanttomissathing') }
const ALBUM7 = { album: document.querySelector('#columbarecords') }
const ALBUM8 = { album: document.querySelector('#kirby') }
const ALBUM9 = { album: document.querySelector('#roadsong') }
const ALBUM10 = { album: document.querySelector('#abba') }
const ALBUM12 = { album: document.querySelector('#random') }
const ALBUM13 = { album: document.querySelector('#disc') }
const ALBUM14 = { album: document.querySelector('#piromania') }
const ALBUM15 = { album: document.querySelector('#harrystyles') }
const ALBUM16 = { album: document.querySelector('#somosmagic') }

const ALBUMES = [ALBUM1, ALBUM2, ALBUM3, ALBUM4, ALBUM5, ALBUM6, ALBUM7, ALBUM8, ALBUM9, ALBUM10, ALBUM12, ALBUM13, ALBUM14, ALBUM15, ALBUM16];

const NODO_ALBUM_BUSCAR = document.querySelector('#search');

NODO_ALBUM_BUSCAR.addEventListener("keyup", e => {

    const PALABRA_A_BUSCAR = NODO_ALBUM_BUSCAR.value;
    
    const NODO_SECTION = document.getElementById("songs_section");
    
    NODO_SECTION.innerHTML = "";

    ALBUMES.forEach((album) => {
        if (album && album.album) {
            const albumNombre = album.album.id.toLowerCase();
            
            if (albumNombre.includes(PALABRA_A_BUSCAR)) {
                NODO_SECTION.innerHTML += `<article><img src="${album.album.src}" alt="${album.album.alt}"></article>`;
            }else{
                // NODO_SECTION.innerHTML = "";
            }
        }
    });
});

    


    /*`<article> ${ALBUMES[0].album} </article>`
                             `<article> ${ALBUMES[1].album} </article>`
                             `<article> ${ALBUMES[2].album} </article>`
                             `<article> ${ALBUMES[3].album} </article>`
                             `<article> ${ALBUMES[4].album} </article>`
                             `<article> ${ALBUMES[5].album} </article>`
                             `<article> ${ALBUMES[6].album} </article>`
                             `<article> ${ALBUMES[7].album} </article>`
                             `<article> ${ALBUMES[8].album} </article>`
                             `<article> ${ALBUMES[9].album} </article>`
                             `<article> ${ALBUMES[10].album} </article>`
                             `<article> ${ALBUMES[11].album} </article>`
                             `<article> ${ALBUMES[12].album} </article>`
                             `<article> ${ALBUMES[13].album} </article>`
                             `<article> ${ALBUMES[14].album} </article>`
                             `<article> ${ALBUMES[15].album} </article>`*/



                            