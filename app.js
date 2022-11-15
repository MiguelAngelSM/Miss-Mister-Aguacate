class Dish {
  name;
  price;
  description;
  atributes = [];
  img; //image link
  static amount = [0,0,0]; //Normal Vegan Drink

  constructor(name, price, description, atributes, img, type) {
    this.setName(name);
    this.setPrice(price);
    this.setDescription(description);
    this.setAtributes(atributes);
    this.setImg(img);
    Dish.setAmount(type);
  }

  static getAmount(type){
    let n = 0;
    switch(type){
      case 'N': n=0;break;
      case 'V': n=1;break;
      case 'D': n=2;break;
    }
    return Dish.amount[n];
  }

  static setAmount(type){
    let n = 0;
    switch(type){
      case 'N': n=0;break;
      case 'V': n=1;break;
      case 'D': n=2;break;
    }
    Dish.amount[n]++;
  }

  getName() {
    return this.name;
  }
  setName(value) {
    this.name = value;
  }
  getPrice() {
    return this.price;
  }
  setPrice(value) {
    this.price = value;
  }
  getDescription() {
    return this.description;
  }
  setDescription(value) {
    this.description = value;
  }
  getAtributes() {
    return this.atributes;
  }
  setAtributes(value) {
    this.atributes = value;
  }
  getImg() {
    return this.img;
  }
  setImg(value) {
    this.img = value;
  }
  addAtribute(value){
    this.atributes.push(value);
  }
}

let dishes = new Map(); //Array of dishes //N for normal dishes, V for vegan dishes and D for drinks
createDefaultDishes(dishes);
showDishes(dishes, 0, "N"); //It will charge the normal mode at page 0 by default
let Index = 0;
DisplayPictures = ["Cartel.jpg", "Sitio.jpg", "Amigos.jpg", "Mesa.jpg"];
carousel();

function carousel() {
  //It will change between some images each 5 seconds
  let content = document.getElementById("Display");
  content.innerHTML = `<img class="Photo" src="Imagenes/${DisplayPictures[Index]}"></img>`;
  if (Index >= DisplayPictures.length - 1) {
    Index = 0;
  } else {
    Index++;
  }
  setTimeout(carousel, 5000); // Change image every 5 seconds
}

function createDefaultDishes(dishes) {
  //It will charge some dishes by default
  //6 Normal dishes by default
  dishes.set(
    "N0",
    new Dish(
      "Albóndigas",
      10,
      "Plato delicioso",
      ['a','b','c','d'],
      "Platos/Normal/Albondigas.jpg",
      'N'
    )
  );
  dishes.set(
    "N1",
    new Dish("Lasaña", 9, "Plato delicioso", [], "Platos/Normal/Lasaña.jpg")
  );
  dishes.set(
    "N2",
    new Dish(
      "Lentejas",
      8,
      "Plato delicioso",
      [],
      "Platos/Normal/Lentejas.jpeg",
      'N'
    )
  );
  dishes.set(
    "N3",
    new Dish(
      "Pollo al pesto",
      7,
      "Plato delicioso",
      [],
      "Platos/Normal/Pesto.jpg",
      'N'
    )
  );
  dishes.set(
    "N4",
    new Dish(
      "Pizza 0% vegana",
      6,
      "Plato delicioso",
      [],
      "Platos/Normal/Pizza.jpg",
      'N'
    )
  );
  dishes.set(
    "N5",
    new Dish(
      "Tallarines chinos con setas y pollo",
      5,
      "Plato delicioso",
      [],
      "Platos/Normal/Tallarines.jpg",
      'N'
    )
  );
  //4 Normal dishes by default
  dishes.set(
    "V0",
    new Dish(
      "Hamburguesa vegana",
      10,
      "Plato delicioso",
      [],
      "Platos/Vegano/Burguer Vegana.jpg",
      'V'
    )
  );
  dishes.set(
    "V1",
    new Dish(
      "Ensalada vegana",
      9,
      "Plato delicioso",
      [],
      "Platos/Vegano/Ensalada Vegana.jpg",
      'V'
    )
  );
  dishes.set(
    "V2",
    new Dish(
      "Macarrones con tomatico y queso",
      8,
      "Plato delicioso",
      [],
      "Platos/Vegano/Pasta Vegana.jpg",
      'V'
    )
  );
  dishes.set(
    "V3",
    new Dish(
      "Tarta de Manzana",
      7,
      "Plato delicioso",
      [],
      "Platos/Vegano/Tarta.jpg",
      'V'
    )
  );
  //6 Drinks by default
  dishes.set(
    "D0",
    new Dish(
      "Agua",
      2,
      "Agua fresca de Solan de Cabras edicion Rocas del Manantial en botella de vidrio de 70cl",
      [],
      "Platos/Bebida/Agua.jpg",
      'D'
    )
  );
  dishes.set(
    "D1",
    new Dish(
      "Cerveza",
      2,
      "Cerveza Mahou 5 estrellas en botellin de 33cl",
      [],
      "Platos/Bebida/Cerveza.jpg",
      'D'
    )
  );
  dishes.set(
    "D2",
    new Dish(
      "Refrescos",
      3,
      "Coca-Cola Normal o Zero o Light, Fanta de Naranja o de Limon, Aquarius de Naranja o de Limon, Trina de Naranja,",
      [],
      "Platos/Bebida/Refrescos.jpg",
      'D'
    )
  );
  dishes.set(
    "D3",
    new Dish(
      "Café",
      1,
      "Café 100% natural hecho en cafetera moka italiana",
      [],
      "Platos/Bebida/Cafe.jpg",
      'D'
    )
  );
  dishes.set(
    "D4",
    new Dish(
      "Vino Pasion de Bobal",
      7.95,
      "Vino ecologico con origen en viñedos de más de 60 años ",
      [],
      "Platos/Bebida/VinoBarato.jpg",
      'D'
    )
  );
  dishes.set(
    "D5",
    new Dish(
      "Vino Teso La Monja",
      1272,
      "Vino de gran calidad cultivado segun los principios de la biodinámica",
      [],
      "Platos/Bebida/VinoCaro.jpg",
      'D'
    )
  );
  //Add Normal Burguer Vegan Pizza Remove Lentejas
}

function changePage(mode, page, nextOrPrevious) {
  //nextOrPrevious will be 1 if is the next or -1 if it is the previous. This function gives the funcionality to the arrows;
  //it will load the next or previous page of the menu depending on the mode and on the page;
  //only change page if it is a valid change(if you are in the first page you can't go to the previous page and if there are more
  //dishes to show or there aren't any 'Añadir Plato' button)
  if (
    (nextOrPrevious === 1 && page >= 0 && page + 1 <= Dish.getAmount(mode) / 4) ||
    (nextOrPrevious === -1 && page !== 0)
  ) {
    p = page + nextOrPrevious;
    showDishes(dishes, p, mode);
    updateArrows(mode, p);
  }
}

function changeMenuButtons(actual_mode, mode, mode1) {
  //This function change the buttons to change mode from the menu to show those who aren't the actual mode
  let b = document.getElementById("Button1"); //Update Menu Button 1
  b.innerHTML = ` <button id="${mode}Mode" class="MenuButton" onclick="changeMode('${mode}','${mode1}','${actual_mode}')">
                        <img class="menu-header-button img-responsive" src="Iconos/${mode}.png">
                    </button>`;
  b = document.getElementById("Button2"); //Update Menu Button 2
  b.innerHTML = ` <button id="${mode1}Mode" class="MenuButton" onclick="changeMode('${mode1}','${mode}','${actual_mode}')">
                    <img class="menu-header-button img-responsive" src="Iconos/${mode1}.png">
                </button>`;
}

function changeMode(actual_mode, mode, mode1) {
  //This function change the menu display between each mode by starting at the page 0 (first page)
  changeMenuButtons(actual_mode, mode, mode1);
  updateArrows(actual_mode[0], 0);
  showDishes(dishes, 0, actual_mode[0]); //It will start at page 0
}

function showDishes(dishes, page, mode) {
  //It should be splitted
  n = page * 4; //page*4 is to be placed in the elements of each page cause each page has 4 dishes
  for (i = 0; i < 4; i++) {
    if (dishes.get(mode + (n + i))) {
      //undefined is false
      let dish = dishes.get(mode + (n + i)); //Get the dish

      let img = document.getElementById("Image" + i); //Refresh Image
      img.innerHTML =
        '<img src ="' +
        dish.getImg() +
        '" class="dish-image img-responsive"></img>';

      let name = document.getElementById("Name" + i); //Refresh Name
      name.innerHTML = "<p>" + dish.getName() + "</p>";

      let price = document.getElementById("Price" + i); //Refresh Price
      price.innerHTML = "<p>" + dish.getPrice() + "$</p>";

      let moreInfo = document.getElementById("Info" + i); //Refresh Button
      moreInfo.innerHTML = `<button id="Button${i}" onclick="showSpecificDish('${mode + (n + i)}')">Mas info</button>`; //Create the button
    } else {
      let img = document.getElementById("Image" + i); //Refresh Image
      img.innerHTML =
        '<img src ="Iconos/Plato.png" class="dish-image img-responsive"></img>'; //Prints a default image when there are no dishes

      let name = document.getElementById("Name" + i); //Refresh Name
      name.innerHTML = "<p>No hay plato</p>"; //Prints a default name

      let price = document.getElementById("Price" + i); //Print a default price
      price.innerHTML = "<p>???$</p>";

      let moreInfo = document.getElementById("Info" + i); //Refresh Button
      moreInfo.innerHTML = `<button id="Button ${i}" onclick="newDish('${mode}')">Añadir plato</button>`; //newDish() //Print a button to create a new dish
    }
  }
}

function showSpecificDish(dish) {
  //It must be implemented
  console.log(dish);
}

function updateArrows(mode, page) {
  //This function update the arrows to be ready to change to the right page
  b = document.getElementById("NextArrow"); //Update NextArrow
  b.innerHTML = ` <button onclick="changePage('${mode}', ${page}, 1)">Flecha</button>`;
  b = document.getElementById("BackArrow"); //Update BackArrow
  b.innerHTML = ` <button onclick="changePage('${mode}', ${page}, -1)">Flecha</button>`;
}

//Here starts the forms functions

function showIngredientsList(key){
  //Delete the previous list and make it again with all the elements from the list got from the dish got from the key
  dish=dishes.get(key);
  ingredients=dish.getAtributes();
  e=document.getElementById('IngredientsList');
  e.innerHTML=``;
  ingredients.forEach(i=>printIngredient(i,key));
}

function printIngredient(ingredient,key){
  //Add to the IngredientsList the ingredient
  //The key is required for the delete button
  e=document.getElementById('IngredientsList');
  e.innerHTML+=`<div>
    ${ingredient} 
    <button onclick="deleteIngredient('${ingredient}','${key}')">Eliminar</button>
  <div>`
}

function deleteIngredient(ingredient,key){
  //Delete the ingredient from the dish got from the key and then update the list
  dish=dishes.get(key);
  list=dish.getAtributes();
  list.splice(list.indexOf(ingredient),1);
  showIngredientsList(key);
}

function newDish(mode){
  //Hide the Menu and show the form
  //Create a default dish that will be edited or deleted 
  //Update the page buttons
  e = document.getElementById('Menu');
  e.style.display = 'none';
  e = document.getElementById('Form');
  e.style.display = 'block';

  dishes.set(
    mode + Dish.getAmount(mode),
    new Dish(
      'Default dish',
      '???',
      'This dish was generated because the form was empty',
      [],
      "Iconos/Plato.png",
      mode
    )
  );
  showIngredientsList(mode + (Dish.getAmount(mode)-1));
  
  e = document.getElementById('IngredientButton');
  e.onclick= function (){addNewIngredient(mode + (Dish.getAmount(mode)-1));};
  e = document.getElementById('formSaveButton');
  e.onclick=function (){saveNewDish(mode + (Dish.getAmount(mode)-1));};
  e = document.getElementById('formCancelButton');
  e.onclick=function (){backButton(mode);};
}

function backButton(mode){
  //Delete the dish and return to the Menu
  dishes.delete(mode + (Dish.getAmount(mode)-1));
  backToMenu();
}

function backToMenu(){
  //Hide the Form and return to the normal mode page 0 (default page)
  e = document.getElementById('Menu');
  e.style.display = 'block';
  e = document.getElementById('Form');
  e.style.display = 'none';
  showDishes(dishes, 0, 'N');
  updateArrows('N', 0);
}

function saveNewDish(key){
  //If the user confirm at the pop-up the dish will be updated with the info from the form
  //If the user cancel at the pop-up the dish will be deleted from the map
  //The it will back to menu
  if (confirm('Deseas guardar el plato?')){
    dishes.get(key).setName(document.getElementById('Name').value);
    dishes.get(key).setPrice(document.getElementById('Price').value);
    dishes.get(key).setDescription(document.getElementById('Description').value);
  }else{
    dishes.delete(key);
  }
  backToMenu();
}

function addNewIngredient(key){
  //Add an ingredient to the dish got from the key and refresh the list
  dishes.get(key).addAtribute(document.getElementById('Ingredient').value);
  showIngredientsList(key);
}

//El problema es que al guardar un plato ejecuta dos veces la funcion saveNewDish(430) ligada al boton del div de formSaveButton (287 del html)
