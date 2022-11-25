//Imports from other modules
import { dishes, Dish } from "./dish.js";
import { modifyDish } from "./forms.js";
import { showIngredientsList, loadMainPage } from "./common.js";
//Functions of this module

export function updateInfoScreen(key) {
  //This function will update the info menu with the dish get from the key
  //It will also update the buttons

  let dish = dishes.get(key);
  let e = document.getElementById("InfoPhoto");
  e.innerHTML = `<img id="InfodishImage" class="img-responsive" src="${dish.getImg()}">`;

  e = document.getElementById("infoDishName");
  e.innerHTML = `${dish.getName()}`;

  e = document.getElementById("infoDishPrice");
  e.innerHTML = `${dish.getPrice()}€`;

  e = document.getElementById("infoDishDescription");
  e.innerHTML = `${dish.getDescription()}`;

  e = document.getElementById("infoDishIngredientsList");
  e.innerHTML = ``;
  showIngredientsList(key, printIngredient);

  e = document.getElementById("DeleteButton");
  e.onclick=function() {deleteDish(key)};

  e = document.getElementById("ModifyButton");
  e.onclick=function() {modifyDish(key)};
  
}

export function printIngredient(ingredient) {
  //Add to the IngredientsList the ingredient
  //This printInngredient just add the ingredient to the Ingredients list as a paragraph

  let e = document.getElementById("infoDishIngredientsList");
  e.innerHTML += `<p>${ingredient}</p>`;
}

export function goToMainPage() {
  //It will return to the default page and hide the info dish page

  loadMainPage();
  let e = document.getElementById("InfoDish");
  e.style.display = "none";
}

export function deleteDish(key){
  //This function delete the dish from the map if the user confirms; else it will let you in the same page

  if (confirm('¿Desea borrar el plato?')){
    Dish.removeDish(key[0]);
    dishes.set(key,dishes.get(key[0] + Dish.getAmount(key[0])));
    dishes.delete(key[0]+Dish.getAmount(key[0]));
    goToMainPage();
  }
}