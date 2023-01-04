import './styles/styles.css';

const taskInput = document.getElementById('task');
const displayField = document.getElementById('display');
const btnElmt = document.getElementById('add');

function addTask(input = taskInput.value) {
  const taskArray = [];
  taskArray.push(input);
  return input;
}

function display() {
  displayField.innerHTML += `<li>${addTask()}</li>`;
}

btnElmt.addEventListener('click', () => {
  display(taskInput);
  taskInput.value = '';
});
