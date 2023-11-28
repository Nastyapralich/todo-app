import { checkTask } from './checkTask.js';
import { deleteTask } from './deleteTask.js';
import { updateCompletedCount } from './updateCompletedCount.js';
import { listContainer, input_task } from './index.js';

export function showTask(id, text, date, isChecked) {

  const list_item = document.createElement('li');
  list_item.className = 'list-task';
  list_item.id = id;

  const textTaskContainer = document.createElement('p');
  const galka = document.createElement('span');
  galka.className = 'galochka';
  const krestik = document.createElement('span');
  krestik.className = 'Krestik';

  textTaskContainer.innerHTML = text;

  if (isChecked) {
    list_item.classList.add("checked");
  }

  let date_inf = document.createElement('span');
  date_inf.className = 'date';

  date_inf.innerHTML = date;



  list_item.append(galka, textTaskContainer, date_inf, krestik);
  listContainer.append(list_item);
  input_task.value = '';


  deleteTask(krestik, list_item);
  checkTask(galka, id, list_item);
  updateCompletedCount();
}
