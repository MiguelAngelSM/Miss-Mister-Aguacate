//Imports from other modules
import { dishes, Dish } from "./dish.js";
import { backToMenu, showIngredientsList } from "./common.js";
import { newDish } from "./mainPage.js";

//Functions of this module
export function printIngredient(ingredient, key, i) {
  //Add to the IngredientsList the ingredient
  //The key is required for the delete button

  let e = document.getElementById("IngredientsList");
  e.innerHTML += `
  <div class="form-inline">
    <input
      id="Ingredient${i}"
      class="form-control col-11"
      type="text"
      value="${ingredient}"
      />
      <input
      class="form-control col-1"
      type="button"
      onclick="deleteIngredient('${ingredient}','${key}')"
      value="Eliminar"
      />
    </div>`
}

export function deleteIngredient(ingredient, key) {
  //Delete the ingredient from the dish got from the key and then update the list
  if (confirm("Deseas borrar el ingrediente")) {
    let dish = dishes.get(key);
    let list = dish.getAtributes();
    list.splice(list.indexOf(ingredient), 1);
  }
  let e = document.getElementById("IngredientsList");
  e.innerHTML = ``;
  showIngredientsList(key, printIngredient);
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
  //Then it will back to menu
  //Option 1 is for the newDishOption

  if (confirm("Deseas guardar el plato?")) {
    dishes.get(key).setName(document.getElementById("Name").value);
    dishes.get(key).setPrice(document.getElementById("Price").value);
    dishes
      .get(key)
      .setDescription(document.getElementById("Description").value);
    //This is to get the images saved
    if (opt == 1) {
      let input = document.getElementById("AddImage");
      let fReader = new FileReader();
      fReader.readAsDataURL(input.files[0]);
      fReader.onloadend = function (event) {
        dishes.get(key).setImg(event.target.result);
      };
    }
    saveIngredients(key);
    //This is to get the images saved

    backToMenu();
  } else {
    if (opt === 1) {
      dishes.delete(key);
      Dish.removeDish(key[0]); //First char from the array is the mode
      newDish(key[0]);
    } else {
      dishes.get(key).setAtributes(copyArray);
      modifyDish(key);
    }
  }
}

export function addNewIngredient(key) {
  //Add an ingredient to the dish got from the key and refresh the list
  if (confirm("Deseas añadir el ingrediente")) {
    dishes.get(key).addAtribute(document.getElementById("Ingredient").value);
  }
  let e = document.getElementById("IngredientsList");
  e.innerHTML = ``;
  showIngredientsList(key, printIngredient);
}

export function modifyDish(key) {
  //It will change to the form for modifying the dish
  let e = document.getElementById("InfoDish");
  e.style.display = "none";
  e = document.getElementById("Form");
  e.style.display = "block";
  e = document.getElementById("AddImage");
  e.style.display = "none";
  document.getElementById("FormImage").style.display = "block";

  document.getElementById("FormImage").src = dishes.get(key).getImg();
  document.getElementById("Name").value = dishes.get(key).getName();
  document.getElementById("Name").disabled = true;///////////////////////
  document.getElementById("Price").value = dishes.get(key).getPrice();
  document.getElementById("Description").value = dishes
    .get(key)
    .getDescription();
  e = document.getElementById("IngredientsList");
  e.innerHTML = ``;
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

export function saveIngredients(key){
  let size=dishes.get(key).getAtributes().length;
  dishes.get(key).setAtributes([]);//Delete the previous list of ingredients
  for(let i=0;i<size; i++){
    document.getElementById('Ingredient'+i).value;
    dishes.get(key).addAtribute(document.getElementById('Ingredient'+i).value);
  }
}