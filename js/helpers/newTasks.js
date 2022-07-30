
const form = document.querySelector('.form_new_task');
form.addEventListener('submit', e => {
  e.preventDefault();
  const dataTask = e.target;

  const data = {
    title: dataTask.title_form.value,
    person: dataTask.responsible_task.value,
    details: dataTask.details.value,
    deadline: Number(moment().add(dataTask.post_time.value, 'days').format('X')),
    state: 'to-do',
    created: Number(moment().format('X')),
  };
  console.log(data);

  axios
    .post(`${API_URL}/tasks`, data)
    .then(response => {
      addTask(response.data);
      dataTask.reset();
    })
    .catch(error => {
      console.log(error);
    });
});
