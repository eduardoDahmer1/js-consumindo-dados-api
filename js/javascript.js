async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente!');
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
        console.log(erro);
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const nascimento = document.getElementById('nascimento').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const endereco = document.getElementById('endereco').value;
    const cep = document.getElementById('cep').value;
    const numero = document.getElementById('numero').value;
    const complemento = document.getElementById('complemento').value;
    const bairro = document.getElementById('bairro').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    
    if (nome === '' || nascimento === '' || telefone === '' || endereco === '' || cep === '' || numero === '' || complemento === '') {
      alert('Por favor, preencha o campo para continuar');
      return false;
    }
    
    if (email === '' || bairro === '' || cidade === '' || estado === '') {
      alert('Por favor, preencha o campo para continuar');
      return false;
    }

  // Verifica se o e-mail é válido
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, insira um endereço de e-mail válido.');
    return;
  }
   // Envie o formulário
   alert('Formulário enviado com sucesso!');
   document.getElementById('formulario').submit();

    return true;
  }