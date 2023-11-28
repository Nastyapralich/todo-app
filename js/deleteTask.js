import { updateAllCount } from './updateAllCount.js';
import { updateCompletedCount } from './updateCompletedCount.js';

export function deleteTask(krestik, list_item) {
  krestik.addEventListener('click', () => {
    krestik.parentElement.remove(list_item);
    let id = krestik.parentElement.id;
    console.log(id);
    let todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
    console.log(todos);
    todos.forEach((task, index) => {

      if (id == task.id) {
        todos.splice(index, index + 1);
        localStorage.setItem("todos", JSON.stringify(todos));
        list_item.classList.toggle("checked");
        updateAllCount();
        updateCompletedCount();
      }
    });

  });
}
