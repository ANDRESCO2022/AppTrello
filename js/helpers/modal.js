const modalTasks = document.querySelector('#new_modal');
const newTasks = document.querySelector('.btn_create');
const cancelTasks = document.querySelector('.btn_reset');

newTasks.addEventListener('click',()=>{
modalTasks.classList.add('active')

})

cancelTasks.addEventListener('click',()=>{
    modalTasks.classList.remove('active')
})

