//Class
export class Dish {
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

export let dishes = new Map(); //Map of dishes
//The keys will be made by a letter (N for normal dishes, V for vegan dishes and D for drinks) and a number

//Deafult dishes definition
dishes.set(
  "N0",
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
    "Macarrones con albóndigas",
    4,
    "Deliciosos macarrones con tomate con sabrosas albóndigas hechas al estilo de la abuela",
    ["Macarrones", "Tomate frito natural", "Albóndigas de carne mixta"],
    "Platos/Normal/Macarrones con albondigas.jpg",
    "N"
  )
);
dishes.set(
  "N3",
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
    "Podría parecer que es una copia del fish&chips inglés, pero no, este pescado con papas es mejor gracias a nuestro chef valenciano que pone su toque culinario",
    ["Filete de merluza a la plancha", "Patatas fritas", "Cebolla", "Pimiento"],
    "Platos/Normal/Pescado con papas.jpg",
    "N"
  )
);
//7 Normal dishes by default
dishes.set(
  "V0",
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
    "Dulce postre elaborado por nuestra chef mostoleña",
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
      "Maíz",
      "Queso vegano en rodajas",
      "Albahaca",
    ],
    "Platos/Vegano/Pizza vegana.jpg",
    "V"
  )
);
//5 Vegan dishes by default
dishes.set(
  "D0",
  new Dish(
    "Agua",
    2,
    "Agua fresca de Solan de Cabras edición Rocas del Manantial en botella de vidrio de 70cl",
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
    "Cerveza Mahou 5 estrellas en botellín de 33cl",
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
    "D"
  )
);
dishes.set(
  "D3",
  new Dish(
    "Café",
    1,
    "Café 100% natural hecho en cafetera moka italiana",
    ["Café de Cuba", "Azúcar", "Leche", "Agua"],
    "Platos/Bebida/Cafe.jpg",
    "D"
  )
);
dishes.set(
  "D4",
  new Dish(
    "Vino Pasión de Bobal",
    7.95,
    "Vino ecológico con origen en viñedos de más de 60 años ",
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
    "Vino de gran calidad cultivado según los principios de la biodinámica",
    ["Agua", "Alcohol", "Glucosa y fructosa"],
    "Platos/Bebida/VinoCaro.jpg",
    "D"
  )
);
//6 Drinks by default
