import "normalize.css";
import "./style.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "date-fns";
import { confirm } from "./todoLoop";

export default function allPage() {
  const todoContainer = document.querySelector(".todo-container");

  // .todo-container > button div*2
  const addTodoBtn = document.createElement("button");
  const name = document.createElement("div");
  const todoList = document.createElement("div");

  addTodoBtn.classList.add("add-btn");
  todoList.classList.add("todo-list");

  todoContainer.append(addTodoBtn, name, todoList);

  // name > div*2
  const listName = document.createElement("div");
  const numberOfItem = document.createElement("div");

  listName.classList.add("todo-list-name");
  numberOfItem.classList.add("todo-number-of-item");

  listName.textContent = "All";

  numberOfItem.style.color = "black";
  listName.style.color = "black";

  for (let i = 0; i < localStorage.length; i += 1) {
    const listNameAll = localStorage.key(i);
    const array = JSON.parse(localStorage.getItem(listNameAll));
    for (let x = 0; x < array.length; x += 1) {
      confirm(
        array[x].note,
        array[x].scheduled,
        array,
        array[x].id,
        listNameAll,
        x,
        "yes"
      );
    }
  }

  numberOfItem.textContent = `${todoList.childElementCount}`;

  name.append(listName, numberOfItem);
}
