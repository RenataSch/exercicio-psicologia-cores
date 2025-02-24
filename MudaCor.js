// Seleciona o botão e o parágrafo
const botao = document.getElementById('botao');
const texto = document.getElementById('texto');

// Adiciona o evento de clique no botão
botao.addEventListener('click', function() {
  // Remove a classe inicial e adiciona a classe de sucesso
  texto.classList.remove('texto-inicial');
  texto.classList.add('texto-sucesso');
});
