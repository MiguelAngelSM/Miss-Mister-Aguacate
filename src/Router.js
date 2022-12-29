import express from 'express';
import * as dishes from './dish.js';
import * as functions from './function.js';
const router = express.Router();

router.get('/menu', (req, res) => {

    res.render('menu', {
        dishes: dishes.getDishes()
    });
});

router.get('/infoDish/:n/form', (req, res) => {
    let dish = dishes.getDish(req.params.n);
    let ingredients = dishes.getAtributes(req.params.n);
    res.render('form', {dish,ingredients});
    functions.changeDisplay(false);
});

router.get('/menu/form/:type', (req, res) => {
    let dish = new dishes.Dish("", "", "", [], "", req.params.type[0]);
    let ingredients = dish.getAtributes();
    res.render('form', {dish,ingredients});
});

router.get('/infoDish/:n', (req, res) => {
    let dish = dishes.getDish(req.params.n);
    let ingredients = dishes.getAtributes(req.params.n);
    res.render('infoDish', {dish,ingredients});
    functions.changeDisplay(true);
});

export default router;