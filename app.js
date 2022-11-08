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

let dishes = [];//Array of dishes
dishes[0] = new Dish("Albondigas", 10, "Plato delicioso", [], "Platos/Albondigas.jpg");
dishes[1] = new Dish("Lasaña", 9, "Plato delicioso", [], "Platos/Lasaña.jpg");
dishes[2] = new Dish("Lentejas", 8, "Plato delicioso", [], "Platos/Lentejas.jpeg");
dishes[3] = new Dish("Pollo al pesto", 7, "Plato delicioso", [], "Platos/Pesto.jpg");
dishes[4] = new Dish("Pizza 0% vegana", 6, "Plato delicioso", [], "Platos/Pizza.jpg");
dishes[5] = new Dish("Tallarines chinos con setas y pollo", 5, "Plato delicioso", [], "Platos/Tallarines.png"); 

page = 0;
showDishes(dishes, page);


function showDishes(dishes, page) {
    n = page * 4; //page*4 is to be placed in the elements of each page cause each page has 4 dishes
    for (i = 0; i < 4; i++) {
        if (dishes[n + i]) {//undefined is false
            let img = document.getElementById("Image" + i);//Refresh Image
            img.innerHTML = '<img src ="' + dishes[n + i].getImg() + '" class="dish-image img-responsive"></img>';

            let name = document.getElementById("Name" + i);//Refresh Name
            name.innerHTML = '<p>' + dishes[n + i].getName() + '</p>';

            let price = document.getElementById("Price" + i);//Refresh Price
            price.innerHTML = '<p>' + dishes[n + i].getPrice() + '$</p>';

            let moreInfo = document.getElementById("Info" + i);//Refresh Button
            moreInfo.innerHTML = `<button id="Button${i}" onclick="showSpecificDish(${i})">Mas info</button>` //Create the button
        }
        else {
            let img = document.getElementById("Image" + i);//Refresh Image
            img.innerHTML = '<img src ="Platos/Plato.png" class="dish-image img-responsive"></img>'; //Prints a default image when there are no dishes

            let name = document.getElementById("Name" + i);//Refresh Name
            name.innerHTML = '<p>No hay plato</p>'; //Prints a default name

            let price = document.getElementById("Price" + i);//Print a default price
            price.innerHTML = '<p>???$</p>';

            let moreInfo = document.getElementById("Info" + i);//Refresh Button
            moreInfo.innerHTML = `<button id="Button ${i}" onclick="confirm('No implementado ${n + i}')">Mas info</button>` //newDish() //Print a button to create a new dish
        }

    }
}
function showSpecificDish(i) {
    console.log(dishes[page * 4 + parseInt(i)]);
}

function newDish() {
    alert("No esta inplementada");
}