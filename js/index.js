import { setLS } from './setLS.js';
import { showTask } from './showTask.js';
import { updateAllCount } from './updateAllCount.js';
import { updateCompletedCount } from './updateCompletedCount.js';

const container = document.getElementById("root");
container.className = "container";

//хэдэр

const todoApp = document.createElement("div");
todoApp.className = "todo-app";
const title = document.createElement("h2");
title.innerHTML = "To-Do list";

todoApp.appendChild(title);

//кнопка add, input, кнопка delete
const main = document.createElement("div");
main.className = "main";
const btn_delete = document.createElement("button");
const btn_add = document.createElement("button");
export const input_task = document.createElement("input");
// const date = document.createElement("input");
const btn_deleteLast = document.createElement("button");

btn_delete.innerHTML = "Delete All";
btn_add.innerHTML = "Add Task";
btn_deleteLast.innerHTML = "Delete Last";

btn_add.id = "add";
btn_delete.id = "del";
btn_deleteLast.id = "delLast";

input_task.type = "text";
input_task.id = "task";
input_task.placeholder = "Enter your task...";

main.append(btn_add, input_task, btn_delete);
todoApp.append(main);

//список задач (в контейнере)

export const listContainer = document.createElement("ul");

listContainer.id = "list-container";

todoApp.append(listContainer);

//футер

const footer = document.createElement("div");
footer.classList = "footer";

export let a = document.createElement("span");
a.innerHTML = "All: ";
a.id = "all";

export let b = document.createElement("span");
b.innerHTML = "Complited: ";
b.id = "compl";

footer.append(a, b);

todoApp.appendChild(footer);

// последний блок с кнопками "Удалить последнюю" и ...

const footer_btn = document.createElement("div");
footer_btn.className = "last-buttons";

footer_btn.appendChild(btn_deleteLast);

todoApp.appendChild(footer_btn);

container.append(todoApp);



function taskTest(){
  let todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
  console.log(todos);
  todos.forEach(task => {
    showTask(task.id, task.text, task.data, task.isChecked);
  });
  updateAllCount() 
}


taskTest();

btn_add.addEventListener('click', setLS)


  btn_delete.addEventListener("click", function deleteTask() {
    while (listContainer.firstChild) {
      localStorage.clear();
      listContainer.removeChild(listContainer.firstChild);
      a.innerHTML = "All: " + listContainer.children.length;
      updateCompletedCount() 
    }
  });

  btn_deleteLast.addEventListener("click", function delLast() {
    listContainer.removeChild(listContainer.lastChild);
    a.innerHTML = "All: " + listContainer.children.length;
    let todos = JSON.parse(localStorage.getItem("todos"));
    todos.pop();
    updateCompletedCount() 
  });