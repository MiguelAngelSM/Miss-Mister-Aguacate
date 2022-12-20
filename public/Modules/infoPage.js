//Imports from other modules
import { showIngredientsList, loadMainPage } from "./common.js";
//Functions of this module

export function updateInfoScreen(key) {
  //This function will update the info menu with the dish get from the key
  //It will also update the buttons

  let dish = dishes.get(key);
  let e = document.getElementById("InfodishImage");
  e.src = dish.getImg();

  e = document.getElementById("infoDishName");
  e.innerHTML = `${dish.getName()}`;

  e = document.getElementById("infoDishPrice");
  e.innerHTML = `${dish.getPrice()}€`;

  e = document.getElementById("infoDishDescription");
  e.innerHTML = `${dish.getDescription()}`;

  e = document.getElementById("infoDishIngredientsList");
  e.innerHTML = ``;//to clean the list
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

export function deleteDish(key){
  //This function delete the dish from the map if the user confirms; else it will let you in the same page

  if (confirm('¿Desea borrar el plato?')){
    Dish.removeDish(key[0]);
    dishes.set(key,dishes.get(key[0] + Dish.getAmount(key[0])));
    dishes.delete(key[0]+Dish.getAmount(key[0]));
    loadMainPage();
  }
}

export function modifyDish(key) {
  //It will change to the form for modifying the dish
  //It will hide the add image option and the infoDish menu
  //It will disable the name cause it must not be changed due to the design
  //It will fill the inputs with the previous info but it could be changed
  //It will print the ingredients list too
  //It will upload the buttons from that menu

  let e = document.getElementById("InfoDish");
  e.style.display = "none";
  e = document.getElementById("Form");
  e.style.display = "block";
  e = document.getElementById("AddImage");
  e.style.display = "none";
  document.getElementById("FormImage").style.display = "block";

  document.getElementById("Ingredient").value='';//To clean the label
  document.getElementById("FormImage").src = dishes.get(key).getImg();
  document.getElementById("Name").value = dishes.get(key).getName();
  document.getElementById("Name").disabled = true; //put the input only readable
  document.getElementById("Price").value = dishes.get(key).getPrice();
  document.getElementById("Description").value = dishes
    .get(key)
    .getDescription();
  e = document.getElementById("IngredientsList");
  e.innerHTML = ``;//to clean the list
  showIngredientsList(key, printIngredient);

  e = document.getElementById("IngredientButton");
  e.onclick = function () {
    addNewIngredient();
  };
  e = document.getElementById("formSaveButton");
  e.onclick = function () {
    saveDish(key, 0);
  };
  e = document.getElementById("formCancelButton");
  e.onclick = function () {
    backButton(key, 0);
  };
}