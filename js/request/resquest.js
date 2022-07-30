const API_URL =
  'https://my-json-server.typicode.com/ANDRESCO2022/M3U2TrelloAppANDRESCO';

axios
  .get(`${API_URL}/tasks`)
  .then(response => allTasksResponse(response.data))
  .catch(error => console.error(error));

const allTasksResponse = data => {
  data.map(task => addTask(task));
};

const addTask = task => {
  let newTasks = document.createElement('article');
  newTasks.classList.add('card_task');
  let titleTask = document.createElement('h3');
  titleTask.classList.add('card_title');
  titleTask.innerText = task.title;
  let responibleTask = document.createElement('p');
  responibleTask.classList.add('card_person');
  responibleTask.innerText = `Responsable: ${task.person}`;
  let detailTask = document.createElement('P');
  detailTask.classList.add('card_detail');
  detailTask.innerHTML = `<span>${task.details}</span> </span>`;
  let createdTask = document.createElement('p');
  createdTask.innerHTML = `<div> Entrega: ${dateFormat(
    task.created
  )}</div>`;
  let taskDate = document.createElement('p');
  taskDate.innerHTML = `<div > Creado: ${dateFormat(
    task.deadline
  )}</div>`;

  newTasks.appendChild(titleTask);
  newTasks.appendChild(responibleTask);
  newTasks.appendChild(detailTask);
  newTasks.appendChild(taskDate);
  newTasks.appendChild(createdTask);

  let toDoTask = document.querySelector('#tasks_asing');
  let processTask = document.querySelector('#tasks_process');
  let finishTask = document.querySelector('#tasks_finished');
  if (task.state === 'to-do') {
    toDoTask.appendChild(newTasks);
  }
  if (task.state === 'process') {
    processTask.appendChild(newTasks);
  }
  if (task.state === 'done') {
    finishTask.appendChild(newTasks);
  }
};
