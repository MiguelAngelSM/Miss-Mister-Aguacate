import express from "express";
import * as dishService from "./dishService.js";
const router = express.Router();

router.get("/menu", (req, res) => {
  res.render("menu", {
    dishes: dishService.getDishes(),
  });
});

router.get("/infoDish/:n/form", (req, res) => {
  let dish = dishService.getDish(req.params.n);
  let ingredients = dishService.getIngredients(req.params.n);
  res.render("form", { dish, ingredients });
});

router.get("/menu/form/:type", (req, res) => {
  let dish = new dishService.Dish("", "", "", [], "", req.params.type[0]);
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

router.post("/dish/new", (req, res) => {
  let name = req.body.name;
  let price = req.body.price;
  let desc = req.body.description;
  //not finished
  let image = ""; //req.body.image;
  //console.log(image);
  dishService.addDish(new dishService.Dish(name, price, desc, [], image, "N"));
  res.render("saved");
});

export default router;
