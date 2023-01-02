import express from "express";
import { __dirname } from "./dirname.js";
import * as dishService from "./dishService.js";

const router = express.Router();

/**
 * Renders the welcome page (index view)
 */
router.get('/', (req, res) => {

  res.render('index', {

  });
});

/**
 * Renders the menu view of a type (only first 4 dishes)
 */
router.get("/menu/:type", (req, res) => {
  const dishes = dishService.getDishes(req.params.type, 0, 4);
  res.render("menu", {
    dishes: dishes,
    typeReturnPage: req.params.type,
  });
});

/**
 * Render dishes view (only from from (value) to to (value))
 * It is used to charge dishes with ajax
 */
router.get("/dishes", (req, res) => {
  const from = parseInt(req.query.from);
  const to = parseInt(req.query.to);
  const type = req.query.type;
  let dishes = dishService.getDishes(type, from, to);
  res.render("dishes", {
    dishes: dishes,
  });
});

/**
 * Send a JSON object with the amount of dishes of the type required
 */
router.get("/calculateAmount",(req, res) => {
  let amount={amount:dishService.getAmount(req.query.type)};
  res.send(JSON.stringify(amount));
});

/**
 * Renders the form view with the info of the param n
 * The index functions of the object data is for printing the ingredients list with a number
 */
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

/**
 * Renders the form view with a new dish with its fields empty 
 * The type is to put the default selected option
 */
router.get("/create", (req, res) => {
  let type = req.query.type;
  let dish = new dishService.Dish("", "", "", [], "../", type);
  dish.id = "";
  let ingredients = [...dish.getIngredients()];
  res.render("form", { dish, ingredients, type });
});

/**
 * Render the infoDish view with the dish of the param n of the type (req.query)
 */
router.get("/infoDish/:n", (req, res) => {
  let dish = dishService.getDish(req.query.type, req.params.n);
  let ingredients = dishService.getIngredients(req.query.type, req.params.n);
  res.render("infoDish", { dish, ingredients });
});

/**
 * Renders the deletedDish view
 * It will delete the dish of the param n of the type (req.query)
 */
router.get("/infoDish/:n/deleted", (req, res) => {
  dishService.deleteDish(req.query.type, req.params.n);
  res.render("deletedDish", { type: req.query.type });
});

/**
 * Renders the saved view
 * If the id is undefined(false) it is a new dish else it is a modified dish
 */
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