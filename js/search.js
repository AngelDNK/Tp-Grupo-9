document.addEventListener("DOMContentLoaded", function () {
    const profileTitle = document.querySelector('.profile__title');
    const songsSection = document.querySelector(".songs__section");

    // Cargar los usuarios desde el localStorage
    const users = JSON.parse(localStorage.getItem('users'));

    // Verificar si el usuario está registrado
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        // Si el usuario está registrado, muestra el nombre de usuario
        profileTitle.textContent = loggedInUser.username;
    } else {
        // Si el usuario no está registrado, muestra un valor predeterminado o un mensaje
        profileTitle.textContent = 'Nombre de usuario'; // Puedes personalizar el mensaje para invitados
    }

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

NODO_ALBUM_BUSCAR.addEventListener("input", function (e) {
    const PALABRA_A_BUSCAR = NODO_ALBUM_BUSCAR.value.toLowerCase();

    songsSection.innerHTML = "";

    ALBUMES.forEach(albumObj => {
        if (albumObj && albumObj.album) {
            const albumNombre = albumObj.album.id.toLowerCase();

            if (albumNombre.includes(PALABRA_A_BUSCAR)) {
                
                const clonedAlbum = albumObj.album.closest('article').cloneNode(true);
                const images = clonedAlbum.querySelectorAll('img');
                images.forEach(img => {
                    img.style.width = '450px'; 
                    img.style.height = '450px'; 
                });
                songsSection.appendChild(clonedAlbum);
            }
        }
    });
});
});


