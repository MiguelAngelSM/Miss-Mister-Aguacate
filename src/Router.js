import express from 'express';
import * as dishes from './dish.js';
const router = express.Router();

router.get('/menu', (req, res) => {

    res.render('menu', {
        dishes: dishes.getDishes()
    });
});

router.get('/form', (req, res) => {

    res.render('form', {
    });
});

router.get('/infoDish/:n', (req, res) => {
    let dish = dishes.getDish(req.params.n);
    let ingredients = dishes.getAtributes(req.params.n);
    res.render('infoDish', {dish,ingredients});
});

export default router;