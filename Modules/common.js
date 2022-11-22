//Imports from other modules
import { changeMenuButtons, showDishes, updateArrows } from "./mainPage.js";
import { dishes } from "./dish.js";

//Functions of this module
export function backToMenu() {
  //Hide the Form and return to the normal mode page 0 (default page)
  
  loadMainPage();

  document.getElementById("Name").value = "";
  document.getElementById("Price").value = "";
  document.getElementById("Description").value = "";
  document.getElementById("Ingredient").value = "";
  let e = document.getElementById("Form");
  e.style.display = "none";
}

export function showIngredientsList(key, printIngredient) {
  //Delete the previous list and make it again with all the elements from the list got from the dish got from the key
  
  let dish = dishes.get(key);
  let ingredients = dish.getAtributes();
  ingredients.forEach((i) => printIngredient(i, key));
}

export function loadMainPage(){
  let e = document.getElementById("Menu");
  e.style.display = "block";
  e = document.getElementById("Display");
  e.style.display = "block";
  e = document.getElementById("Reviews");
  e.style.display = "block";
  showDishes(0, "N");
  updateArrows("N", 0);
  changeMenuButtons("Normal", "Vegan", "Drink");
}
