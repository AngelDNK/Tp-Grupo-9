document.addEventListener("DOMContentLoaded", function () {
    let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || {};
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    const profileTitle = document.querySelector('.profile__title');
    const modifyProfile = document.querySelector('.form__input-savebutton');
    const profileLinkSession = document.querySelector('.profile__link-session');
    const deleteProfile = document.querySelector('.form__linkProfile');
    const saveDialog = document.querySelector('.dialogSave') 
  
    // Coloca el nombre de usuario en la parte superior derecha
    profileTitle.textContent = loggedInUser.username;
  
    // Agregar un evento al enlace de "Cerrar sesión" para marcar que el usuario cerró sesión
    profileLinkSession.addEventListener('click', function () {
      localStorage.removeItem('loggedInUser'); // Marcar que el usuario cerró sesión
      profileTitle.textContent = 'Nombre de usuario'; // Restablecer el nombre de usuario en la interfaz
    });
  
    // Colocar datos del usuario
    const username = document.getElementById('username');
    const birth_Date = document.getElementById('birth-date');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const passwordRepeat = document.getElementById('password-repeat');
  
    username.value = loggedInUser.username;
    birth_Date.value = loggedInUser.birthdate;
    email.value = loggedInUser.email;
  
    // Evento eliminar Usuario
    deleteProfile.addEventListener('click', function () {
      let userToDelete = loggedInUser.username;
  
      let newUsersArray = users.filter(function (users) {
        return users.username !== userToDelete;
      });
  
      localStorage.setItem('users', JSON.stringify(newUsersArray));
      localStorage.removeItem('loggedInUser');
    });
  
    // Evento Modificar User
    modifyProfile.addEventListener('click', function () {
      const userExists = users.some((user) => user.username === username.value || user.email === email.value);
      if (userExists) {
        alert('El nombre de usuario o el email ya existen. Por favor, elija otro.');
        return;
      } else {
        // Verificar si las contraseñas coinciden
        if (password.value !== passwordRepeat.value) {
          alert('Las contraseñas no coinciden.');
          return;
        } else 
        {
                
            
          const transformedPassword = password.value.slice(Math.ceil(password.value.length / 2)) + password.value.slice(0, Math.ceil(password.value.length / 2));
  
          let userToModify = loggedInUser.username;
  
          for (let i = 0; i < users.length; i++) {
            if (users[i].username === userToModify) {
              users[i].username = username.value;
              users[i].password = transformedPassword;
              users[i].email = email.value;
              users[i].birthdate = birth_Date.value;
  
              // Actualiza loggedInUser con los nuevos datos
              loggedInUser.username = username.value;
              loggedInUser.password = transformedPassword;
              loggedInUser.email = email.value;
              loggedInUser.birthdate = birth_Date.value;
  
              // Actualiza el array en el localStorage
              localStorage.setItem('users', JSON.stringify(users));
              localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
  
            
              // Restablece los valores en la interfaz
              username.value = loggedInUser.username;
              birth_Date.value = loggedInUser.birthdate;
              email.value = loggedInUser.email;
              password.value = ''; // No almacena la contraseña en la interfaz
              passwordRepeat.value = ''; // No almacena la contraseña en la interfaz
                
              

              break;
              
            }
                
            

          }       
 
          

        } }

        document.getElementById('dialogSaveChanges').showModal();

});
    


});
    // Cierra el diálogo de cambios guardados
    function cerrarDialogSaveChanges() {
        document.getElementById('dialogSaveChanges').close();
    }