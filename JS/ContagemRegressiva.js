//  gerencia o temporizador de contagem regressiva
class CountdownTimer {
    constructor(elementId, startTime = 10) {
      this.timerElement = document.getElementById(elementId);
      this.timeLeft = startTime;
      this.timerInterval = null;
    }
  
    // Inicia a contagem
    start() {
      this.updateDisplay();
      this.timerInterval = setInterval(() => {
        this.timeLeft--;
        if (this.timeLeft >= 0) {
          this.updateDisplay();
        } else {
          clearInterval(this.timerInterval);
          this.showEndMessage();
        }
      }, 1000);
    }
  
    // Atualiza o display da contagem regressiva
    updateDisplay() {
      this.timerElement.textContent = this.timeLeft;
      // faz com que a classe de contagem esteja aplicada 
      this.timerElement.classList.remove("timer-ended");
      this.timerElement.classList.add("timer-countdown");
    }
  
    // Exibe a mensagem de fim e altera o estilo
    showEndMessage() {
      this.timerElement.textContent = "Tempo acabou!";
      this.timerElement.classList.remove("timer-countdown");
      this.timerElement.classList.add("timer-ended");
    }
  }
  
  // Inicia o temporizador após o carregamento completo do DOM
  document.addEventListener("DOMContentLoaded", () => {
    const timer = new CountdownTimer("timer", 10);
    timer.start();
  });
  