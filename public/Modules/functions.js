//Functions of this module
/**
 * This function change the buttons to change mode from the menu to show those who aren't the actual mode
 * Actual_mode is the mode we change to
 * mode and mode1 are the other modes
 * It also changes the arrow buttons
 *
 * @param {String} actual_mode
 * @param {String} mode
 * @param {String} mode1
 */
export function changeMenuButtons(actual_mode, mode, mode1) {
  let b = document.getElementById("ModeLeft"); //Update Menu Button Left
  b.setAttribute("onclick", `window.location.href='/menu/${mode}'`);
  b = document.getElementById("ImageModeLeft"); //Update Menu Image Left
  b.src = `../Iconos/${mode}.png`;

  b = document.getElementById("ModeRight"); //Update Menu Button Right
  b.setAttribute("onclick", `window.location.href='/menu/${mode1}'`);
  b = document.getElementById("ImageModeRight"); //Update Menu Image Right
  b.src = `../Iconos/${mode1}.png`;

  b = document.getElementById("NextArrow"); //Update NextArrow
  b.setAttribute("onclick", `changePage('${actual_mode}',1)`);

  b = document.getElementById("BackArrow"); //Update BackArrow
  b.setAttribute("onclick", `changePage('${actual_mode}',-1)`);
}

/**
 * It put all areas writteable and show the input for adding image
 * It puts the type option from the page we came as selected by default
 */
export function newDish() {
  let e = document.getElementById("AddImage");
  e.style.display = "block";
  document.getElementById("FormImage").style.display = "none";
  let opt = document.getElementById("ActualType").value[0];
  let b = document.getElementById("Option" + opt);
  b.setAttribute("selected", "selected");
}

/**
 * It put name and type only readable and show the image (it is because image,name and type can not change when modifying)
 * It puts the type as selected by default
 */
export function modifyDish() {
  let e = document.getElementById("AddImage");
  e.style.display = "none";
  document.getElementById("FormImage").style.display = "block";
  document.getElementById("Name").setAttribute("readonly", true); //put the input only readable
  document.getElementById("Type").setAttribute("disabled", true); //put the select only readable
  let opt = document.getElementById("ActualType").value[0];
  let b = document.getElementById("Option" + opt);
  b.setAttribute("selected", "selected");
}

/**
 * Add to the IngredientsList the ingredient selected
 * This printIngredient will print them in an input modifyable and with a delete button for each one
 *
 * @param {String} ingredient
 * @param {Number} i is the number of the dish printed and delete button
 */
export function printIngredient(ingredient, i) {
  let e = document.getElementById("IngredientsList");
  e.innerHTML += `
  <div id="Ingredient${i}" class="form-inline">
    <input
      id="IngredientText${i}"
      name="ingredient"
      class="ingredientsStructure form-control col-xs-11 col-sm-11 col-md-11 col-lg-11"
      type="text"
      value="${ingredient}"
      />
      <input
      class="ingredientsStructureButton form-control col-xs-1 col-sm-1 col-md-1 col-lg-1"
      type="button"
      onclick="deleteIngredient('${i}')"
      value="Eliminar"
      />
    </div>`;
}

/**
 * It deletes the ingredient from the screen
 *
 * @param {String} i
 */
export function deleteIngredient(i) {
  //Delete the ingredient from the ingredients list from the page

  if (confirm("¿Deseas borrar el ingrediente?")) {
    let e = document.getElementById("Ingredient" + i);
    e.remove();
  }
}

/**
 * Add an ingredient to the ingredients list from the page
 * If confirm the ingredient will be added
 * If the input is empty an alert will be shown and the input will not be printed
 */
export function addNewIngredient() {
  if (document.getElementById("Ingredient").value !== "") {
    if (confirm("¿Deseas añadir el ingrediente?")) {
      let inputs = document.getElementsByClassName("ingredientsStructure");
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
  } else {
    alert("No se puede añadir un ingrediente vacío");
  }
}

/**
 * If confirm the page changes to deleted page and then deletes the dish
 *
 * @param {String} type
 * @param {String} id
 */
export function deleteDish(type, id) {
  if (confirm("¿Desea borrar el plato?")) {
    window.location.href = `${id}/deleted?type=${type}`;
  }
}

/**
 * It let the user save the dish if name, price and description are filled
 * There is always a default type selected
 * Image and ingredients are optional (it is because there is a default image and becuase 
 * when ingredients list is shown there is a "No hay ingredientes" text )
 */
export function validate() {
  let valid =
    document.getElementById("Name").value !== "" &&
    document.getElementById("Price").value !== "" &&
    document.getElementById("Description").value !== "";
  //The user can make a dish withouth ingredients(No hay ingredientes) and without image(default one)
  if (valid) {
    document.getElementById("FormSaveButton").type = "submit";
  } else {
    alert("Nombre, descripción y precio son campos obligatorios");
  }
}

//Window will let html use the functions
window.deleteDish = deleteDish;
window.addNewIngredient = addNewIngredient;
window.deleteIngredient = deleteIngredient;
window.validate = validate;
