//Functions of this module
export function changeMenuButtons(actual_mode, mode, mode1) {
  //This function change the buttons to change mode from the menu to show those who aren't the actual mode
  //Actual_mode is the mode we change to
  //mode and mode1 are the other modes

  let b = document.getElementById("ModeLeft"); //Update Menu Button Left
  b.setAttribute("onclick", `window.location.href='/menu/${mode}'`);
  b = document.getElementById("ImageModeLeft"); //Update Menu Image Left
  b.src = `../Iconos/${mode}.png`;

  b = document.getElementById("ModeRight"); //Update Menu Button Right
  b.setAttribute("onclick", `window.location.href='/menu/${mode1}'`);
  b = document.getElementById("ImageModeRight"); //Update Menu Image Right
  b.src = `../Iconos/${mode1}.png`;

  b = document.getElementById("LoadMoreButton"); //Update LoadMoreButton
  b.setAttribute("onclick", `changePage('${actual_mode}',1)`);

  b = document.getElementById("LoadLessButton"); //Update LoadLessButton
  b.setAttribute("onclick", `changePage('${actual_mode}',-1)`);
}

export function newDish() {
  let e = document.getElementById("AddImage");
  e.style.display = "block";
  document.getElementById("FormImage").style.display = "none";
  let opt = document.getElementById("actualType").value[0];
  let b = document.getElementById("Option" + opt);
  b.setAttribute("selected", "selected");
  e = document.getElementById("IngredientsList");
  e.innerHTML = ``;
}

export function modifyDish() {
  let e = document.getElementById("AddImage");
  e.style.display = "none";
  document.getElementById("FormImage").style.display = "block";
  document.getElementById("Name").setAttribute("readonly", true); //put the input only readable
  document.getElementById("Type").setAttribute("disabled", true); //put the select only readable
  let opt = document.getElementById("actualType").value[0];
  let b = document.getElementById("Option" + opt);
  b.setAttribute("selected", "selected");
}

export function printIngredient(ingredient, i) {
  //Add to the IngredientsList the ingredient selected
  //The key is required for the delete button
  //i is the number of the dish printed
  //This printIngredient will print them in an input modifyable and with a delete button for each one

  let e = document.getElementById("IngredientsList");
  e.innerHTML += `
  <div id="Ingredient${i}" class="form-group">
    <input
      id="IngredientText${i}"
      name="ingredient"
      class="IngredientsStructure form-control col-xs-11 col-sm-11 col-md-11 col-lg-11"
      type="text"
      value="${ingredient}"
      />
      <input
      class="IngredientsStructureButton form-control col-xs-1 col-sm-1 col-md-1 col-lg-1"
      type="button"
      onclick="deleteIngredient('${i}')"
      value="Eliminar"
      />
    </div>`;
}

export function deleteIngredient(i) {
  //Delete the ingredient from the ingredients list from the page

  if (confirm("¿Deseas borrar el ingrediente?")) {
    let e = document.getElementById("Ingredient" + i);
    e.remove();
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

export function deleteDish(type,id){
  if (confirm("¿Desea borrar el plato?")){
    window.location.href=`${id}/deleted?type=${type}`;
  }
}

//Window will let html use the functions
window.deleteDish=deleteDish;
window.addNewIngredient = addNewIngredient;
window.deleteIngredient = deleteIngredient;