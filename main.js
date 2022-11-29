//Import functions from the modules
import {backButton,deleteIngredient,saveDish} from './Modules/forms.js';
import {carousel} from './Modules/carousel.js';
import {changePage,changeMenuButtons,changeMode,showDishes,showSpecificDish,newDish} from './Modules/mainPage.js';
import {goToMainPage,deleteDish} from './Modules/infoPage.js';

//First Page Load
document.addEventListener("DOMContentLoaded", function(){
    showDishes(0, "N"); //It will charge the normal mode at page 0 by default
    carousel();
 });


//Window will let html use the functions
window.changePage = changePage;
window.carousel = carousel;
window.changeMenuButtons=changeMenuButtons;
window.changeMode=changeMode;
window.showDishes=showDishes;
window.showSpecificDish=showSpecificDish;
window.deleteIngredient=deleteIngredient;
window.newDish=newDish;
window.saveDish=saveDish;
window.goToMainPage=goToMainPage;
window.deleteDish=deleteDish;
window.backButton=backButton;