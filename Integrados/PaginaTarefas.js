// Adiciona  inserir tarefas
document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
      const taskList = document.getElementById('taskList');
      const li = document.createElement('li');
      
      // Aplica a classe para item da tarefa
      li.className = 'task-item';
      
      // Se o texto da tarefa conter "!" o item é marcado como importante
      if (taskText.includes('!')) {
        li.classList.add('important');
      }
      
      li.textContent = taskText;
      taskList.appendChild(li);
      
      // Limpa o campo de entrada
      taskInput.value = "";
    }
  });
  