import { modifyDish,newDish, } from "./Modules/functions.js";
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("FormImage").src === "http://localhost:3000/") {
    newDish();
  }else{
    modifyDish();
  }
});