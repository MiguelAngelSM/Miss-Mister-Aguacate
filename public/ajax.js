const NUM_RESULTS = 4;

let page = 0;

/**
 * It will change the page dependign on the direction
 *
 * @param type of the page wanted to be loaded
 * @param direction that if its value is -1 it goes to the previous page and if 1 it goes to the next page
 */
export async function changePage(type, direction) {
  let response = await fetch(`/calculateAmount?type=${type}`);
  response = await response.json();
  const dishesAmount = response.amount;
  console.log(dishesAmount);
  if (
    (direction === 1 && page+1< dishesAmount / NUM_RESULTS) ||
    (direction === -1 && page !== 0)
  ) {
    const from = (page + direction) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    const response = await fetch(`/dishes?from=${from}&to=${to}&type=${type}`);

    const newDishes = await response.text();

    const dishesDiv = document.getElementById("dishes");

    dishesDiv.innerHTML = newDishes;

    page += direction;
  }else{
    alert("No hay más platos en esa dirección");
  }
}
