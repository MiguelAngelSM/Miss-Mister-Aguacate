//Import functions from the modules
import { carousel } from "./Modules/carousel.js";
import { changeMenuButtons} from "./Modules/functions.js";
import { changePage } from "./ajax.js";

//First Page Load
document.addEventListener("DOMContentLoaded", function () {
  //This is in order to change the mode
  let type = document.URL.slice(27); //
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