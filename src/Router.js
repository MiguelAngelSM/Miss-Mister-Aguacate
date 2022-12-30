import express from "express";
import { __dirname } from "./dirname.js";
import * as dishService from "./dishService.js";
const router = express.Router();

router.get("/menu", (req, res) => {

  const dishes = dishService.getDishes(0,4);

  res.render("menu", {
    dishes: dishes,
  });
});

router.get('/platos', (req, res) => {

  const from = parseInt(req.query.from);
  const to = parseInt(req.query.to);

  const dishes = dishService.getDishes(from,to);

  res.render('platos', {
      dishes: dishes,
  });
});


router.get("/infoDish/:n/modify", (req, res) => {
  let dish = dishService.getDish(req.params.n);
  let ingredients = dishService.getIngredients(req.params.n);
  let objectArray =[];
  for (let i=0;i<ingredients.length;i++){
    objectArray[i]={ingredient:ingredients[i]};
  }
  let index = 0;
  let data = {
    dish: dish,
    ingredients: objectArray,
    increaseIndex: function () {
      return index++;
    },
    actualIndex: function () {
      return index;
    },
  };
  res.render("form", data);
});

router.get("/menu/create", (req, res) => {
  let dish = new dishService.Dish("", "", "", [], "");
  dish.id = "";
  let ingredients = dish.getIngredients();
  res.render("form", { dish, ingredients });
});

router.get("/infoDish/:n", (req, res) => {
  let dish = dishService.getDish(req.params.n);
  let ingredients = dishService.getIngredients(req.params.n);
  res.render("infoDish", { dish, ingredients });
});

router.get("/infoDish/:n/deleted", (req, res) => {
  dishService.deleteDish(req.params.n);
  res.render("deletedDish");
});

router.get("/form/:n/saved", (req, res) => {
  res.render("savedDish");
});

router.post("/dish/saved", (req, res) => {
  let name = req.body.name;
  let price = req.body.price;
  let desc = req.body.description;
  let image = req.body.image;
  let type = req.body.type;
  let ingredients = req.body.ingredient;
  let id = req.body.id;
  if (id) {
    dishService.updateAtributes(id, price, desc, ingredients); //image,name and type should not be changeable
  } else {
    dishService.addDish(
      new dishService.Dish(name, price, desc, ingredients, image, type)
    );
  }
  res.render("saved");
});

export default router;
