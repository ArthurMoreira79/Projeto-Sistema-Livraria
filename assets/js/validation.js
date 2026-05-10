document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form-livro");
    
    if(form) {
        form.addEventListener("submit", function(event) {
            // Previne o envio automático
            event.preventDefault();

            // Reseta mensagens
            document.getElementById('mensagem-erro').classList.add('d-none');
            document.getElementById('mensagem-sucesso').classList.add('d-none');

            // Captura os campos obrigatórios
            const isbn = document.getElementById("isbn").value.trim();
            const nome = document.getElementById("nome").value.trim();
            const autor = document.getElementById("autor").value.trim();
            const editora = document.getElementById("editora").value.trim();
            const ano = document.getElementById("ano").value.trim();
            const assunto = document.getElementById("assunto").value;
            const quantidade = document.getElementById("quantidade").value;
            
            // Verifica os Radios
            const tipoSelecionado = document.querySelector('input[name="tipo"]:checked');
            const origemSelecionada = document.querySelector('input[name="origem"]:checked');

            // Validação simples
            if (!isbn || !nome || !autor || !editora || !ano || !assunto || !quantidade || !tipoSelecionado || !origemSelecionada) {
                // Exibe erro
                document.getElementById('mensagem-erro').classList.remove('d-none');
                window.scrollTo(0,0);
            } else {
                // Exibe sucesso
                document.getElementById('mensagem-sucesso').classList.remove('d-none');
                
                // Limpa o form após sucesso
                form.reset();
                window.scrollTo(0,0);
            }
        });
    }
});

// === VALIDAÇÃO DO FORMULÁRIO DE CLIENTES ===
    const formCliente = document.getElementById("form-cliente");
    
    if(formCliente) {
        formCliente.addEventListener("submit", function(event) {
            event.preventDefault();

            // Reseta mensagens
            document.getElementById('mensagem-erro-cliente').classList.add('d-none');
            document.getElementById('mensagem-sucesso-cliente').classList.add('d-none');

            // Captura os campos obrigatórios do cliente
            const nomeCliente = document.getElementById("nomeCliente").value.trim();
            const documento = document.getElementById("documento").value.trim();
            const dataNascimento = document.getElementById("dataNascimento").value;
            const endereco = document.getElementById("endereco").value.trim();
            const telefonePrincipal = document.getElementById("telefonePrincipal").value.trim();

            // Validação
            if (!nomeCliente || !documento || !dataNascimento || !endereco || !telefonePrincipal) {
                // Exibe erro
                document.getElementById('mensagem-erro-cliente').classList.remove('d-none');
                window.scrollTo(0,0);
            } else {
                // Exibe sucesso
                document.getElementById('mensagem-sucesso-cliente').classList.remove('d-none');
                
                // Limpa o form após sucesso
                formCliente.reset();
                window.scrollTo(0,0);
            }
        });
    }