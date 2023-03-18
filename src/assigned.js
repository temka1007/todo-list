import "normalize.css";
import "./style.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "date-fns";

export default function assignedPage() {
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

  listName.textContent = "Assigned";

  numberOfItem.textContent = `${todoList.childElementCount}`;

  numberOfItem.style.color = "rgb(16, 177, 16)";
  listName.style.color = "rgb(16, 177, 16)";

  name.append(listName, numberOfItem);
}
