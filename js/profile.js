
document.addEventListener("DOMContentLoaded", function(){
    
    const profileTitle = document.querySelector('.profile__title');
    const loggedInUsername = localStorage.getItem('loggedInUsername');
    const profileLinkSession = document.querySelector('.profile__link-session');
    const deleteProfile = document.querySelector('.form__linkProfile')
    
    //Coloca el nombre de usuario en la parte superior derecha
    profileTitle.textContent = loggedInUsername;

    // Agregar un evento al enlace de "Cerrar sesión" para marcar que el usuario cerró sesión
        profileLinkSession.addEventListener('click', function() {
        localStorage.removeItem('loggedInUsername'); // Marcar que el usuario cerró sesión
        profileTitle.textContent = 'Nombre de usuario'; // Restablecer el nombre de usuario en la interfaz
})
    // Obtener datos del LocalStorage
    
        const savedBirth_Date = localStorage.getItem('birth-date');
        const savedEmail = localStorage.getItem('email');

        //Colocar datos del usuario 
        const username = document.getElementById('username');
        const birth_Date = document.getElementById('birth-date');
        const email = document.getElementById('email');


        username.value = loggedInUsername;
        birth_Date.value = savedBirth_Date;
        email.value= savedEmail;

    //Evento eliminar Usuario
        deleteProfile.addEventListener('click', function(){
            localStorage.clear();

    })

    

    
    



        

        });
