class Dish {
    name;
    price;
    description;
    atributes = [];
    img; //image link

    constructor(name, price, description, atributes, img) {
        this.setName(name);
        this.setPrice(price);
        this.setDescription(description);
        this.setAtributes(atributes);
        this.setImg(img);
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

}

let dishes = new Map();//Array of dishes //N for normal dishes, V for vegan dishes and D for drinks 
dishes.set('N0',new Dish("Albóndigas", 10, "Plato delicioso", [], "Platos/Albondigas.jpg"));
dishes.set('N1',new Dish("Lasaña", 9, "Plato delicioso", [], "Platos/Lasaña.jpg"));
dishes.set('N2',new Dish("Lentejas", 8, "Plato delicioso", [], "Platos/Lentejas.jpeg"));
dishes.set('N3',new Dish("Pollo al pesto", 7, "Plato delicioso", [], "Platos/Pesto.jpg"));
dishes.set('N4',new Dish("Pizza 0% vegana", 6, "Plato delicioso", [], "Platos/Pizza.jpg"));
dishes.set('N5',new Dish("Tallarines chinos con setas y pollo", 5, "Plato delicioso", [], "Platos/Tallarines.png")); 

page = 0;
type = 'N';
showDishes(dishes, page, type);

function showDishes(dishes, page, type) {
    n = page * 4; //page*4 is to be placed in the elements of each page cause each page has 4 dishes
    for (i = 0; i < 4; i++) {
        if  (dishes.get(type + (n+i))){//undefined is false
            let dish = dishes.get(type + (n+i));//Get the dish

            let img = document.getElementById("Image" + i);//Refresh Image
            img.innerHTML = '<img src ="' + dish.getImg() + '" class="dish-image img-responsive"></img>';

            let name = document.getElementById("Name" + i);//Refresh Name
            name.innerHTML = '<p>' + dish.getName() + '</p>';

            let price = document.getElementById("Price" + i);//Refresh Price
            price.innerHTML = '<p>' + dish.getPrice() + '$</p>';

            let moreInfo = document.getElementById("Info" + i);//Refresh Button
            moreInfo.innerHTML = `<button id="Button${i}" onclick="showSpecificDish(${dish})">Mas info</button>` //Create the button
        }
        else {
            let img = document.getElementById("Image" + i);//Refresh Image
            img.innerHTML = '<img src ="Iconos/Plato.png" class="dish-image img-responsive"></img>'; //Prints a default image when there are no dishes

            let name = document.getElementById("Name" + i);//Refresh Name
            name.innerHTML = '<p>No hay plato</p>'; //Prints a default name

            let price = document.getElementById("Price" + i);//Print a default price
            price.innerHTML = '<p>???$</p>';

            let moreInfo = document.getElementById("Info" + i);//Refresh Button
            moreInfo.innerHTML = `<button id="Button ${i}" onclick="newDish()')">Mas info</button>` //newDish() //Print a button to create a new dish
        }
    }
}
function showSpecificDish(dish) {
    console.log(dish);
}

function newDish() {
    confirm("No esta inplementada");
}

function changeVeganMode(type){//The argument type is in what type the page was 
    let b = document.getElementById('VeganButton');
    if (type = 'N'){
        b.id = 'NormalButton';
        b.innerHTML = `<button id="NormalMode" class="MenuButton" onclick="changeNormalMode('V')"><img class="menu-header-button img-responsive" src="Iconos/Normal.png"></button>`
        b = document.getElementById('DrinkButton');//Update Button
        b.innerHTML = `<button id="DrinkMode" class="MenuButton" onclick="changeDrinkMode('V')"><img class="menu-header-button img-responsive" src="Iconos/Bebida.png"></button>`
    }
    else{
        b.id = 'DrinkButton';
        b.innerHTML = `<button id="DrinkMode" class="MenuButton" onclick="changeDrinkMode('V')"><img class="menu-header-button img-responsive" src="Iconos/Bebida.png"></button>`
        b = document.getElementById('NormalButton');//Update Button
        b.innerHTML = `<button id="NormalMode" class="MenuButton" onclick="changeNormalMode('V')"><img class="menu-header-button img-responsive" src="Iconos/Normal.png"></button>`
    }
    showDishes(dishes, 0, 'V');//It will start at page 0
}
function changeNormalMode(type){ //The argument type is in what type the page was 
    let b = document.getElementById('NormalButton');
    if (type = 'V'){
        b.id = 'VeganButton';
        b.innerHTML = `<button id="VeganMode" class="MenuButton" onclick="changeVeganMode('N')"><img class="menu-header-button img-responsive" src="Iconos/vegano.png"></button>`
        b = document.getElementById('DrinkButton');//Update Button
        b.innerHTML = `<button id="DrinkMode" class="MenuButton" onclick="changeDrinkMode('N')"><img class="menu-header-button img-responsive" src="Iconos/Bebida.png"></button>`
    }
    else{
        b.id = 'DrinkButton';
        b.innerHTML = `<button id="DrinkMode" class="MenuButton" onclick="changeDrinkMode('N')"><img class="menu-header-button img-responsive" src="Iconos/Bebida.png"></button>`
        b = document.getElementById('VeganButton');//Update Button
        b.innerHTML = `<button id="VeganMode" class="MenuButton" onclick="changeVeganMode('N')"><img class="menu-header-button img-responsive" src="Iconos/vegano.png"></button>`
    }
    showDishes(dishes, 0, 'N');//It will start at page 0
}
function changeDrinkMode(type){//The argument type is in what type the page was 
    let b = document.getElementById('DrinkButton');
    if (type = 'N'){
        b.id = 'NormalButton';
        b.innerHTML = `<button id="NormalMode" class="MenuButton" onclick="changeNormalMode('D')"><img class="menu-header-button img-responsive" src="Iconos/Normal.png"></button>`
        b = document.getElementById('VeganButton');//Update Button
        b.innerHTML = `<button id="VeganMode" class="MenuButton" onclick="changeVeganMode('D')"><img class="menu-header-button img-responsive" src="Iconos/vegano.png"></button>`
    }
    else{
        b.id = 'VeganButton';
        b.innerHTML = `<button id="VeganMode" class="MenuButton" onclick="changeVeganMode('D')"><img class="menu-header-button img-responsive" src="Iconos/vegano.png"></button>`
        b = document.getElementById('NormalButton');//Update Button
        b.innerHTML = `<button id="NormalMode" class="MenuButton" onclick="changeNormalMode('D')"><img class="menu-header-button img-responsive" src="Iconos/Normal.png"></button>`
    }
    showDishes(dishes, 0, 'D');//It will start at page 0
}