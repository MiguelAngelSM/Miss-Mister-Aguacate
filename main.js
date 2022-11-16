//Import functions from the modules
import {deleteIngredient,saveNewDish} from './Modules/forms.js';
import {carousel} from './Modules/carousel.js';
import {changePage,changeMenuButtons,changeMode,showDishes,showSpecificDish,newDish} from './Modules/mainPage.js';
import {modifyDish} from './Modules/infoPage.js';

//First Page Load
showDishes(0, "N"); //It will charge the normal mode at page 0 by default
carousel();

//Window will let html using the functions
window.changePage = changePage;
window.carousel = carousel;
window.changeMenuButtons=changeMenuButtons;
window.changeMode=changeMode;
window.showDishes=showDishes;
window.showSpecificDish=showSpecificDish;
window.deleteIngredient=deleteIngredient;
window.newDish=newDish;
window.saveNewDish=saveNewDish;
window.modifyDish=modifyDish;