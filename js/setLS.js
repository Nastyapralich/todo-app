import getTaskId from './getId.js';
import { showTask } from './showTask.js';
import { updateAllCount } from './updateAllCount.js';
import { input_task } from './index.js';

export function setLS() {

  const text = input_task.value;
  const idTask = getTaskId();
  let date1 = new Date();
  const date = date1.getDate() + "." + date1.getMonth() + "." + date1.getFullYear();
  const isChecked = false;

  const todo = {
    'id': idTask,
    'text': text,
    'data': date,
    'isChecked': isChecked
  };

  let todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));

  showTask(idTask, text, date, isChecked);
  updateAllCount();
}
