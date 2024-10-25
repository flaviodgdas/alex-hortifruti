function cadastrar() {
    const nome = document.getElementById('nome').value;
    const numero = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (nome && email && senha) {
        localStorage.setItem('usuario', JSON.stringify({ nome, telefone, email, senha }));
        alert('Usuário cadastrado com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const senha = document.getElementById('loginSenha').value;
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario && usuario.email === email && usuario.senha === senha) {
        alert('Login realizado com sucesso!');
    } else {
        alert('Email ou senha incorretos.');
    }
}
