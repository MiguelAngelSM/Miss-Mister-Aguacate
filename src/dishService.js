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
    this.ingredients = value;
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
    this.Ingredients.add(value);
  }//just for adding an ingredient to the list
}

export let dishes = new Map(); //Map of dishes
let nextId = 0;
//The keys will be made by a letter (N for normal dishes, V for vegan dishes and D for drinks) and a number of the element
export function addDish(dish) {
  let id = nextId++;
  dish.setId(id);
  dishes.set(id.toString(), dish);
  }
export function getDish(id){
    return dishes.get(id.toString());
  }
export function getDishes(){
    return [...dishes.values()];
  }
export function getIngredients(id){
  return [...getDish(id).getIngredients()];
}
export function deleteDish(id){
  dishes.delete(id);
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
    "N"
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
    "N"
  )
);
addDish(
  new Dish(
    "Macarrones con albóndigas",
    4,
    "Deliciosos macarrones con tomate con sabrosas albóndigas hechas al estilo de la abuela",
    ["Macarrones", "Tomate frito natural", "Albóndigas de carne mixta"],
    "Platos/Normal/Macarrones.jpg",
    "N"
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
    "N"
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
    "N"
  )
);
addDish(
  new Dish(
    "Tallarines chinos con setas y pollo",
    3,
    "Deliciosos tallarines fritos hechos por un hombre de las tierras del Quijote",
    ["Tallarines", "Champiñones", "Pollo a la plancha", "Salsa de soja"],
    "Platos/Normal/Tallarines.jpg",
    "N"
  )
);
addDish(
  new Dish(
    "Pescado con papas",
    4,
    "Podría parecer que es una copia del 'Fish&Chips' inglés, pero no, este pescado con papas es mejor gracias a nuestro chef valenciano que pone su toque culinario",
    ["Filete de merluza a la plancha", "Patatas fritas", "Cebolla", "Pimiento"],
    "Platos/Normal/Pescado.jpg",
    "N"
  )
);
//5 Vegan dishes by default
addDish(
  new Dish(
    "Hamburguesa vegana",
    5,
    "Deliciosa hamburguesa vegana hecha para los amantes de los sabores exóticos",
    new Set([
      "'Carne' Beyond",
      "Cebolla morada",
      "Rúcula",
      "Aguacate",
      "Plátano macho frito",
      "Salsa secreta de la casa",
    ]),
    "Platos/Vegano/BurguerVegana.jpg",
    "V"
  )
);
addDish(
  new Dish(
    "Ensalada vegana",
    3,
    "Plato vegano por defecto en cualquier restaurante",
    new Set([
      "Lechuga iceberg",
      "Cebolla",
      "Tomate",
      "Sal",
      "Aceite",
      "Vinagre",
      "Pepino",
      "Rúcula",
    ]),
    "Platos/Vegano/EnsaladaVegana.jpg",
    "V"
  )
);
addDish(
  new Dish(
    "Macarrones con tomate y queso",
    4,
    "Macarrones con tomate y queso 100% vegano",
    new Set(["Macarrones", "Tomate frito natural", "Queso vegano"]),
    "Platos/Vegano/PastaVegana.jpg",
    "V"
  )
);
addDish(
  new Dish(
    "Tarta de Manzana",
    2,
    "Dulce postre elaborado por nuestra chef mostoleña",
    new Set(["Manzanas"]),
    "Platos/Vegano/Tarta.jpg",
    "V"
  )
);
addDish(
  new Dish(
    "Pizza vegana",
    8,
    "Deliciosa pizza vegana para los amantes de la naturaleza",
    new Set([
      "Champiñones",
      "Base de tomate y queso vegano",
      "Maíz",
      "Queso vegano en rodajas",
      "Albahaca",
    ]),
    "Platos/Vegano/PizzaVegana.jpg",
    "V"
  )
);
//6 Drinks by default
addDish(
  new Dish(
    "Agua",
    2,
    "Agua fresca de Solan de Cabras edición Rocas del Manantial en botella de vidrio de 70cl",
    new Set(["Agua de manantial"]),
    "Platos/Bebida/Agua.jpg",
    "D"
  )
);
addDish(
  new Dish(
    "Cerveza",
    2,
    "Cerveza Mahou 5 estrellas en botellín de 33cl",
    new Set(["Agua", "Malta de cebada", "Maíz", "Lúpulo"]),
    "Platos/Bebida/Cerveza.jpg",
    "D"
  )
);
addDish(
  new Dish(
    "Refrescos",
    3,
    "Coca-Cola Normal o Zero o Light, Fanta de Naranja o de Limón, Aquarius de Naranja o de Limón, Trina de Naranja,",
    new Set([
      "Coca-Cola Normal",
      "Coca-Cola Zero",
      "Coca-Cola Light",
      "Fanta de Naranja",
      "Fanta de Limón",
      "Aquarius de Naranja",
      "Aquarius de Limón",
      "Trina de Naranja",
    ]),
    "Platos/Bebida/Refrescos.jpg",
    "D"
  )
);
addDish(
  new Dish(
    "Café",
    1,
    "Café 100% natural hecho en cafetera moka italiana",
    new Set(["Café de Cuba", "Azúcar", "Leche", "Agua"]),
    "Platos/Bebida/Cafe.jpg",
    "D"
  )
);
addDish(
  new Dish(
    "Vino Pasión de Bobal",
    7.95,
    "Vino ecológico con origen en viñedos de más de 60 años ",
    new Set(["Agua", "Alcohol", "Glucosa y fructosa"]),
    "Platos/Bebida/VinoBarato.jpg",
    "D"
  )
);
addDish(
  new Dish(
    "Vino Teso La Monja",
    1272,
    "Vino de gran calidad cultivado según los principios de la biodinámica",
    new Set(["Agua", "Alcohol", "Glucosa y fructosa"]),
    "Platos/Bebida/VinoCaro.jpg",
    "D"
  )
);