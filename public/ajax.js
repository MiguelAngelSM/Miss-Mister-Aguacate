const NUM_RESULTS = 4;

let page = 0;

/**
 * It will change the page dependign on the direction
 * 
 * @param type of the page wanted to be loaded
 * @param direction that if its value is -1 it goes to the previous page and if 1 it goes to the next page
 */
export async function changePage(type,direction){

    if ( (direction === 1) ||
    (direction === -1 && page !== 0)){
    const from = (page+direction) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    const response = await fetch(`/dishes?from=${from}&to=${to}&type=${type}`);

    const newDishes = await response.text();
  
    const dishesDiv = document.getElementById("dishes");

    dishesDiv.innerHTML = newDishes;

    page+=direction;
    }
}