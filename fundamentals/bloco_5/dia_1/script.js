let container = document.querySelector("#container");
let headerContainer = document.querySelector("#header-container");
let emergencyTasksDiv = document.querySelectorAll(".emergency-tasks div");
let emergencyTasksHeader = document.querySelectorAll(".emergency-tasks h3");
let noEmergencyTasksDiv = document.querySelectorAll(".no-emergency-tasks div");
let noEmergencyTasksHeader = document.querySelectorAll(".no-emergency-tasks h3");
let footerContainer = document.querySelector("#footer-container");

function changeElementBackgroundColor (element, color) {
  for (let key of element) {
    key.style.backgroundColor = color;
  }
}

container.style.backgroundColor = '#F3F3F3';
headerContainer.style.backgroundColor = '#00B069';
footerContainer.style.backgroundColor = '#003533';
changeElementBackgroundColor(emergencyTasksDiv, '#FF9F84');
changeElementBackgroundColor(emergencyTasksHeader, '#A500F3');
changeElementBackgroundColor(noEmergencyTasksDiv, '#F9DB5E');
changeElementBackgroundColor(noEmergencyTasksHeader, '#232525');
