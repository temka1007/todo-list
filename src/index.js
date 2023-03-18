import "normalize.css";
import "./style.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "date-fns";
import "./images/Reminders-icon.png";
import listInput from "./createList";
import checkingExistingList from "./listLoop";
import allPage from "./all";
import flaggedPage from "./flagged";
import completedPage from "./completed";
import assignedPage from "./assigned";
import scheduledPage from "./scheduled";
import todayPage from "./today";
import defaultListIndexLoop from "./defaultListIndex";

const content = document.querySelector(".todo-container");
const addListBtn = document.querySelector(".list-add");
const today = document.querySelector(".today");
const scheduled = document.querySelector(".scheduled");
const all = document.querySelector(".all");
const flagged = document.querySelector(".flagged");
const completed = document.querySelector(".completed");
const assigned = document.querySelector(".assigned");

function cleaner() {
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
}

addListBtn.addEventListener("click", () => {
  listInput();
  addListBtn.disabled = true;
});

today.addEventListener("click", () => {
  cleaner();
  todayPage();
});

scheduled.addEventListener("click", () => {
  cleaner();
  scheduledPage();
});

all.addEventListener("click", () => {
  cleaner();
  allPage();
});

flagged.addEventListener("click", () => {
  cleaner();
  flaggedPage();
});

completed.addEventListener("click", () => {
  cleaner();
  completedPage();
});

assigned.addEventListener("click", () => {
  cleaner();
  assignedPage();
});

checkingExistingList();
defaultListIndexLoop();
