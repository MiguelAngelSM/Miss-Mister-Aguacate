const NUM_RESULTS = 4;

let loadMoreRequests = 0;

export async function loadMore(type){

    const from = (loadMoreRequests+1) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    const response = await fetch(`/dishes?from=${from}&to=${to}&type=${type}`);

    const newDishes = await response.text();
  
    const dishesDiv = document.getElementById("dishes");

    dishesDiv.innerHTML += newDishes;

    loadMoreRequests++;
}