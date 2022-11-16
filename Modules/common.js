//Imports from other modules
import { changeMenuButtons, showDishes, updateArrows } from "./mainPage.js";
import { dishes } from "./dish.js";

//Functions of this module
export function backToMenu() {
  //Hide the Form and return to the normal mode page 0 (default page)
  
  let e = document.getElementById("Menu");
  e.style.display = "block";
  showDishes(0, "N");
  updateArrows("N", 0);
  changeMenuButtons("Normal", "Vegan", "Drink");

  document.getElementById("Name").value = "";
  document.getElementById("Price").value = "";
  document.getElementById("Description").value = "";
  document.getElementById("Ingredient").value = "";
  e = document.getElementById("Form");
  e.style.display = "none";
}

export function showIngredientsList(key, printIngredient) {
  //Delete the previous list and make it again with all the elements from the list got from the dish got from the key
  
  let dish = dishes.get(key);
  let ingredients = dish.getAtributes();
  let e = document.getElementById("IngredientsList");
  e.innerHTML = ``;
  ingredients.forEach((i) => printIngredient(i, key));
}
