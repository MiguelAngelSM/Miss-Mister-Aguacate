//Imports from other modules
import { dishes, Dish } from "./dish.js";
import { backToMenu, showIngredientsList } from "./common.js";

//Functions of this module
export function printIngredient(ingredient, key) {
  //Add to the IngredientsList the ingredient
  //The key is required for the delete button

  let e = document.getElementById("IngredientsList");
  e.innerHTML += `<div>
      ${ingredient} 
      <button onclick="deleteIngredient('${ingredient}','${key}')">Eliminar</button>
    <div>`;
}

export function deleteIngredient(ingredient, key) {
  //Delete the ingredient from the dish got from the key and then update the list
  if (confirm("Deseas borrar el ingrediente")) {
    let dish = dishes.get(key);
    let list = dish.getAtributes();
    list.splice(list.indexOf(ingredient), 1);
    showIngredientsList(key, printIngredient);
  }
}

export function backButton(key, opt, copyArray) {
  //Delete the dish and return to the Menu
  //Option 1 delete the last dish, any other value won't delete it

  if (opt === 1) {
    dishes.delete(key);
    Dish.removeDish(key[0]);
  } else {
    dishes.get(key).setAtributes(copyArray);
  }
  backToMenu();
}

export function saveNewDish(key, opt, copyArray) {
  //If the user confirm at the pop-up the dish will be updated with the info from the form
  //If the user cancel at the pop-up the dish will be deleted from the map
  //It will clean the form also
  //The it will back to menu

  if (confirm("Deseas guardar el plato?")) {
    dishes.get(key).setName(document.getElementById("Name").value);
    dishes.get(key).setPrice(document.getElementById("Price").value);
    dishes
      .get(key)
      .setDescription(document.getElementById("Description").value);
  } else {
    if (opt === 1) {
      dishes.delete(key);
      Dish.removeDish(key[0]); //First char from the array is the mode
    } else {
      dishes.get(key).setAtributes(copyArray);
    }
  }
  backToMenu();
}

export function addNewIngredient(key) {
  //Add an ingredient to the dish got from the key and refresh the list
  if (confirm("Deseas añadir el ingrediente")) {
    dishes.get(key).addAtribute(document.getElementById("Ingredient").value);
    showIngredientsList(key, printIngredient);
  }
}
