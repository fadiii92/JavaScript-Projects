let tasksDiv = document.querySelector('.tasks');
let addButton = document.querySelector('#addTodoButton');
let todoInput = document.querySelector('#todo');
let delButton = document.querySelector('.DeleteSelected');

addButton.addEventListener('click', () => {
    let itemtext = todoInput.value;
    let task = document.createElement('div');
    let hr = document.createElement('hr');
    task.classList.add('task');
    task.innerHTML = ` <input type="checkbox" class="todoCheck"> <span class="toDoItemText">${itemtext}</span> <span class="cross">&#10060;</span>`;

    tasksDiv.appendChild(task);
    tasksDiv.appendChild(hr);

    
        let cross = task.querySelector('.cross');
        let checkbox = task.querySelector('.todoCheck');
        let itemElement = task.querySelector('.toDoItemText');


        cross.addEventListener('click', () => {
            let nextSibling = task.nextElementSibling;
            if (nextSibling.tagName === 'HR')
                nextSibling.remove();
            task.remove();

            updateSessionstorage();
        });

        checkbox.addEventListener('change', () => {
            if (checkbox.checked)
                itemElement.style.textDecoration = 'line-through';
            else
                itemElement.style.textDecoration = 'none';

        }); 
        updateSessionstorage()
});

delButton.addEventListener('click',()=>{
    let checkboxes = document.querySelectorAll('.todoCheck');
    checkboxes.forEach(element=>{
        if(element.checked)
            {
                let parent = element.parentElement
                
                parent.nextElementSibling.remove();
                parent.remove()
            }
    })
    updateSessionstorage()

})
function updateSessionstorage(){
    localStorage.setItem("Tasks",tasksDiv.innerHTML)
}
window.onload = ()=>{
    tasksDiv.innerHTML = localStorage.getItem("Tasks");

    document.querySelectorAll('.task').forEach(task=>{
        task.querySelector('.cross').addEventListener('click',()=>{
            let nextSibling = task.nextElementSibling;
            if (nextSibling.tagName === 'HR')
                nextSibling.remove();
            task.remove();
            
            updateSessionstorage()
        })

        let checkbox = task.querySelector('.todoCheck');
        let itemElement = task.querySelector('.toDoItemText');


        checkbox.addEventListener('change',()=>{
            if (checkbox.checked)
            itemElement.style.textDecoration = 'line-through';
        else
            itemElement.style.textDecoration = 'none';

        })
        updateSessionstorage()
    })
}

