// Constantes e Variáveis

// Botões
const buttonCreateTask = document.getElementById('criar-tarefa');
const buttonClearAllTasks = document.getElementById('apaga-tudo');
const buttonClearCompletedTasks = document.getElementById('remover-finalizados');
const buttonSaveTasks = document.getElementById('salvar-tarefas');
const buttonMoveTaskUp = document.getElementById('mover-cima');
const buttonMoveTaskDown = document.getElementById('mover-baixo');

// Lista de Tarefas
const taskList = document.getElementById('lista-tarefas');
const inputTask = document.getElementById('texto-tarefa');

// Funções
/* Botão Criar: Cria itens da lista de tarefas */
buttonCreateTask.addEventListener('click', () => {
  if (inputTask.value !== '') {
    const listItem = document.createElement('li');
    listItem.innerHTML = inputTask.value;
    listItem.className = 'list-item';
    taskList.appendChild(listItem);
    inputTask.value = '';
  } else alert('Insira uma tarefa!');
});

/* Botão Limpar: Apaga todos os itens da lista de tarefas */
buttonClearAllTasks.addEventListener('click', () => {
  for (let index = taskList.childNodes.length - 1; index >= 0; index -= 1) {
    taskList.removeChild(taskList.childNodes[index]);
  }
});

/* Botão Limpar Finalizadas: Apaga todos os itens finalizados da lista de tarefas */
buttonClearCompletedTasks.addEventListener('click', () => {
  const listItem = document.querySelectorAll('.completed');
  for (let index = listItem.length - 1; index >= 0; index -= 1) {
    listItem[index].remove();
  }
});

/* Botão Salvar: Salva a lista de tarefas */
buttonSaveTasks.addEventListener('click', () => {
  window.localStorage.clear();
  const listItems = taskList.childNodes;
  if (listItems.length > 0) {
    localStorage.setItem('tasks', listItems.length);
    for (let index = 0; index < listItems.length; index += 1) {
      localStorage.setItem(`${index + 1} item`, listItems[index].innerText);
      if (listItems[index].classList.contains('completed')) {
        localStorage.setItem(`${index + 1} class`, 'completed');
      }
    }
  } else alert('Não há tarefas na lista!');
});

window.onload = () => {
  const tasks = localStorage.getItem('tasks');
  for (let index = 0; index < tasks; index += 1) {
    const listItem = document.createElement('li');
    const savedTask = localStorage.getItem(`${index + 1} item`);
    listItem.innerHTML = savedTask;
    listItem.className = 'list-item';
    listItem.classList.add(localStorage.getItem(`${index + 1} class`));
    taskList.appendChild(listItem);
  }
};

/* Função auxiliar para os eventos dos seguintes botões:
-- Botão Subir Item
-- Botão Descer Item

Verifica a posição do item antes de movê-lo*/
function verifyItemPosition(item) {
  for (let index = 0; index < taskList.childNodes.length; index += 1) {
    if (item.innerText === taskList.childNodes[index].innerText) {
      console.log(`${index} position`);
      return index;
    }
  }
}

/* Botão Subir Item: Reposiciona um item da lista para cima */
buttonMoveTaskUp.addEventListener('click', () => {
  const selctedItem = document.querySelector('.selected');
  if (selctedItem !== null) {
    const itemPosition = verifyItemPosition(selctedItem);
    if (itemPosition !== 0) {
      const currentItem = selctedItem.previousElementSibling;
      taskList.removeChild(selctedItem);
      currentItem.insertAdjacentElement('beforebegin', selctedItem);
    } else alert('Não é possível mover o ítem');
  }
});

/* Botão Descer Item: Reposiciona um item da lista para baixo */
buttonMoveTaskDown.addEventListener('click', () => {
  const selctedItem = document.querySelector('.selected');
  if (selctedItem !== null) {
    const itemPosition = verifyItemPosition(selctedItem);
    const elementsLi = document.getElementsByTagName('li');
    if (itemPosition !== elementsLi.length - 1) {
      const currentItem = selctedItem.nextElementSibling;
      taskList.removeChild(selctedItem);
      currentItem.insertAdjacentElement('afterend', selctedItem);
    } else alert('Não é possível mover o ítem');
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