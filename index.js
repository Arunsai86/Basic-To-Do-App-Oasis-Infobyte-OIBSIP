let taskPreviewContainerEl = document.getElementById("taskPreviewContainer");
let addTodoListBtnEl = document.getElementById("addTodoList");

let todoList = []
let todoCount = 0

function onDeleteTodo(todoId) {
    let todoElement = document.getElementById(todoId);
    taskPreviewContainerEl.removeChild(todoElement);

    let deleteElementIndex = todoList.findIndex(function(eachTodo) {
        let eachTodoId = "todo" + eachTodo.id;
        if (eachTodoId === todoId) {
            return true;
        } else {
            return false;
        }
    });

    todoList.splice(deleteElementIndex, 1);
}

function createAndAppendTodo(todo){
    let todoId = "todo" + todo.id;

    let todoElement = document.createElement("li");
    todoElement.classList.add("list-container");
    todoElement.id = todoId;
    taskPreviewContainerEl.appendChild(todoElement);

    let titleEl = document.createElement("h1");
    titleEl.textContent = todo.title;
    titleEl.classList.add("title");
    todoElement.appendChild(titleEl);

    let descriptionEl = document.createElement("p");
    descriptionEl.textContent = todo.description;
    descriptionEl.classList.add("description");
    todoElement.appendChild(descriptionEl);

    let removeBtnEl = document.createElement("button");
    removeBtnEl.classList.add("remove-btn");
    removeBtnEl.textContent = "Remove";
    removeBtnEl.onclick = function() {
        onDeleteTodo(todoId)
    }
    todoElement.appendChild(removeBtnEl);
}

function addNewTodo() {
    let userInputTitleEl = document.getElementById("userInputTitle");
    let userInputDescriptionEl = document.getElementById("userInputDescription");
    let userTitle = userInputTitleEl.value;
    let userDescription = userInputDescriptionEl.value;

    if (userTitle === "" ){
        alert("Enter Title");
        return;
    }else if (userDescription === ""){
        alert("Enter Description");
        return
    }

    let newTodo = {
        id : todoCount,
        title : userTitle,
        description : userDescription
    }
    todoList.push(newTodo);
    todoCount += 1
    createAndAppendTodo(newTodo);
    userInputTitleEl.value = "";
    userInputDescriptionEl.value = "";

    
}

addTodoListBtnEl.onclick = function(){
    addNewTodo()
    // console.log(todoList)
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}