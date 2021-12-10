// Constantes e Variáveis
// Seleção de elementos HTML
const buttonCreateTask = document.getElementById('criar-tarefa');
const buttonClearAllTasks = document.getElementById('apaga-tudo');
const buttonClearCompletedTasks = document.getElementById('remover-finalizados');
const taskList = document.getElementById('lista-tarefas');
const inputTask = document.getElementById('texto-tarefa');

// Funções
/* Cria itens da lista de tarefas */
buttonCreateTask.addEventListener('click', () => {
  if (inputTask.value !== '') {
    const listItem = document.createElement('li');
    listItem.innerHTML = inputTask.value;
    listItem.className = 'list-item';
    taskList.appendChild(listItem);
    inputTask.value = '';
  } else alert('Insira uma tarefa!');
});

/* Apaga todos os itens da lista de tarefas */
buttonClearAllTasks.addEventListener('click', () => {
  for (let index = taskList.childNodes.length - 1; index >= 0; index -= 1) {
    taskList.removeChild(taskList.childNodes[index]);
  }
});

/* Apaga todos os itens finalizados da lista de tarefas */
buttonClearCompletedTasks.addEventListener('click', () => {
  const listItem = document.querySelectorAll('.completed');
  for (let index = listItem.length - 1; index >= 0; index -= 1) {
    listItem[index].remove();
  }
});

/* Seleciona um elemento da lista de tarefas e adiciona a classe selected */
taskList.addEventListener('click', (event) => {
  const elementClassSelectedNodes = document.querySelectorAll('.selected');
  const elementClassSelected = document.querySelector('.selected');
  if (elementClassSelectedNodes.length !== 0) {
    elementClassSelected.classList.remove('selected');
    event.target.classList.add('selected');
  } else event.target.classList.add('selected');
});

/* Risca um item da lista de tarefas quando a pessoa usuária clica duas vazes no item */
taskList.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else event.target.classList.add('completed');
});