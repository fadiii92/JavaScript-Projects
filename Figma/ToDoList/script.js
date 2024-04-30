let newTaskEle = document.querySelector(".addnewtask");
let popupDiv = document.querySelector('.popup');
let incompleteTasksDiv = document.querySelector('.incompleteTasks');
let completedTasks = document.querySelector('.completedTask');
let saveButton = document.querySelector('#save');
let cancelButton = document.querySelector('#cancel');
let newTaskSummary = document.querySelector('#summary');
let newTaskDescription = document.querySelector('#description');
let newTaskDueDate = document.querySelector('#duedate');
let reminderDiv = document.querySelector('.reminder');
let taskSkipButton = document.querySelector('.skip');
let taskRemindMeButton = document.querySelector('.remindMeLetter');
reminderDiv.style.display = 'none';


newTaskEle.addEventListener('click', () => {
    popupDiv.style.display = 'block';
})

window.onload = () => {
    incompleteTasksDiv.innerHTML = localStorage.getItem('incompleteTasks');
    completedTasks.innerHTML = localStorage.getItem('completedTask')

    incompleteCheckboxes = incompleteTasksDiv.querySelectorAll('.task');
    incompleteCheckboxes.forEach(element => {
        let currCheckbox = element.querySelector(".chekbox")
        currCheckbox.addEventListener('change', () => {
            if (currCheckbox.checked) {
                let summary = element.querySelector('.title').innerHTML;
                let currentSummary = summary;
                let checkedTask = document.createElement('div');
                checkedTask.classList.add('checkedTask');
                checkedTask.innerHTML = `<input type="checkbox" checked ><span class="chekcedtitle">${currentSummary}</span>`;
                completedTasks.appendChild(checkedTask);

                element.remove();
                updateLocalStorage();
            }
        })
    })
}

saveButton.addEventListener('click', () => {
    let summary = newTaskSummary.value;
    let description = newTaskDescription.value;
    let timevalue = newTaskDueDate.value;
    let date = timevalue.split('T')[0].substring(5, 11);
    let time = timevalue.split('T')[1].substring(0, 5);
    console.log(time, date);

    let newTask = document.createElement('div');
    newTask.classList.add('task');
    newTask.innerHTML = `   <input type="checkbox" class="chekbox">
    <div class="textspans">
    <span class="title">${summary}</span>
    <span class="time">⏰ <span class="dueDateSpan">${date}</span>,
     <span class="dueTimeSpan">${time}</span> 
     </span> </div><span class = "description" style = "display:none"`;

    popupDiv.style.display = 'none';
    incompleteTasksDiv.appendChild(newTask);

    let currentCheckbox = newTask.querySelector('.chekbox');
    currentCheckbox.addEventListener('change', () => {
        if (currentCheckbox.checked) {
            let currentSummary = summary;
            let checkedTask = document.createElement('div');
            checkedTask.classList.add('checkedTask');
            checkedTask.innerHTML = `<input type="checkbox" checked ><span class="chekcedtitle">${currentSummary}</span>`;
            completedTasks.appendChild(checkedTask);

            newTask.remove();
            updateLocalStorage();

        }
    })



    newTaskSummary.value = '';
    newTaskDescription.value = '';
    newTaskDueDate.value = '';


    updateLocalStorage();

})



cancelButton.addEventListener('click', () => {
    newTaskSummary.value = '';
    newTaskDescription.value = '';
    newTaskDueDate.value = '';
    popupDiv.style.display = 'none';
})





function verify() {
    let AdminData = JSON.parse(localStorage.getItem("loginInfo"));
    let AdminMail = AdminData.mail;
    let AdminPasswor = AdminData.password;
    let enteredMail = document.querySelector('#email').value;
    let enteredpasswrod = document.querySelector('#pwd').value;

    if (AdminMail === enteredMail && AdminPasswor === enteredpasswrod)
        window.location.href = 'index.html';
    else
        alert('Invalid Mail or Password');

}
function updateLocalStorage() {
    localStorage.setItem('incompleteTasks', incompleteTasksDiv.innerHTML)
    localStorage.setItem('completedTask', completedTasks.innerHTML);
}



//Handling reminder;
let allTaskForReminder = document.querySelectorAll(".task");
let currenDate = new Date();
let date = `${currenDate.getMonth() + 1}-${currenDate.getDate()}`;
let time = `${currenDate.getHours}:${currenDate.getMinutes()}`;
let seconds = currenDate.getSeconds();
console.log(currenDate);
allTaskForReminder.forEach(ele => {
    let taskTime = ele.querySelector('.dueTimeSpan');
    let taskDate = ele.querySelector('.dueDateSpan');

    if (date === taskDate && (time === taskTime || time > taskTime)) {
        reminderDiv.querySelector('.summary').innerHTML = ele.querySelector('.title').innerHTML;
        reminderDiv.querySelector('.description').innerHTML = ele.querySelector('.description');
        
        reminderDiv.style.display = 'block';
    }
    

});

taskSkipButton.addEventListener('click', () => {
    reminderDiv.style.display = 'none';
});
reminderDiv.addEventListener('click', () => {
    reminderDiv.style.display = 'none';
    setTimeout(() => {
        reminderDiv.style.display = 'block'
    }, 4000);
})