let newTaskEle = document.querySelector(".addnewtask");
let popupDiv = document.querySelector('.popup');
let incompleteTasksDiv = document.querySelector('incompleteTasks');
let completedTasks = document.querySelector('completedTask');




newTaskEle.addEventListener('click',()=>{
    popupDiv.style.display = 'block';
})





function verify(){
    let AdminData = JSON.parse(localStorage.getItem("loginInfo"));
    let AdminMail = AdminData.mail;
    let AdminPasswor = AdminData.password;
    let enteredMail = document.querySelector('#email').value;
    let enteredpasswrod = document.querySelector('#pwd').value;

    if(AdminMail === enteredMail && AdminPasswor === enteredpasswrod)
        window.location.href = 'index.html';
    else
        alert('Invalid Mail or Password');

    }