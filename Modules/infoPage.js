//Imports from other modules
import { dishes, Dish } from "./dish.js";
import {saveNewDish,backButton,addNewIngredient,printIngredient} from './forms.js';
import {showIngredientsList } from "./common.js";

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