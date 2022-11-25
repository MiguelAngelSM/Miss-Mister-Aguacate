//Imports from other modules
import { dishes, Dish } from "./dish.js";
import { backToMenu, showIngredientsList } from "./common.js";
import { newDish } from "./mainPage.js";

//Functions of this module
export function printIngredient(ingredient, key, i) {
  //Add to the IngredientsList the ingredient selected
  //The key is required for the delete button
  //i is the number of the dish printed
  //This printIngredient will print them in an input modifyable and with a delete button for each one

  let e = document.getElementById("IngredientsList");
  e.innerHTML += `
  <div id="Ingredient${i}" class="form-inline">
    <input
      id="IngredientText${i}"
      class="IngredientsStructure form-control col-xs-11 col-sm-11 col-md-11 col-lg-11"
      type="text"
      value="${ingredient}"
      />
      <input
      class="IngredientsStructureButton form-control col-xs-1 col-sm-1 col-md-1 col-lg-1"
      type="button"
      onclick="deleteIngredient('${ingredient}','${key}')"
      value="Eliminar"
      />
    </div>`
}

export function deleteIngredient(ingredient, key) {
  //Delete the ingredient from the dish got from the key and the ingredients list from the page

  if (confirm("¿Deseas borrar el ingrediente?")) {
    let dish = dishes.get(key);
    let list = dish.getAtributes();
    let e = document.getElementById('Ingredient'+list.indexOf(ingredient));
    e.remove();
    list.splice(list.indexOf(ingredient), 1);
  }
}

export function backButton(key, opt, copyArray) {
  //This is the cancel button from the page; not the cancel from the confirm when save; it will send you to the default page
  //Option 1 delete the last dish (needed for the newDish function), any other value won't delete it
  //copyArray is a backup of the ingredients list from the dish before modifying it

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
  //If the user cancel at the pop-up the new dish will be deleted from the map
  //It will clean the form
  //Then it will back to menu
  //Option 1 is for the newDish function

  if (confirm("¿Deseas guardar el plato?")) {
    dishes.get(key).setName(document.getElementById("Name").value);
    dishes.get(key).setPrice(document.getElementById("Price").value);
    dishes
      .get(key)
      .setDescription(document.getElementById("Description").value);
    //This is to get the images saved
    let input = document.getElementById("AddImage");
    if ((opt == 1)&&input.files[0]) { //if the user does not select an image it would let the default one
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
  //Add an ingredient to the dish got from the key and the ingredients list from the page
  //If confirm the ingredient will be added 
  //index will 

  if (confirm("¿Deseas añadir el ingrediente?")) {
    //dishes.get(key).addAtribute(document.getElementById("Ingredient").value);
    let inputs = document.getElementsByClassName('IngredientsStructure');
    for(let i=0;i<inputs.length; i++){//It is to not delete the info when adding an ingredient
      let aux = inputs[i].value;
      inputs[i].removeAttribute('value');
      inputs[i].setAttribute('value',aux);
    }

    let lastId = inputs[inputs.length-1].id;//It is to calculate what index must have
    let index = lastId.slice(14,lastId.length);
    index = Number(index)+1;
    printIngredient(document.getElementById("Ingredient").value,key,index);
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

  document.getElementById("FormImage").src = dishes.get(key).getImg();
  document.getElementById("Name").value = dishes.get(key).getName();
  document.getElementById("Name").disabled = true;//put the input only readable
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
  //This function will collect the tags of the ingredients from the list cause they might have changed and then save them 
  //It will delete the previous list and push each ingredient to the list

  dishes.get(key).setAtributes([]);//Delete the previous list of ingredients
  let inputs = document.getElementsByClassName('IngredientsStructure');
  for(let i=0;i<inputs.length; i++){
    dishes.get(key).addAtribute(inputs[i].value);
  }
}