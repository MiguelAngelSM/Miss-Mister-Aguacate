const NUM_RESULTS = 4;

let loadMoreRequests = 0;

export async function loadMore(type,direction){

    if ( (direction === 1) ||
    (direction === -1 && loadMoreRequests !== 0)){
    const from = (loadMoreRequests+direction) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    const response = await fetch(`/dishes?from=${from}&to=${to}&type=${type}`);

    const newDishes = await response.text();
  
    const dishesDiv = document.getElementById("dishes");

    dishesDiv.innerHTML = newDishes;

    loadMoreRequests+=direction;
    }
}