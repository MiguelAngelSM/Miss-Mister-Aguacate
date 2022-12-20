import express from 'express';
import * as dishes from './dish.js';
const router = express.Router();

router.get('/menu', (req, res) => {

    res.render('menu', {
        dishes: dishes.getDishes()
    });
});

export default router;