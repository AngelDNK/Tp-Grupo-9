// Vista de Registro

Registered_users = [];

const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
const password_repeat = document.getElementById("password-repeat").value;
const email = document.getElementById("email").value;
const birth_date = document.getElementById("birth-date").value;

if(password !== password_repeat){
    alert("La Contraseña no coincide")

}

const mitad = password.slice(0,password.length / 2);
const mitad1 = password.slice(password.length / 2);
const password_Transformed  = mitad1 + mitad;

const user = {
    username: username,
    contraseña: password_Transformed,
    email: email,
    birth_date: birth_date
};

localStorage.setItem("UserRegister", JSON.stringify(user));

Registered_users.push(user);