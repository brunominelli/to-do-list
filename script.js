// Constantes e Variáveis
// Seleção de elementos HTML
const buttonCreateTask = document.getElementById('criar-tarefa');
const elementTaskList = document.getElementById('lista-tarefas');
const elementTaksText = document.getElementById('texto-tarefa');

// Funções
function removeBackgroundcolor() {
    const elementLi = document.getElementsByTagName('li');
    for (let index = 0; index < elementLi.length; index += 1) {
        elementLi[index].style.backgroundColor = 'rgb(128, 128, 128)';
    }
}

buttonCreateTask.addEventListener('click', () => {
  if (elementTaksText.value) {
    const elementLi = document.createElement('li');
    elementLi.innerHTML = elementTaksText.value;
    elementTaskList.appendChild(elementLi);
    elementTaksText.value = '';
    elementLi.addEventListener('click', () => {
        if (elementLi.style.backgroundColor === '') {
            elementLi.style.backgroundColor = 'rgb(128, 128, 128)';
        } else if (elementLi.style.backgroundColor === 'rgb(128, 128, 128)') {
            elementLi.style.backgroundColor = '';
        }
    })
  } else alert('Erro: Insira uma tarefa!');
});

// Execução