const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');

function login() {
    if (emailInput.value == 'admin@email.com' && senhaInput.value == '123456') {
        alert('Login realizado com sucesso')
        window.location.href = 'admin.html'
    } else {
        alert('E-mail e/ou senha errado!')
    }
}