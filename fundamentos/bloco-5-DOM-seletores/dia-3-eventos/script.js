function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  // 1

  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  function decemberDays(){
    let listaDias = document.querySelector('#days');
    for (let i = 0; i < decemberDaysList.length; i += 1){
        let day = decemberDaysList[i];
        let dayItem = document.createElement('li');
        dayItem.innerHTML = day;
        if (day === 24 || day === 31) {
            dayItem.className = 'day holiday';
            listaDias.appendChild(dayItem); 

          } else if (day === 4 || day === 11 || day === 18) {
            dayItem.className = 'day friday'; // Atribua a classe 'day friday' ao li criado
            listaDias.appendChild(dayItem);

          } else if (day === 25) {
            dayItem.className = 'day holiday friday';
            listaDias.appendChild(dayItem);
          } else {
            dayItem.className = 'day';
            listaDias.appendChild(dayItem);
        }
    }
}
decemberDays();

 // 2 

 function createHolidayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-holiday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  
  buttonContainer.appendChild(newButton);
}
createHolidayButton('Feriados');

 // 3

function mudaDeCor (){
  let button = document.querySelector('#btn-holiday')
  let feriados = document.querySelectorAll('.holiday');

  for (let i = 0; i < feriados.length; i+= 1){
  if(feriados[i].style.backgroundColor === 'pink') {
    feriados[i].style.backgroundColor = 'rgb(238,238,238)'
  } else {
    feriados[i].style.backgroundColor = 'pink'
  }
}
button.addEventListener('click', mudaDeCor);
}
mudaDeCor();

 //4 

 function buttonFriday (buttonName){
  let botao = document.querySelector('.buttons-container'); 
  let newBotao = document.createElement('button');
  newBotao.id = 'btn-friday';
  newBotao.className = 'buttons-container';
  newBotao.innerHTML = buttonName;
  botao.appendChild(newBotao);
  
 }

 buttonFriday('Sexta-feira');

 // 5 

 function displayFridays(fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newFridayText = 'SEXTOU o/';

  getFridayButton.addEventListener('click', function() {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
    } else {
        fridays[index].innerHTML = fridaysArray[index];
    }
  }});
}
let decemberFridays = [ 4, 11, 18, 25 ];
displayFridays(decemberFridays);

// 6

function dayMouseOver() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '50px';
    event.target.style.fontWeight = '600'; 
  });
}

function dayMouseOut() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  });
}
dayMouseOver();
dayMouseOut();

// 7 

function newTaskSpan(task) {
  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName); 
}

newTaskSpan('projeto');

// 8 
function newTaskDiv(color) {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
}
newTaskDiv('green');

// 9 

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');
  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
}
setTaskClass();

10 // 
function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor; 
      event.target.style.color = color; 
    } else if (eventTargetColor === taskColor) {
      event.target.style.color = 'rgb(119,119,119)'; 
    }
  });
}
setDayColor();

// bonus

function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  });

  getInputField.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
}

addNewTask();