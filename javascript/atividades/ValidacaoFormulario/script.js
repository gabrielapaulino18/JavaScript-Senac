document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const nomeUsuarioInput = document.getElementById('nomeusuario');
    const erroElement = document.getElementById('erro');

    form.addEventListener('submit', function (event) {
        if (nomeUsuarioInput.ariaValueMax.trim() === '') {
            // impede o envio do formulario
            event.preventDefault();

            // exibe a mensagem de erro
            erroElement.style.display = 'block';
        } else {
            // se o campo não estiver vazio, oculta a mensagem de erro
            erroElement.style.display = 'none';
        }

        // Validar o campo de e-mail com uma expressão regular ou seja um e-mail valido
        const emailRegex = /^[A-Za-z0-9._%] +@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        if(!emailRegex.test(nomeEmailInput.value.trim())) {
            event.preventDefault();
            erroElement.style.display = 'block';
        } else {
            erroElement.style.display = 'none'
        }
    });

});