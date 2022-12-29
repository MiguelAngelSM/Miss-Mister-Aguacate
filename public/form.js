import { modifyDish } from "./Modules/infoPage.js";
import {
  changePage,
  changeMenuButtons,
  changeMode,
  showDishes,
  showSpecificDish,
  newDish,
} from "./Modules/mainPage.js";
document.addEventListener("DOMContentLoaded", function () {
    console.log(document.getElementById("FormImage").src);
  if (document.getElementById("FormImage").src === "http://localhost:3000/") {
    newDish();
  }else{
    modifyDish();
  }
});
