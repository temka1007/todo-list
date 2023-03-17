import "normalize.css";
import "./style.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "date-fns";
import "./images/Reminders-icon.png";
import listInput from "./createList";
import checkingExistingList from "./listLoop";
import allPage from "./all";

const content = document.querySelector(".todo-container");

function cleaner() {
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
}

const addListBtn = document.querySelector(".list-add");
const today = document.querySelector('.today');
const scheduled = document.querySelector('.schedule');
const all = document.querySelector('.all');
const flagged = document.querySelector('.flagged');
const completed = document.querySelector('.completed'); 
const assigned = document.querySelector('.assigned');

addListBtn.addEventListener("click", () => {
  listInput();
  addListBtn.disabled = true;
});

all.addEventListener("click", () => {
  cleaner()
  allPage()
})

checkingExistingList();
