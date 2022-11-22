//Imports from other modules
import { dishes, Dish } from "./dish.js";
import {
  saveNewDish,
  backButton,
  addNewIngredient,
} from "./forms.js";
import { showIngredientsList } from "./common.js";

//Functions of this module
export function modifyDish(key) {
  let e = document.getElementById("Menu");
  e.style.display = "none";
  e = document.getElementById("Form");
  e.style.display = "block";

  document.getElementById("FormImage").src = dishes.get(key).getImg();
  document.getElementById("Name").value = dishes.get(key).getName();
  document.getElementById("Price").value = dishes.get(key).getPrice();
  document.getElementById("Description").value = dishes
    .get(key)
    .getDescription();
  showIngredientsList(key, printIngredient);

  let copyArray = [...dishes.get(key).getAtributes()];

  e = document.getElementById("IngredientButton");
  e.onclick = function () {
    addNewIngredient(key);
  };
  e = document.getElementById("formSaveButton");
  e.onclick = function () {
    saveNewDish(key, 0, copyArray);
  };
  e = document.getElementById("formCancelButton");
  e.onclick = function () {
    backButton(key, 0, copyArray);
  };
}

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

  showIngredientsList(key, printIngredient);

  //Update buttons
}

export function printIngredient(ingredient) {
  //Add to the IngredientsList the ingredient

  let e = document.getElementById("infoDishIngredientsList");
  e.innerHTML += `<div>${ingredient} <div>`;
}
