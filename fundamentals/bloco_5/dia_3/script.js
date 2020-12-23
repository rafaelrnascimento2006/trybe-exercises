window.onload = function() {
  createDaysOfTheWeek(['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']);
  createDaysOfTheMonth([29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]);
  createHolidayButton('Feriados');
  createFridayButton('Sexta-feira');

  const holidayButton = document.querySelector('#btn-holiday');
  holidayButton.addEventListener('click', displayHolidays);
  const fridayButton = document.querySelector('#btn-friday');
  fridayButton.addEventListener('click', displayFridays);

  const days = document.querySelector('#days');
  days.addEventListener('mouseover', dayMouseOver);
  days.addEventListener('mouseout', dayMouseOut);
  days.addEventListener('click', setDayColor);

  taskSpan('do the to-do');
  taskDiv('green');

  const myTasks = document.querySelector('.task');
  myTasks.addEventListener('click', setTaskClass);
};

function createDaysOfTheWeek(weekDaysArray) {
  const weekDaysList = document.querySelector('.week-days');

  for (let element of weekDaysArray) {
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = element;

    weekDaysList.appendChild(dayListItem);
  };
};

function createDaysOfTheMonth(daysArray) {
  const daysList = document.querySelector('#days');

  for (let day of daysArray) {
    const dayItem = document.createElement('li');
    dayItem.className = 'day';
    dayItem.innerText = day;

    if (day === 24 | day === 25 |day === 31) {
      dayItem.className += ' holiday';
    };
    if (day === 4 | day === 11 | day === 18 | day === 25) {
      dayItem.className += ' friday';
    };

    daysList.appendChild (dayItem);
  };
;}

function createHolidayButton(buttonName) {
  const buttonContainer = document.querySelector('.buttons-container');
  const button = document.createElement('button');

  button.innerHTML = buttonName;
  button.id = 'btn-holiday';
  buttonContainer.appendChild(button);
};

function displayHolidays() {
  const holidays = document.querySelectorAll('.holiday')
  const backgroundColor = 'rgb(238,238,238)';

  for (let element of holidays) {
    if (element.style.backgroundColor === 'white') {
      element.style.backgroundColor = backgroundColor;
    } else {
      element.style.backgroundColor = 'white';
    };
  };
};

function createFridayButton(string) {
  const buttonContainer = document.querySelector('.buttons-container');
  const button = document.createElement('button');

  button.innerHTML = string;
  button.id = 'btn-friday';
  buttonContainer.appendChild(button);
};

function displayFridays() {
  const fridays = document.getElementsByClassName('friday');
  fridaysArray = [4, 11, 18, 25];

  for (let key in fridays) {
    if (fridays[key].innerHTML !== 'Sextou!') {
        fridays[key].innerHTML = 'Sextou!';
    } else {
        fridays[key].innerHTML = fridaysArray[key];
      };
    };
};

function dayMouseOver(day) {
  day.target.style.fontSize = '30px';
  day.target.style.fontWeight = '600';
};

function dayMouseOut(day) {
  day.target.style.fontWeight = '200';
  day.target.style.fontSize = '20px';
};

function taskSpan(string) {
  const tasksContainer = document.querySelector('.my-tasks');
  const task = document.createElement('span');

  task.innerHTML = string;
  tasksContainer.appendChild(task);
};

function taskDiv(color) {
  const tasksContainer = document.querySelector('.my-tasks');
  const task = document.createElement('div');

  task.className = 'task';
  task.style.backgroundColor = color;
  tasksContainer.appendChild(task);
};

function setTaskClass(task) {
  const selectedTask = document.getElementsByClassName('task selected');

  if (selectedTask.length === 0) {
    task.target.className = 'task selected';
  } else {
    task.target.className = 'task';
  };
};

function setDayColor(day) {
  const selectedTask = document.getElementsByClassName('task selected');
  const taskDiv = document.querySelector('.task');
  const taskColor = taskDiv.style.backgroundColor;
  const dayColor = day.target.style.color

  if (selectedTask.length > 0 && dayColor !== taskColor) {
    day.target.style.color = selectedTask[0].style.backgroundColor;
  } else if (dayColor === taskColor && selectedTask.length !== 0) {
    day.target.style.color = 'rgb(119,119,119)';
  };
};
