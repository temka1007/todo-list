import "normalize.css";
import "./style.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "date-fns";
import todoPage from "./todoPage";
import todoLoop from "./todoLoop";
import defaultListIndexLoop from "./defaultListIndex";

const content = document.querySelector(".todo-container");

function cleaner() {
  while (content.firstChild) {
    content.removeAttribute("id")
    content.removeChild(content.lastChild);
  }
}

function cantCreateSameNamedFolder() {
  content.setAttribute("id", "warning");
  content.textContent = "warning";
}

function sameNameChecker(input) {
  const list = document.querySelector(".list-names");

  for (let i = 0; i < list.children.length - 1; i += 1) {
    const div = document.querySelector(
      `.list-names > div:nth-child(${i + 1}) .list-logo + div `
    ).innerText;
    const name = input;
    if (div === name) {
      cantCreateSameNamedFolder();
      list.removeChild(list.lastChild);
    }
  }
}

function confirm(input) {
  const list = document.querySelector(".list-names");

  const div = document.createElement("div");

  list.appendChild(div);

  // .list > div > div*3 button
  const listLogo = document.createElement("div");
  const inputContainer = document.createElement("form");

  inputContainer.setAttribute("action", "post");

  listLogo.classList.add("list-logo");
  inputContainer.classList.add("input-container");

  listLogo.innerHTML += '<span class="material-symbols-outlined"> list </span>';

  const listName = document.createElement("div");
  const numberOfItem = document.createElement("div");
  const deleteBtn = document.createElement("button");

  numberOfItem.classList.add("number-of-item");
  numberOfItem.setAttribute("id", `${input}`)

  listName.textContent = input;

  const array = JSON.parse(localStorage.getItem(input));
  numberOfItem.textContent = `${array.length}`;
  deleteBtn.innerHTML +=
    '<span class="material-symbols-outlined"> delete </span>';

  div.append(listLogo, listName, numberOfItem, deleteBtn);

  sameNameChecker(input);

  div.addEventListener("click", (e) => {
     // if prevents from double clicking on div when you are clicking deleteBtn
    if(!(e.target.classList.value === "material-symbols-outlined")){
      cleaner()
      todoPage(input);
      todoLoop(input);
    }
  }); 

  deleteBtn.addEventListener("click", (e) => {
    cleaner();
    const element = e.target.parentElement.parentElement;
    list.removeChild(element);
    localStorage.removeItem(input);
    defaultListIndexLoop()
  });
  
} 

export default function checkingExistingList() {
  for (let i = 0; i < localStorage.length; i += 1) {
    const array = localStorage.key(i);  
    confirm(array);
  }
}
