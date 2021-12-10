// Constantes e Variáveis
const buttonCreateTask = document.getElementById('criar-tarefa');
const elementTaskList = document.getElementById('lista-tarefas');
const elementTaksText = document.getElementById('texto-tarefa');

console.log(buttonCreateTask);
console.log(elementTaksText);
console.log(elementTaskList);
// Funções
function createTask() {
  buttonCreateTask.addEventListener('click', () => {
    if (elementTaksText.value) {
      const elementLi = document.createElement('li');
      elementLi.innerHTML = elementTaksText.value;
      elementTaskList.appendChild(elementLi);
      elementTaksText.value = '';
    } else alert('Erro: Insira uma tarefa!');
  });
}
// Execução
createTask();