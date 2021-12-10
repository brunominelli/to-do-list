// Constantes e Variáveis
// Seleção de elementos HTML
const buttonCreateTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const inputTask = document.getElementById('texto-tarefa');

// Funções
buttonCreateTask.addEventListener('click', () => {
  const listItem = document.createElement('li');
  listItem.innerHTML = inputTask.value;
  listItem.className = 'list-item';
  taskList.appendChild(listItem);
  inputTask.value = '';
});

taskList.addEventListener('click', function(event) {
  const elementClassSelectedNodes = document.querySelectorAll('.selected');
  const elementClassSelected = document.querySelector('.selected');
  if (elementClassSelectedNodes.length !== 0) {
      elementClassSelected.classList.remove('selected');
      event.target.classList.add('selected');
  } else event.target.classList.add('selected');
});

taskList.addEventListener('dblclick', function(event) {
  if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
  } else event.target.classList.add('completed');
});

// Execução