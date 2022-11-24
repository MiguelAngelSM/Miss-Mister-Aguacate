//Imports from other modules
import { dishes, Dish } from "./dish.js";
import {
  printIngredient,
  backButton,
  saveNewDish,
  addNewIngredient,
} from "./forms.js";
import { showIngredientsList } from "./common.js";
import { updateInfoScreen } from "./infoPage.js";

//Functions of this module
export function changePage(mode, page, nextOrPrevious) {
  //nextOrPrevious will be 1 if is the next or -1 if it is the previous. This function gives the funcionality to the arrows;
  //it will load the next or previous page of the menu depending on the mode and on the page;
  //only change page if it is a valid change(if you are in the first page you can't go to the previous page and if there are more
  //dishes to show or there aren't any 'Añadir Plato' button)

  if (
    (nextOrPrevious === 1 &&
      page >= 0 &&
      page + 1 <= Dish.getAmount(mode) / 4) ||
    (nextOrPrevious === -1 && page !== 0)
  ) {
    let p = page + nextOrPrevious;
    showDishes(p, mode);
    updateArrows(mode, p);
  }
}

export function changeMenuButtons(actual_mode, mode, mode1) {
  //This function change the buttons to change mode from the menu to show those who aren't the actual mode

  let b = document.getElementById("OptionButton1"); //Update Menu Button 1
  b.innerHTML = ` <button id="${mode}Mode" class="MenuButton" onclick="changeMode('${mode}','${mode1}','${actual_mode}')">
                          <img class="menu-header-button img-responsive" src="Iconos/${mode}.png">
                      </button>`;
  b = document.getElementById("OptionButton2"); //Update Menu Button 2
  b.innerHTML = ` <button id="${mode1}Mode" class="MenuButton" onclick="changeMode('${mode1}','${mode}','${actual_mode}')">
                      <img class="menu-header-button img-responsive" src="Iconos/${mode1}.png">
                  </button>`;
}

export function changeMode(actual_mode, mode, mode1) {
  //This function change the menu display between each mode by starting at the page 0 (first page)

  changeMenuButtons(actual_mode, mode, mode1);
  updateArrows(actual_mode[0], 0);
  showDishes(0, actual_mode[0]); //It will start at page 0
}

export function showDishes(page, mode) {
  //Show four dishes from the specific mode and the specific page by filling the html
  let n = page * 4; //page*4 is to be placed in the right elements of each page cause each page has 4 dishes
  let thereAreNotMoreDishes = false; //It will help to avoid many new dishes buttons
  for (let i = 0; i < 4; i++) {
    if (dishes.get(mode + (n + i))) {
      let dish = dishes.get(mode + (n + i)); //Get the dish

      let img = document.getElementById("Image" + i); //Refresh Image
      img.innerHTML = `<img src ="${dish.getImg()}" class="dish-image img-responsive">`;

      let name = document.getElementById("Name" + i); //Refresh Name
      name.innerHTML = `<p>${dish.getName()}</p>`;

      let price = document.getElementById("Price" + i); //Refresh Price
      price.innerHTML = `<p>${dish.getPrice()}€</p>`;

      let moreInfo = document.getElementById("Info" + i); //Refresh Button
      moreInfo.innerHTML = `<button id="Button${i}" class="InfoButton" onclick="showSpecificDish('${
        mode + (n + i)
      }')">Más Info</button>`;
    } else {
      if (thereAreNotMoreDishes) {
        let img = document.getElementById("Image" + i); //Prints a default image when there are no dishes
        img.innerHTML = ``;

        let name = document.getElementById("Name" + i); //Prints a default name
        name.innerHTML = ``;

        let price = document.getElementById("Price" + i); //Print a default price
        price.innerHTML = ``;

        let moreInfo = document.getElementById("Info" + i); //Print a new dish button
        moreInfo.innerHTML = ``;
      } else {
        let img = document.getElementById("Image" + i); //Prints a default image when there are no dishes
        img.innerHTML = `<img src ="Iconos/Plato.png" class="dish-image img-responsive">`;

        let name = document.getElementById("Name" + i); //Prints a default name
        name.innerHTML = `<p>No hay plato</p>`;

        let price = document.getElementById("Price" + i); //Print a default price
        price.innerHTML = `<p>???</p>`;

        let moreInfo = document.getElementById("Info" + i); //Print a new dish button
        moreInfo.innerHTML = `<button id="Button ${i}" onclick="newDish('${mode}')">Añadir plato</button>`;
        thereAreNotMoreDishes = true;
      }
    }
  }
}

export function updateArrows(mode, page) {
  //This function update the arrows to be ready to change to the right page

  let b = document.getElementById("NextArrow"); //Update NextArrow
  b.innerHTML = ` <button class="ArrowButton" onclick="changePage('${mode}', ${page}, 1)"><img class="menu-arrow-button img-responsive" src="Iconos/NextArrow.png"></button>`;
  b = document.getElementById("BackArrow"); //Update BackArrow
  b.innerHTML = ` <button class="ArrowButton" onclick="changePage('${mode}', ${page}, -1)"><img class="menu-arrow-button img-responsive" src="Iconos/BackArrow.png"></button>`;
}

export function newDish(mode) {
  //Hide the Menu and show the form
  //Create a default dish that will be edited or deleted
  //Clean the form
  //Update the page buttons

  let e = document.getElementById("Menu");
  e.style.display = "none";
  e = document.getElementById("Display");
  e.style.display = "none";
  e = document.getElementById("Reviews");
  e.style.display = "none";
  e = document.getElementById("Form");
  e.style.display = "block";
  e = document.getElementById("AddImage");
  e.style.display = "block";
  document.getElementById("FormImage").style.display = "none";

  dishes.set(
    mode + Dish.getAmount(mode),
    new Dish(
      "Default dish",
      "???",
      "This dish was generated because the form was empty",
      [],
      "Iconos/Plato.png",
      mode
    )
  );

  document.getElementById("Name").value = "";
  document.getElementById("Name").disabled = false;///////////////////////
  document.getElementById("Price").value = "";
  document.getElementById("Description").value = "";
  document.getElementById("Ingredient").value = "";
  e = document.getElementById("IngredientsList");
  e.innerHTML = ``;
  showIngredientsList(mode + (Dish.getAmount(mode) - 1), printIngredient);

  let key = mode + (Dish.getAmount(mode) - 1);
  e = document.getElementById("IngredientButton");
  e.onclick = function () {
    addNewIngredient(key);
  };
  e = document.getElementById("formSaveButton");
  e.onclick = function () {
    saveNewDish(key, 1);
  };
  e = document.getElementById("formCancelButton");
  e.onclick = function () {
    backButton(key, 1);
  };
}

export function showSpecificDish(key) {
  let e = document.getElementById("Menu");
  e.style.display = "none";
  e = document.getElementById("Display");
  e.style.display = "none";
  e = document.getElementById("Reviews");
  e.style.display = "none";
  e = document.getElementById("InfoDish");
  e.style.display = "block";

  updateInfoScreen(key);
}
