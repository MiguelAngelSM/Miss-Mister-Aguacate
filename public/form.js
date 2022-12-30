import { modifyDish } from "./Modules/infoPage.js";
import {
  newDish,
} from "./Modules/mainPage.js";
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("FormImage").src === "http://localhost:3000/") {
    newDish();
  }else{
    modifyDish();
  }
});
