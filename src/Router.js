import express from "express";
import { __dirname } from "./dirname.js";
import * as dishService from "./dishService.js";
const router = express.Router();

router.get("/menu/:type", (req, res) => {
  const dishes = dishService.getDishes(req.params.type, 0, 4);
  res.render("menu", {
    dishes: dishes,
    typeReturnPage: req.params.type,
  });
});

router.get("/dishes", (req, res) => {
  const from = parseInt(req.query.from);
  const to = parseInt(req.query.to);
  const type = req.query.type;
  let dishes = dishService.getDishes(type, from, to);
  res.render("dishes", {
    dishes: dishes,
  });
});

router.get("/infoDish/:n/modify", (req, res) => {
  let dish = dishService.getDish(req.query.type, req.params.n);
  let ingredients = dishService.getIngredients(req.query.type, req.params.n);
  let objectArray = [];
  for (let i = 0; i < ingredients.length; i++) {
    objectArray[i] = { ingredient: ingredients[i] };
  }
  let index = 0;
  let data = {
    dish: dish,
    ingredients: objectArray,
    type: dish.type,
    increaseIndex: function () {
      return index++;
    },
    actualIndex: function () {
      return index;
    },
  };
  res.render("form", data);
});

router.get("/create", (req, res) => {
  let type = req.query.type;
  let dish = new dishService.Dish("", "", "", [], "../", type);
  dish.id = "";
  let ingredients = [...dish.getIngredients()];
  res.render("form", { dish, ingredients, type });
});

router.get("/infoDish/:n", (req, res) => {
  let dish = dishService.getDish(req.query.type, req.params.n);
  let ingredients = dishService.getIngredients(req.query.type, req.params.n);
  res.render("infoDish", { dish, ingredients });
});

router.get("/infoDish/:n/deleted", (req, res) => {
  dishService.deleteDish(req.query.type, req.params.n);
  res.render("deletedDish", { type: req.query.type });
});

router.post("/dish/saved", (req, res) => {
  let name = req.body.name;
  let price = req.body.price;
  let desc = req.body.description;
  let ingredients = [].concat(req.body.ingredient || []); //It forces it to be an array
  let id = req.body.id;
  let type;
  if (id) {
    type = req.body.actual_type;
    dishService.updateAtributes(type, id, price, desc, ingredients); //image,name and type should not be changeable
  } else {
    type = req.body.type;
    let image = "Iconos/Plato.png";
    if (req.files) {
      let file = req.files.imageForm;
      let fileName = file.name;
      file.mv("../public/Platos/" + type + "/" + fileName, function (err) {
        console.log(err);
      });
      image = "Platos/" + type + "/" + fileName;
    }
    dishService.addDish(
      new dishService.Dish(name, price, desc, ingredients, image, type)
    );
  }
  res.render("saved", { type });
});

export default router;