import "normalize.css";
import "./style.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "date-fns";

export default function defaultListIndexLoop() {
  const today = document.querySelector(".today .number-of-item-inside");
  const scheduled = document.querySelector(".scheduled .number-of-item-inside");
  const all = document.querySelector(".all .number-of-item-inside");
  const flagged = document.querySelector(".flagged .number-of-item-inside");
  const completed = document.querySelector(".completed .number-of-item-inside");

  let todayIndex = 0;
  let scheduledIndex = 0;
  let allIndex = 0;
  let flaggedIndex = 0;
  let completedIndex = 0;

  // today
  let thisDay = new Date();
  thisDay = thisDay.toISOString().slice(0, 10);

  for (let i = 0; i < localStorage.length; i += 1) {
    const listNameAll = localStorage.key(i);
    const array = JSON.parse(localStorage.getItem(listNameAll));
    for (let x = 0; x < array.length; x += 1) {
      if (array[x].scheduled === thisDay) {
        todayIndex += 1;
      }
    }
  }

  today.textContent = todayIndex;

  // scheduled 
  for (let i = 0; i < localStorage.length; i += 1) {
    const listNameAll = localStorage.key(i);
    const array = JSON.parse(localStorage.getItem(listNameAll));
    for (let x = 0; x < array.length; x += 1) {
      if (array[x].scheduled !== undefined) {
        scheduledIndex += 1;
      }
    }
  }

  scheduled.textContent = scheduledIndex;

  // all
  for (let i = 0; i < localStorage.length; i += 1) {
    const listNameAll = localStorage.key(i);
    const array = JSON.parse(localStorage.getItem(listNameAll));
    for (let x = 0; x < array.length; x += 1) {
      allIndex += 1;
    }
  }

  all.textContent = allIndex;

  // flagged
  for (let i = 0; i < localStorage.length; i += 1) {
    const listNameAll = localStorage.key(i);
    const array = JSON.parse(localStorage.getItem(listNameAll));
    for (let x = 0; x < array.length; x += 1) {
      if (array[x].flagged) {
        flaggedIndex += 1;
      }
    }
  }

  flagged.textContent = flaggedIndex;

  // completed
  for (let i = 0; i < localStorage.length; i += 1) {
    const listNameAll = localStorage.key(i);
    const array = JSON.parse(localStorage.getItem(listNameAll));
    for (let x = 0; x < array.length; x += 1) {
      if (array[x].completed) {
        completedIndex += 1;
      }
    }
  }

  completed.textContent = completedIndex;
}
