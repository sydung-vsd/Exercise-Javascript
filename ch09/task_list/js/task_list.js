"use strict"

var $ = function(id){
    return document.getElementById(id);
}
var tasks = [];
var sortDirection = 'ASC';
var displayTaskList = function(){
    var list = '';
    if(tasks.length === 0){
        var storage = localStorage.getItem("tasks") || "";
        
        if(storage.length > 0){
           tasks = storage.split("|");
        }
    }

    if(tasks.length > 0){
        tasks.sort();
        list = tasks.join("\n");
    }
    $("mary_task").value = list;
    $("task").focus();
}

var importantTasks = function (element) {
    if (element.toLowerCase().indexOf('important!') !== -1) {
        return true;
    }
    return false;
}

var addToTaskList = function(){
    var task = $("task");
    if(task.value == ""){
        alert("please enter a task.");
    }
    else {
        tasks.push(task.value);
        localStorage.tasks = tasks.join("|");
        task.value = "";
        displayTaskList();
    }
}

var deleteTask = function (){
    if(tasks.length === 0){
        alert ('Tasks list empty!');
        return;
    }
    var taskID = prompt('Enter the order number of the task to be deleted!');
    if(isNaN(taskID) || taskID <= 0|| taskID >  tasks.length){
        alert("Please re-enter number 1 -> " + tasks.length);
        return;
    }
    var confirm = window.confirm(`Are you wan to remove tasks #${taskID}?`);
    if(!confirm){
        return;
    }
    tasks.splice(taskID-1,1);
    localStorage.tasks = tasks.join("|");
    $("task").value = "";
    displayTaskList();
}

var clearTaskList = function () {
    var confirm = window.confirm('Are you sure you want to delete all tasks?');
    if (!confirm) {
        return;
    }
    tasks.length = 0;
    localStorage.removeItem("tasks");
    $("mary_task").value = "";
    $("task").focus();
};

var toggleSort = function () {
    sortDirection = sortDirection === 'ASC' ? 'DESC' : 'ASC';
    displayTaskList();
}
var setName = function () {
    var user = prompt('User Name:');
    if (user !== null && user !== '') {
        sessionStorage.user = user;
    }
    displayTaskList();
}

var filterTasks = function () {
    var filter = tasks.filter(function (task) {
        return importantTasks(task)
    });
    $("mary_task").value = filter.join("\n");
}
window.onload = function () {
    $('task_left').onsubmit = function (e) {
        e.preventDefault();
        addToTaskList();
    }
    $("add_task").onclick = addToTaskList;
    $("clear_task").onclick = clearTaskList;
    $('delete_task').onclick = deleteTask;
    $('toggle_sort').onclick = toggleSort;
    $('set_name').onclick = setName;
    $('filter_task').onclick = filterTasks;
    displayTaskList();
};