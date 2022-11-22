//Imports from other modules
import { dishes, Dish } from "./dish.js";
import { modifyDish } from "./forms.js";
import { showIngredientsList, loadMainPage } from "./common.js";
//Functions of this module

export function updateInfoScreen(key) {
  let dish = dishes.get(key);
  let e = document.getElementById("InfoPhoto");
  e.innerHTML = `<img id="InfodishImage" class="img-responsive" src="${dish.getImg()}"></img>`;

  e = document.getElementById("infoDishName");
  e.innerHTML = `${dish.getName()}`;

  e = document.getElementById("infoDishPrice");
  e.innerHTML = `${dish.getPrice()}`;

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

  let e = document.getElementById("infoDishIngredientsList");
  e.innerHTML += `<p>${ingredient}</p>`;
}

export function goToMainPage() {
  loadMainPage();
  let e = document.getElementById("InfoDish");
  e.style.display = "none";
}

export function deleteDish(key){
  if (confirm('Desea borrar el plato?')){
    Dish.removeDish(key[0]);
    dishes.set(key,dishes.get(key[0] + Dish.getAmount(key[0])));
    dishes.delete(key[0]+Dish.getAmount(key[0]));
    goToMainPage();
  }
}