// Constantes e Variáveis
const buttonCreateTask = document.getElementById('criar-tarefa');
const elementTaskList = document.getElementById('lista-tarefas');
const elementTaksText = document.getElementById('texto-tarefa');

console.log(buttonCreateTask);
console.log(elementTaksText);
console.log(elementTaskList);
// Funções

buttonCreateTask.addEventListener('click', () => {
  const elementLi = document.createElement('li');
  elementLi.innerHTML = elementTaksText.value;
  elementTaskList.appendChild(elementLi);
  elementTaksText.value = '';
});
// Execução