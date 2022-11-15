class Dish {
  name;
  price;
  description;
  atributes = [];
  img; //image link
  static amount = [0, 0, 0]; //Normal Vegan Drink

  constructor(name, price, description, atributes, img, type) {
    this.setName(name);
    this.setPrice(price);
    this.setDescription(description);
    this.setAtributes(atributes);
    this.setImg(img);
    Dish.setAmount(type);
  }

  static removeDish(type) {
    let n = 0;
    switch (type) {
      case "N":
        n = 0;
        break;
      case "V":
        n = 1;
        break;
      case "D":
        n = 2;
        break;
    }
    Dish.amount[n]--;
  }

  static getAmount(type) {
    let n = 0;
    switch (type) {
      case "N":
        n = 0;
        break;
      case "V":
        n = 1;
        break;
      case "D":
        n = 2;
        break;
    }
    return Dish.amount[n];
  }

  static setAmount(type) {
    let n = 0;
    switch (type) {
      case "N":
        n = 0;
        break;
      case "V":
        n = 1;
        break;
      case "D":
        n = 2;
        break;
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
  addAtribute(value) {
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
      "Hamburguesa completa",
      5,
      "Hamburguesa completa con carne mixta, lechuga, tomate, cebolla y queso. Salsas a elegir entre mayonesa, ketchup, mostaza y salsa BBQ. ¡INCLUYE PATATAS FRITAS O DELUXE!",
      [
        "Carne mixta de ternera y cerdo",
        "Cebolla dulce",
        "Lechuga iceberg",
        "Tomate",
        "Queso cheddar",
        "Ketchup Heinz",
        "Mayonesa Hacendado",
        "Mostaza",
        "Salsa Barbacoa",
      ],
      "Platos/Normal/Burguer.jpg",
      "N"
    )
  );
  dishes.set(
    "N1",
    new Dish(
      "Pizza",
      8,
      "Pizza personalizable con base de tomate y queso",
      [
        "4 quesos",
        "Salsa Barbacoa",
        "Atún",
        "Carne picada",
        "Bacon",
        "Champiñones",
        "Aceitunas negras",
        "Salchichas",
        "Jamon Serrano",
        "Queso de cabra",
      ],
      "Platos/Normal/Pizza.jpg"
    )
  );
  dishes.set(
    "N2",
    new Dish(
      "Macrrones con albondigas",
      4,
      "Deliciosos macarrones con tomate con sabrosas albondigas hechas al estilo de la abuela",
      ["Macarrones", "Tomate frito natural", "Albondigas de carne mixta"],
      "Platos/Normal/Macarrones con albondigas.jpg",
      "N"
    )
  );
  dishes.set(
    "N3",
    new Dish(
      "Pollo al pesto",
      7,
      "Delicioso plato de pollo al pesto al puro estilo Sevillano",
      [
        "Macarrones helice",
        "Pollo a la plancha",
        "Mozzarella",
        "Pesto",
        "Tomates Cherry",
      ],
      "Platos/Normal/Pesto.jpg",
      "N"
    )
  );
  dishes.set(
    "N4",
    new Dish(
      "Fajitas",
      8,
      "Deliciosas fajitas hechas al puro estilo mexicano. ¡INCLUYE NACHOS CON SALSAS!",
      [
        "Tortilla de trigo",
        "Tiras de pollo",
        "Pimiento verde, rojo y amarillo",
        "Especias variadas",
        "Nachos de trigo",
        "Guacamole",
        "Salsa de tomate mexicana",
        "Salsa de queso mexicana",
      ],
      "Platos/Normal/Fajitas.jpg",
      "N"
    )
  );
  dishes.set(
    "N5",
    new Dish(
      "Tallarines chinos con setas y pollo",
      3,
      "Deliciosos tallarines fritos hechos por un hombre de las tierras del Quijote",
      ["Tallarines", "Champiñones", "Pollo a la plancha", "Salsa de soja"],
      "Platos/Normal/Tallarines.jpg",
      "N"
    )
  );
  dishes.set(
    "N6",
    new Dish(
      "Pescado con papas",
      4,
      "Podría parecer que es una copia del fish&chips ingles pero no, este pescado con papas es mejor gracias a nuestro chef valenciano que pone su toque culinario",
      [
        "Filete de merluza a la plancha",
        "Patatas fritas",
        "Cebolla",
        "Pimiento",
      ],
      "Platos/Normal/Pescado con papas.jpg",
      "N"
    )
  );
  //4 Normal dishes by default
  dishes.set(
    "V0",
    new Dish(
      "Hamburguesa vegana",
      5,
      "Deliciosa hamburguesa vegana hecha para los amantes de los sabores exóticos",
      [
        '"Carne" Beyond',
        "Cebolla morada",
        "Rúcula",
        "Aguacate",
        "Platano macho frito",
        "Salsa secreta de la casa",
      ],
      "Platos/Vegano/Burguer Vegana.jpg",
      "V"
    )
  );
  dishes.set(
    "V1",
    new Dish(
      "Ensalada vegana",
      3,
      "Plato vegano por defecto en cualquier restaurante",
      [
        "Lechuga iceberg",
        "Cebolla",
        "Tomate",
        "Sal",
        "Aceite",
        "Vinagre",
        "Pepino",
        "Rúcula",
      ],
      "Platos/Vegano/Ensalada Vegana.jpg",
      "V"
    )
  );
  dishes.set(
    "V2",
    new Dish(
      "Macarrones con tomate y queso",
      4,
      "Macarrones con tomate y queso 100% vegano",
      ["Macarrones", "Tomate frito natural", "Queso vegano"],
      "Platos/Vegano/Pasta Vegana.jpg",
      "V"
    )
  );
  dishes.set(
    "V3",
    new Dish(
      "Tarta de Manzana",
      2,
      "Dulce postre elaborado por nuestra chef mostoleña UwU",
      ["Manzanas"],
      "Platos/Vegano/Tarta.jpg",
      "V"
    )
  );
  dishes.set(
    "V4",
    new Dish(
      "Pizza vegana",
      8,
      "Deliciosa pizza vegana para los amantes de la naturaleza",
      [
        "Champiñones",
        "Base de tomate y queso vegano",
        "Maiz",
        "Queso vegano en rodajas",
        "Albahaca",
      ],
      "Platos/Vegano/Pizza vegana.jpg",
      "V"
    )
  );
  //6 Drinks by default
  dishes.set(
    "D0",
    new Dish(
      "Agua",
      2,
      "Agua fresca de Solan de Cabras edicion Rocas del Manantial en botella de vidrio de 70cl",
      ["Agua de manantial"],
      "Platos/Bebida/Agua.jpg",
      "D"
    )
  );
  dishes.set(
    "D1",
    new Dish(
      "Cerveza",
      2,
      "Cerveza Mahou 5 estrellas en botellin de 33cl",
      ["Agua", "Malta de cebada", "Maíz", "Lúpulo"],
      "Platos/Bebida/Cerveza.jpg",
      "D"
    )
  );
  dishes.set(
    "D2",
    new Dish(
      "Refrescos",
      3,
      "Coca-Cola Normal o Zero o Light, Fanta de Naranja o de Limon, Aquarius de Naranja o de Limon, Trina de Naranja,",
      [
        "Coca-Cola Normal",
        "Coca-Cola Zero",
        "Coca-Cola Light",
        "Fanta de Naranja",
        "Fanta de Limon",
        "Aquarius de Naranja",
        "Aquarius de Limón",
        "Trina de Naranja",
      ],
      "Platos/Bebida/Refrescos.jpg",
      "D"
    )
  );
  dishes.set(
    "D3",
    new Dish(
      "Café",
      1,
      "Café 100% natural hecho en cafetera moka italiana",
      ["Café de cuba", "Azucar", "Leche", "Agua"],
      "Platos/Bebida/Cafe.jpg",
      "D"
    )
  );
  dishes.set(
    "D4",
    new Dish(
      "Vino Pasion de Bobal",
      7.95,
      "Vino ecologico con origen en viñedos de más de 60 años ",
      ["Agua", "Alcohol", "Glucosa y fructosa"],
      "Platos/Bebida/VinoBarato.jpg",
      "D"
    )
  );
  dishes.set(
    "D5",
    new Dish(
      "Vino Teso La Monja",
      1272,
      "Vino de gran calidad cultivado segun los principios de la biodinámica",
      ["Agua", "Alcohol", "Glucosa y fructosa"],
      "Platos/Bebida/VinoCaro.jpg",
      "D"
    )
  );
}

function changePage(mode, page, nextOrPrevious) {
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
      moreInfo.innerHTML = `<button id="Button${i}" onclick="modifyDish('${
        mode + (n + i)
      }')">Modificar</button>`; //Create the button
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

function showIngredientsList(key) {
  //Delete the previous list and make it again with all the elements from the list got from the dish got from the key
  dish = dishes.get(key);
  ingredients = dish.getAtributes();
  e = document.getElementById("IngredientsList");
  e.innerHTML = ``;
  ingredients.forEach((i) => printIngredient(i, key));
}

function printIngredient(ingredient, key) {
  //Add to the IngredientsList the ingredient
  //The key is required for the delete button
  e = document.getElementById("IngredientsList");
  e.innerHTML += `<div>
    ${ingredient} 
    <button onclick="deleteIngredient('${ingredient}','${key}')">Eliminar</button>
  <div>`;
}

function deleteIngredient(ingredient, key) {
  //Delete the ingredient from the dish got from the key and then update the list
  dish = dishes.get(key);
  list = dish.getAtributes();
  list.splice(list.indexOf(ingredient), 1);
  showIngredientsList(key);
}

function newDish(mode) {
  //Hide the Menu and show the form
  //Create a default dish that will be edited or deleted
  //Update the page buttons
  e = document.getElementById("Menu");
  e.style.display = "none";
  e = document.getElementById("Form");
  e.style.display = "block";

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
  showIngredientsList(mode + (Dish.getAmount(mode) - 1));

  key = mode + (Dish.getAmount(mode) - 1);
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

function backButton(key, opt, copyArray) {
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

function backToMenu() {
  //Hide the Form and return to the normal mode page 0 (default page)
  e = document.getElementById("Menu");
  e.style.display = "block";
  showDishes(dishes, 0, "N");
  updateArrows("N", 0);
  changeMenuButtons("Normal", "Vegan", "Drink");

  document.getElementById("Name").value = "";
  document.getElementById("Price").value = "";
  document.getElementById("Description").value = "";
  document.getElementById("Ingredient").value = "";
  e = document.getElementById("Form");
  e.style.display = "none";
}

function saveNewDish(key, opt, copyArray) {
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

function addNewIngredient(key) {
  //Add an ingredient to the dish got from the key and refresh the list
  dishes.get(key).addAtribute(document.getElementById("Ingredient").value);
  showIngredientsList(key);
}

function modifyDish(key) {
  e = document.getElementById("Menu");
  e.style.display = "none";
  e = document.getElementById("Form");
  e.style.display = "block";

  document.getElementById("Name").value = dishes.get(key).getName();
  document.getElementById("Price").value = dishes.get(key).getPrice();
  document.getElementById("Description").value = dishes
    .get(key)
    .getDescription();
  showIngredientsList(key);

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
