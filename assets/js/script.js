// set global variables for IDs
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// create function for click event listeners and allow inputs to be printed
var createTaskHandler = function() {
    event.preventDefault();

    // set local variables for submit form
    var taskNameInput = document.querySelector("input[id='task-name']").value;
    var taskTypeInput = document.querySelector("select[id='task-type']").value;
  
    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");

    // give it a class name
    taskInfoEl.className = "task-info";

    // add HTML content to div
    // use this div to hold li element
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

    listItemEl.appendChild(taskInfoEl);

    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);

}

// call function
formEl.addEventListener("submit", createTaskHandler);