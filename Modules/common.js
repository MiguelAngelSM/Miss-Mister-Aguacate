//Imports from other modules
import { changeMenuButtons, showDishes, updateArrows } from "./mainPage.js";
import { dishes } from "./dish.js";

//Functions of this module
export function showIngredientsList(key, printIngredient) {
  //Print the ingredients list with all the elements from the list got from the dish got from the key
  //printIngredient will be a function that will decide how each ingredient will be printed

  let dish = dishes.get(key);
  let ingredients = dish.getAtributes();
  for (let i=0;i<ingredients.length;i++){
    printIngredient(ingredients[i], i);
  };
}

export function loadMainPage() {
  //It load the page 0 from the normal mode and will show again the display and the reviews hidden 
  //when change to other part of the page

  let e = document.getElementById("Menu");
  e.style.display = "block";
  e = document.getElementById("Display");
  e.style.display = "flex";
  e = document.getElementById("Reviews");
  e.style.display = "flex";

  e = document.getElementById("Form");
  e.style.display = "none";
  e = document.getElementById("InfoDish");
  e.style.display = "none";

  showDishes(0, "N");
  updateArrows("N", 0);
  changeMenuButtons("Normal", "Vegan", "Drink");
}
