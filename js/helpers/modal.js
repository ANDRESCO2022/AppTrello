const modalTasks = document.querySelect('#new_modal');
const newTasks = document.querySelect('.btn_create');
const cancelTasks = document.querySelect('.btn_reset');

newTasks.addEventListener('click',()=>{
modalTasks.classList.add('active')

})

cancelTasks.addEventListener('click',()=>{
    modalTasks.classList.remove('active')
})

