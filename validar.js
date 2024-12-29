// Função para validar nome (mínimo 3 caracteres)
function validarNome(campo) {
    const nome = campo.value.trim();
    if (nome.length < 3) {
        alert("O nome deve ter pelo menos 3 caracteres.");
        campo.focus();
        return false;
    }
    return true;
}

// Função para validar morada (mínimo 5 caracteres)
function validarMorada(campo) {
    const morada = campo.value.trim();
    if (morada.length < 5) {
        alert("A morada deve ter pelo menos 5 caracteres.");
        campo.focus();
        return false;
    }
    return true;
}

// Função para validar telemóvel (deve ter exatamente 9 dígitos numéricos)
function validarTelemovel(campo) {
    const telemovel = campo.value.trim();
    const regexTelemovel = /^[0-9]{9}$/;
    if (!regexTelemovel.test(telemovel)) {
        alert("O número de telemóvel deve ter 9 dígitos.");
        campo.focus();
        return false;
    }
    return true;
}

// Função para validar idade (deve ser um número entre 1 e 99)
function validarIdade(campo) {
    const idade = campo.value.trim();
    const idadeNumerica = parseInt(idade);
    if (isNaN(idadeNumerica) || idadeNumerica < 1 || idadeNumerica > 99) {
        alert("A idade deve ser um número entre 1 e 99.");
        campo.focus();
        return false;
    }
    return true;
}

// Função para validar e-mail (formato básico de e-mail)
function validarEmail(campo) {
    const email = campo.value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        campo.focus();
        return false;
    }
    return true;
}
