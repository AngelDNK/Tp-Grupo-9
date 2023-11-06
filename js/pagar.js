document.addEventListener('DOMContentLoaded', () => {
    let username = localStorage.getItem('username');

    if (username) {
        document.getElementById('profile-title').textContent = username;
    }

    document.getElementById('profile-link-session').addEventListener('click', () => {
        localStorage.removeItem('username');
    });
})

function cancelar() {
    window.location.href = 'index.html'; 
}

function validarCampos() {
    const card = document.getElementById('card').value;
    const cvc = document.getElementById('cvc').value;


    const errorContainer = document.getElementById('error-container');
    const cardError = document.getElementById('cardError');
    const cvcError = document.getElementById('cvcError');


    // Validacion de campos
    const cardRegex = /^\d{16}$/;
    const cvcRegex = /^(?!000|999)\d{3}$/;


    if (!cardRegex.test(card)) {
        errorContainer.classList.add('error-message');
        cardError.textContent = 'Numero de tarjeta incorrecto';
        cardError.classList.add('error-message');
        setTimeout(() => {
            cardError.textContent = '';
            cardError.classList.remove('error-message');
        }, 3000);
    } else {
        cardError.textContent = '';
    }

    if (!cvcRegex.test(cvc)) {
        cvcError.textContent = 'Codigo de seguridad incorrecto';
        cvcError.classList.add('error-message');
        setTimeout(() => {
            cvcError.textContent = '';
            cvcError.classList.remove('error-message');
        }, 3000);
    } else {
        cvcError.textContent = '';
    }


    // Si todos los campos estan correctos
    if (cardRegex.test(card) && cvcRegex.test(cvc)) {
        alert('Pago exitoso');
        
        let username = localStorage.getItem('username');
        
        if (username) {
            window.location.href = 'index.html';
        } else {
            window.location.href = 'singin.html';
        }

    }
}