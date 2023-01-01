//Import functions from the modules
import {
  addNewIngredient,
  backButton,
  deleteIngredient,
  saveDish,
} from "./Modules/forms.js";
import { carousel } from "./Modules/carousel.js";
import {
  changePage,
  changeMenuButtons,
  changeMode,
  showDishes,
  showSpecificDish,
  newDish,
} from "./Modules/mainPage.js";
import { loadMainPage } from "./Modules/common.js";
import { loadMore } from "./ajax.js";

//First Page Load
document.addEventListener("DOMContentLoaded", function () {
  //This is in order to change the mode
  let type = document.URL.slice(27);
  switch (type) {
    case "Vegano":
      changeMenuButtons("Vegano", "Normal", "Bebida");
      break;
      case "Normal":
      changeMenuButtons("Normal", "Vegano", "Bebida");
      break;
      case "Bebida":
      changeMenuButtons("Bebida", "Normal", "Vegano");
      break;
  }
  carousel();
});

//Window will let html use the functions
window.changePage = changePage;
window.carousel = carousel;
window.changeMenuButtons = changeMenuButtons;
window.changeMode = changeMode;
window.showDishes = showDishes;
window.showSpecificDish = showSpecificDish;
window.deleteIngredient = deleteIngredient;
window.newDish = newDish;
window.saveDish = saveDish;
window.backButton = backButton;
window.loadMainPage = loadMainPage;
window.addNewIngredient = addNewIngredient;
window.loadMore = loadMore;
