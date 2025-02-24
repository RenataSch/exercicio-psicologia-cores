// Classe que gerencia a validação do formulário
class FormValidator {
    constructor(formId) {
      this.form = document.getElementById(formId);
      this.usernameInput = this.form.querySelector('#username');
      this.passwordInput = this.form.querySelector('#password');
      this.addEventListeners();
    }
  
    addEventListeners() {
      // Validação ao enviar o formulário
      this.form.addEventListener('submit', (e) => this.validateForm(e));
  
      // Validação enquanto o usuário digita
      this.usernameInput.addEventListener('input', () => this.validateField(this.usernameInput));
      this.passwordInput.addEventListener('input', () => this.validateField(this.passwordInput));
    }
  
    validateForm(event) {
      event.preventDefault(); // Impede o envio padrão
  
      let isValid = true;
  
      // Validação do campo Usuário
      if (!this.usernameInput.value.trim()) {
        this.setError(this.usernameInput, 'Usuário é obrigatório.');
        isValid = false;
      } else {
        this.setValid(this.usernameInput);
      }
  
      // Validação do campo Senha
      if (!this.passwordInput.value.trim()) {
        this.setError(this.passwordInput, 'Senha é obrigatória.');
        isValid = false;
      } else {
        this.setValid(this.passwordInput);
      }
  
      if (isValid) {
        // exibe uma mensagem 
        alert('Formulário enviado com sucesso!');
        // Para enviar o formulário
      }
    }
  
    validateField(input) {
      // Se o campo tiver algum valor, marca como válido
      if (input.value.trim()) {
        this.setValid(input);
      } else {
        // Limpa o feedback se o campo estiver vazio
        this.clearFeedback(input);
      }
    }
  
    setError(input, message) {
      input.classList.add('error');
      input.classList.remove('valid');
      const errorSpan = input.parentElement.querySelector('.error-message');
      if (errorSpan) {
        errorSpan.textContent = message;
      }
    }
  
    setValid(input) {
      input.classList.remove('error');
      input.classList.add('valid');
      const errorSpan = input.parentElement.querySelector('.error-message');
      if (errorSpan) {
        errorSpan.textContent = '';
      }
    }
  
    clearFeedback(input) {
      input.classList.remove('error', 'valid');
      const errorSpan = input.parentElement.querySelector('.error-message');
      if (errorSpan) {
        errorSpan.textContent = '';
      }
    }
  }
  
  // Instancia a classe após o carregamento do DOM
  document.addEventListener('DOMContentLoaded', () => {
    new FormValidator('loginForm');
  });
  