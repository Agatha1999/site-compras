document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    document.getElementById('mensagemSucesso').style.display = 'block'; // Exibe a mensagem de sucesso
    this.reset(); // Reseta o formulário
});