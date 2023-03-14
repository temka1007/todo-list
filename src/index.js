import "normalize.css";
import "./style.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "date-fns";
import todoPage from "./todoPage";
import "./images/Reminders-icon.png"

// class TodoItem {
//   constructor(title, description) {
//     this.title = title;
//     this.description = description;
//     this.flagged = false;
//     this.completed = false;
//   }
// }

// function item(title, description) {
//   const test = new TodoItem(title, description);
//   localStorage.setItem(`${title}`, JSON.stringify(test));
// }


todoPage("Today", "blue")

