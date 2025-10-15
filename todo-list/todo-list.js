let newTask = document.querySelector('.task-ip')
let taskList = document.querySelector('.task-list')
let pending = document.querySelectorAll('.pending-task')
let taskcontainer

(function loadlocalstorage(){
    if(localStorage.getItem('alltasks'))
    {
        taskList.innerHTML = localStorage.getItem('alltasks')
        addclickevent()
    }
})()

function appendTask()
{
    taskList.innerHTML+=`<li class="pending-task">${newTask.value}</li>`
    addclickevent()
    localStorage.setItem('alltasks',[taskList.innerHTML])
}

function strike(e)
{
    e.target.innerHTML = `<Strike>${e.target.innerHTML}</Strike>`
    e.target.classList.remove('pending-task')
    localStorage.setItem('alltasks',[taskList.innerHTML])
}

function filterTask()
{
    taskList.classList.toggle('filtered')
    if(taskList.classList.contains('filtered'))
    {
        for(let task of taskList.childNodes)
        {
            console.log(task)
            if(!task.classList.contains('pending-task'))
            {
                task.style.display = 'none'
            }
        }
    }
    else{
        for(let task of taskList.childNodes)
        {
            task.style.display = ''
        }
    }
    addclickevent()
    localStorage.setItem('alltasks',[taskList.innerHTML])
}

function addclickevent()
{
    document.querySelectorAll(`.pending-task`).forEach(element => {
        element.addEventListener('click',(e)=>strike(e))
    });
}