const inputBox = document.getElementById("input-box");
const taskBox = document.getElementById("task-box");

function addTask(){
    if(inputBox.value === ''){
        alert("Kindly add a task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskBox.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

taskBox.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData(){
    localStorage.setItem("data", taskBox.innerHTML);
}
function showTask(){
    taskBox.innerHTML = localStorage.getItem("data");
}
showTask();