import { modifyDish,newDish } from "./functions.js";

document.addEventListener("DOMContentLoaded", function () {
  //The URL will have the word create when it creates a new dish but if it is modifying it would not have it
  if (document.URL.includes("create")) {
    newDish();
  }else{
    modifyDish();
  }
});