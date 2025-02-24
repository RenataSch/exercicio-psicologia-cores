//  gerencia a alteração do título
class TitleChanger {
    constructor(titleId, buttonId) {
      this.titleElement = document.getElementById(titleId);
      this.buttonElement = document.getElementById(buttonId);
      this.addEvent();
    }
  
    addEvent() {
      this.buttonElement.addEventListener('click', () => this.changeTitle());
    }
  
    changeTitle() {
      // Altera o conteúdo do título
      this.titleElement.textContent = 'Título Alterado';
      // Remove a classe inicial e adiciona a classe que altera a cor para verde
      this.titleElement.classList.remove('titulo');
      this.titleElement.classList.add('titulo-positive');
    }
  }
  
  // Instancia a classe após o carregamento do DOM
  document.addEventListener('DOMContentLoaded', () => {
    new TitleChanger('titulo', 'btnAcao');
  });
  