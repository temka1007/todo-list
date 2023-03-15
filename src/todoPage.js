import "normalize.css";
import "./style.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "date-fns";

export default function todoPage(pageName) {
  const todoContainer = document.querySelector(".todo-container");

  // .todo-container > button div*2
  const addTodoBtn = document.createElement("button");
  const name = document.createElement("div");
  const todoList = document.createElement("div");

  addTodoBtn.classList.add("add-btn");
  name.classList.add("name");
  todoList.classList.add("todo-list");

  addTodoBtn.innerHTML += '<span class="material-symbols-outlined"> add</span>';

  todoContainer.append(addTodoBtn, name, todoList);

  // name > div*2
  const listName = document.createElement("div");
  const numberOfItem = document.createElement("div");

  listName.classList.add("todo-list-name");
  numberOfItem.classList.add("todo-number-of-item");

  listName.textContent = `${pageName}`;
  numberOfItem.textContent = "0";

  name.append(listName, numberOfItem);
}
