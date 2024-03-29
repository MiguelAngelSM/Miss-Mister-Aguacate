//Class
export class Dish {
  name;
  price;
  description;
  ingredients = new Set(); //The ingredients
  img; //image link
  type;
  id;

  constructor(name, price, description, ingredients, img, type) {
    this.setName(name);
    this.setPrice(price);
    this.setDescription(description);
    this.setIngredients(ingredients);
    this.setImg(img);
    this.setType(type);
  }

  getType() {
    return this.type;
  }
  setType(value) {
    this.type = value;
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
  getIngredients() {
    return this.ingredients;
  }
  setIngredients(value) {
    this.ingredients = new Set(value);
  }
  getImg() {
    return this.img;
  }
  setImg(value) {
    this.img = value;
  }
  getId() {
    return this.id;
  }
  setId(value) {
    this.id = value;
  }
  addAtribute(value) {
    this.ingredients.add(value);
  }
  updateAtributes(price, desc, ingredients) {
    this.price = price;
    this.description = desc;
    this.setIngredients(ingredients);
  }
}

export let dishesVegan = new Map(); //Map of Vegan dishes
export let dishesNormal = new Map(); //Map of Normal dishes
export let dishesDrinks = new Map(); //Map of Drinks
let nextIdVegan = 0; //Id of Vegan dishes
let nextIdNormal = 0; //Id of Normal dishes
let nextIdDrinks = 0; //Id of Drinks

/**
 *
 * @param {String} type
 * @returns amount (Number) of dishes of the selected type
 */
export function getAmount(type) {
  let amount;

  switch (type) {
    case "Normal":
      amount = dishesNormal.size;
      break;
    case "Vegano":
      amount = dishesVegan.size;
      break;
    case "Bebida":
      amount = dishesDrinks.size;
      break;
  }

  return amount;
}

/**
 * The dish will be added to the specific Map depending on its type
 *
 * @param {Dish} dish to be saved
 */
export function addDish(dish) {
  let id;
  switch (dish.type) {
    case "Vegano":
      id = nextIdVegan++;
      dish.setId(id);
      dishesVegan.set(id.toString(), dish);
      break;
    case "Normal":
      id = nextIdNormal++;
      dish.setId(id);
      dishesNormal.set(id.toString(), dish);
      break;
    case "Bebida":
      id = nextIdDrinks++;
      dish.setId(id);
      dishesDrinks.set(id.toString(), dish);
      break;
  }
}

/**
 * It select the dish from the specific Map depending on the type
 *
 * @param {String} type of the required dish
 * @param {Number} id of the required dish
 * @returns the dish (Dish) required
 */
export function getDish(type, id) {
  let dish;
  switch (type) {
    case "Vegano":
      dish = dishesVegan.get(id.toString());
      break;
    case "Normal":
      dish = dishesNormal.get(id.toString());
      break;
    case "Bebida":
      dish = dishesDrinks.get(id.toString());
      break;
  }
  return dish;
}

/**
 * It gets an array of dishes from from (value) to to (value) of an specific type
 *
 * @param {String} type of the dishes required
 * @param {Number} from initial of the required subSelection
 * @param {Number} to end of the required subSelection
 * @returns an array of one of the Maps depending on the type
 */
export function getDishes(type, from, to) {
  let values;
  switch (type) {
    case "Vegano":
      values = [...dishesVegan.values()];
      break;
    case "Normal":
      values = [...dishesNormal.values()];
      break;
    case "Bebida":
      values = [...dishesDrinks.values()];
      break;
  }
  if (from !== undefined) {
    values = values.slice(from, to);
  }
  return values;
}

/**
 *
 * @param {String} type of the dish of the required ingredients
 * @param {String} id of the dish of the required ingredients
 * @returns
 */
export function getIngredients(type, id) {
  return [...getDish(type, id).getIngredients()];
}

/**
 *
 * @param {String} type of the dish deleted
 * @param {String} id of the dish deleted
 */
export function deleteDish(type, id) {
  switch (type) {
    case "Vegano":
      dishesVegan.delete(id);
      break;
    case "Normal":
      dishesNormal.delete(id);
      break;
    case "Bebida":
      dishesDrinks.delete(id);
      break;
  }
}

/**
 * It will call a function from the dish that changes new price, description and ingredients list to the news
 *
 * @param {String} type of the dish modified
 * @param {String} id of the dish modified
 * @param {String} price new
 * @param {String} desc new
 * @param {String} ingredients new
 */
export function updateAtributes(type, id, price, desc, ingredients) {
  let dish = getDish(type, id);
  dish.updateAtributes(price, desc, ingredients);
}

//Deafult dishes definition
//7 Normal dishes by default
addDish(
  new Dish(
    "Hamburguesa completa",
    5,
    "Hamburguesa completa con carne mixta, lechuga, tomate, cebolla y queso. Salsas a elegir entre mayonesa, kétchup, mostaza y salsa BBQ. ¡INCLUYE PATATAS FRITAS O DELUXE!",
    [
      "Carne mixta de ternera y cerdo",
      "Cebolla dulce",
      "Lechuga iceberg",
      "Tomate",
      "Queso cheddar",
      "Kétchup Heinz",
      "Mayonesa Hacendado",
      "Mostaza",
      "Salsa Barbacoa",
    ],
    "Platos/Normal/Burguer.jpg",
    "Normal"
  )
);
addDish(
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
      "Jamón Serrano",
      "Queso de cabra",
    ],
    "Platos/Normal/Pizza.jpg",
    "Normal"
  )
);
addDish(
  new Dish(
    "Macarrones con albóndigas",
    4,
    "Deliciosos macarrones con tomate con sabrosas albóndigas hechas al estilo de la abuela",
    ["Macarrones", "Tomate frito natural", "Albóndigas de carne mixta"],
    "Platos/Normal/Macarrones.jpg",
    "Normal"
  )
);
addDish(
  new Dish(
    "Pollo al pesto",
    7,
    "Delicioso plato de pollo al pesto al puro estilo sevillano",
    [
      "Macarrones hélice",
      "Pollo a la plancha",
      "Mozzarella",
      "Pesto",
      "Tomates Cherry",
    ],
    "Platos/Normal/Pesto.jpg",
    "Normal"
  )
);
addDish(
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
    "Normal"
  )
);
addDish(
  new Dish(
    "Tallarines chinos con setas y pollo",
    3,
    "Deliciosos tallarines fritos hechos por un hombre de las tierras del Quijote",
    ["Tallarines", "Champiñones", "Pollo a la plancha", "Salsa de soja"],
    "Platos/Normal/Tallarines.jpg",
    "Normal"
  )
);
addDish(
  new Dish(
    "Pescado con papas",
    4,
    "Podría parecer que es una copia del 'Fish&Chips' inglés, pero no, este pescado con papas es mejor gracias a nuestro chef valenciano que pone su toque culinario",
    ["Filete de merluza a la plancha", "Patatas fritas", "Cebolla", "Pimiento"],
    "Platos/Normal/Pescado.jpg",
    "Normal"
  )
);
//5 Vegan dishes by default
addDish(
  new Dish(
    "Hamburguesa vegana",
    5,
    "Deliciosa hamburguesa vegana hecha para los amantes de los sabores exóticos",
    [
      "'Carne' Beyond",
      "Cebolla morada",
      "Rúcula",
      "Aguacate",
      "Plátano macho frito",
      "Salsa secreta de la casa",
    ],
    "Platos/Vegano/BurguerVegana.jpg",
    "Vegano"
  )
);
addDish(
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
    "Platos/Vegano/EnsaladaVegana.jpg",
    "Vegano"
  )
);
addDish(
  new Dish(
    "Macarrones con tomate y queso",
    4,
    "Macarrones con tomate y queso 100% vegano",
    ["Macarrones", "Tomate frito natural", "Queso vegano"],
    "Platos/Vegano/PastaVegana.jpg",
    "Vegano"
  )
);
addDish(
  new Dish(
    "Tarta de Manzana",
    2,
    "Dulce postre elaborado por nuestra chef mostoleña",
    ["Manzanas"],
    "Platos/Vegano/Tarta.jpg",
    "Vegano"
  )
);
addDish(
  new Dish(
    "Pizza vegana",
    8,
    "Deliciosa pizza vegana para los amantes de la naturaleza",
    [
      "Champiñones",
      "Base de tomate y queso vegano",
      "Maíz",
      "Queso vegano en rodajas",
      "Albahaca",
    ],
    "Platos/Vegano/PizzaVegana.jpg",
    "Vegano"
  )
);
//6 Drinks by default
addDish(
  new Dish(
    "Agua",
    2,
    "Agua fresca de Solan de Cabras edición Rocas del Manantial en botella de vidrio de 70cl",
    ["Agua de manantial"],
    "Platos/Bebida/Agua.jpg",
    "Bebida"
  )
);
addDish(
  new Dish(
    "Cerveza",
    2,
    "Cerveza Mahou 5 estrellas en botellín de 33cl",
    ["Agua", "Malta de cebada", "Maíz", "Lúpulo"],
    "Platos/Bebida/Cerveza.jpg",
    "Bebida"
  )
);
addDish(
  new Dish(
    "Refrescos",
    3,
    "Coca-Cola Normal o Zero o Light, Fanta de Naranja o de Limón, Aquarius de Naranja o de Limón, Trina de Naranja,",
    [
      "Coca-Cola Normal",
      "Coca-Cola Zero",
      "Coca-Cola Light",
      "Fanta de Naranja",
      "Fanta de Limón",
      "Aquarius de Naranja",
      "Aquarius de Limón",
      "Trina de Naranja",
    ],
    "Platos/Bebida/Refrescos.jpg",
    "Bebida"
  )
);
addDish(
  new Dish(
    "Café",
    1,
    "Café 100% natural hecho en cafetera moka italiana",
    ["Café de Cuba", "Azúcar", "Leche", "Agua"],
    "Platos/Bebida/Cafe.jpg",
    "Bebida"
  )
);
addDish(
  new Dish(
    "Vino Pasión de Bobal",
    7.95,
    "Vino ecológico con origen en viñedos de más de 60 años ",
    ["Agua", "Alcohol", "Glucosa y fructosa"],
    "Platos/Bebida/VinoBarato.jpg",
    "Bebida"
  )
);
addDish(
  new Dish(
    "Vino Teso La Monja",
    1272,
    "Vino de gran calidad cultivado según los principios de la biodinámica",
    ["Agua", "Alcohol", "Glucosa y fructosa"],
    "Platos/Bebida/VinoCaro.jpg",
    "Bebida"
  )
);
