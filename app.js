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
dishes[0] = new Dish("Plato 1", 10, "Plato delicioso", [], "Imagenes/vegano.png");
dishes[1] = new Dish("Plato 2", 9, "Plato delicioso", [], "Imagenes/vegano.png");
dishes[2] = new Dish("Plato 3", 8, "Plato delicioso", [], "Imagenes/vegano.png");
dishes[3] = new Dish("Plato 4", 7, "Plato delicioso", [], "Imagenes/vegano.png");
dishes[4] = new Dish("Plato 5", 6, "Plato delicioso", [], "Imagenes/vegano.png");

page=1;
showDishes(dishes, page);


function showDishes(dishes, page) {
    n = page * 4; //page*4 is to be placed in the elements of each page cause each page has 4 dishes
    for (i = 0; i < 4; i++) {
        if (dishes[n + i]) {//undefined is false
            let img = document.getElementById("Image" + i);//Refresh Image
            img.innerHTML = '<img src ="' + dishes[n + i].getImg() + '" class="img-responsive" width="100%" height="100%"></img>';

            let name = document.getElementById("Name" + i);//Refresh Name
            name.innerHTML = '<p>' + dishes[n + i].getName() + '</p>';

            let price = document.getElementById("Price" + i);//Refresh Price
            price.innerHTML = '<p>' + dishes[n + i].getPrice() + '$</p>';

            let moreInfo = document.getElementById("Info" + i);//Refresh Button
            moreInfo.innerHTML = `<button id="Button${i}" onclick="showSpecificDish(${i})">Mas info</button>` //Create the button
        }
        else {
            let img = document.getElementById("Image" + i);//Refresh Image
            img.innerHTML = '<img src ="imagenes/Plato.png" class="img-responsive" width="100%" height="100%"></img>'; //Prints a default image when there are no dishes

            let name = document.getElementById("Name" + i);//Refresh Name
            name.innerHTML = '<p>No hay plato</p>'; //Prints a default name

            let price = document.getElementById("Price" + i);//Print a default price
            price.innerHTML = '<p>???$</p>';

            let moreInfo = document.getElementById("Info" + i);//Refresh Button
            moreInfo.innerHTML = `<button id="Button ${i}" onclick="confirm('No implementado ${n+i}')">Mas info</button>` //newDish() //Print a button to create a new dish
        }

    }
}
function showSpecificDish(i) {
    console.log(dishes[page*4+parseInt(i)]);
}

function newDish() {
    alert("No esta inplementada");
}