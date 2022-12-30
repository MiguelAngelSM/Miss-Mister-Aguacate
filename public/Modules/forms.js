//Imports from other modules
import { loadMainPage } from "./common.js";

//Functions of this module

export function deleteIngredient(i) {
  //Delete the ingredient from the ingredients list from the page

  if (confirm("¿Deseas borrar el ingrediente?")) {
    let e = document.getElementById("Ingredient" + i);
    e.remove();
  }
}

export function backButton(key, opt) {
  //This is the cancel button from the page; not the cancel from the confirm when save; it will send you to the default page
  //Option 1 delete the last dish (needed for the newDish function), any other value won't delete it

  if (opt === 1) {
    dishes.delete(key);
    Dish.removeDish(key[0]);
  }
  loadMainPage();
}

export function saveDish() {
  //If the user confirm at the pop-up the dish will be updated with the info from the form
  //If the user cancel at the pop-up the new dish will be deleted from the map
  //It will clean the form
  //Then it will back to menu
  //Option 1 is for the newDish function

  if (confirm("¿Deseas guardar el plato?")) {
    let name = document.getElementById("Name").value;
    let price = document.getElementById("Price").value;
    let desc =document.getElementById("Description").value;
    //let type = document.getElementById("Type").value;
    let type = "N";
    let ingredients =saveIngredients();
    let dish = new dishes.Dish(name,price,desc,ingredients,"",type);//Image will be saved later
    //This is to get the images saved
    let input = document.getElementById("AddImage");
    if (input.files[0]) {
      //if the user does not select an image it would let the default one
      let fReader = new FileReader();
      fReader.readAsDataURL(input.files[0]);
      fReader.onloadend = function (event) {
        dish.setImg(event.target.result);
      };
    }
    //This is to get the images saved
    dishes.addDish(dish);
    //loadMainPage();
  } else {
    
  }
}

export function addNewIngredient() {
  //Add an ingredient to the ingredients list from the page
  //If confirm the ingredient will be added

  if (confirm("¿Deseas añadir el ingrediente?")) {
    let inputs = document.getElementsByClassName("IngredientsStructure");
    for (let i = 0; i < inputs.length; i++) {
      //It is to not delete the info when adding an ingredient
      let aux = inputs[i].value;
      inputs[i].removeAttribute("value");
      inputs[i].setAttribute("value", aux);
    }

    let index = 0;
    if (inputs.length > 0) {
      let lastId = inputs[inputs.length - 1].id; //It is to calculate what index must have
      index = lastId.slice(14, lastId.length);
      index = Number(index) + 1;
    }
    printIngredient(document.getElementById("Ingredient").value, index);
    document.getElementById("Ingredient").value = ""; //To clean the label
  }
}

export function saveIngredients() {
  //This function will collect the tags of the ingredients from the list cause they might have changed and then save them
  //It will delete the previous list and push each ingredient to the list
  let inputs = document.getElementsByClassName("IngredientsStructure");
  let ingredients = [];
  for (let i = 0; i < inputs.length; i++) {
    ingredients.push(inputs[i].value);
  }
  return ingredients;
}
