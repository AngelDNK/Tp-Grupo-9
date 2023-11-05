document.addEventListener('DOMContentLoaded', () => {
    let username = localStorage.getItem('username');

    if (username) {
        document.getElementById('profile-title').textContent = username;
    }

    document.getElementById('profile-link-session').addEventListener('click', () => {
        localStorage.removeItem('username');
    });

    document.getElementById('next-button').addEventListener('click', (e) => {
        e.preventDefault();

        let seleccionoPlan = document.querySelector('input[name="option"]:checked')
        
        if (!seleccionoPlan) {
            let errorMsg = document.getElementById('error-msg');
            errorMsg.classList.add('error__message-show');
            errorMsg.classList.remove('error__message');
            
            setTimeout(() => {
                errorMsg.classList.remove('error__message-show');
                errorMsg.classList.add('error__message');
            }, 3000);
            return;
        }
        
        let planSeleccionado = document.querySelector('input[name="option"]:checked').getAttribute('id');

        window.location.href = 'pagar.html?plan=' + planSeleccionado;
        console.log(window.location.href)
    });
    
});

