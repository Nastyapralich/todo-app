import { updateCompletedCount } from './updateCompletedCount.js';

export function checkTask(galka, id, list_item) {
  galka.addEventListener('click', () => {
    let todos = JSON.parse(localStorage.getItem("todos"));
    const newTodos = todos.map(todo => todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    list_item.classList.toggle("checked");
    updateCompletedCount();
  });
}
