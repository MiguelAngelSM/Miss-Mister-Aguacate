//Imports from other modules
import { changeMenuButtons, showDishes, updateArrows } from "./mainPage.js";
import { dishes } from "./dish.js";

//Functions of this module
export function backToMenu() {
  //Hide the Form and return to the default page (normal mode page 0)

  loadMainPage();
  let e = document.getElementById("Form");
  e.style.display = "none";
}

export function showIngredientsList(key, printIngredient) {
  //Delete the previous list and make it again with all the elements from the list got from the dish got from the key
  //printIngredient will be a function that will decide how each ingredient will be printed

  let dish = dishes.get(key);
  let ingredients = dish.getAtributes();
  for (let i=0;i<ingredients.length;i++){
    printIngredient(ingredients[i], key, i)
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
  e.style.display = "block";
  showDishes(0, "N");
  updateArrows("N", 0);
  changeMenuButtons("Normal", "Vegan", "Drink");
}
