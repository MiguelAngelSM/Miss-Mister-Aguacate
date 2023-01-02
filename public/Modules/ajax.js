const NUM_RESULTS = 4;

let page = 0;

/**
 * It will change the page depending on the direction 
 * It will led the user change the page if it is possible else it will send an alert
 *
 * @param {String} type of the page wanted to be loaded
 * @param {Number} direction that if its value is -1 it goes to the previous page and if 1 it goes to the next page
 */
export async function changePage(type, direction) {
  //This is to get the amount of dishes of an specific type
  let response = await fetch(`/calculateAmount?type=${type}`);
  response = await response.json();
  const dishesAmount = response.amount;
  if (
    (direction === 1 && page+1< dishesAmount / NUM_RESULTS) ||
    (direction === -1 && page !== 0)
  ) {
    const from = (page + direction) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    const response = await fetch(`/dishes?from=${from}&to=${to}&type=${type}`);

    const newDishes = await response.text();

    const dishesDiv = document.getElementById("Dishes");

    dishesDiv.innerHTML = newDishes;

    page += direction;
  }else{
    alert("No hay más platos en esa dirección");
  }
}