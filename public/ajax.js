const NUM_RESULTS = 4;

let loadMoreRequests = 0;

export async function loadMore(){

    const from = (loadMoreRequests+1) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    const response = await fetch(`/platos?from=${from}&to=${to}`);

    const newplatos = await response.text();
  
    const platosDiv = document.getElementById("platos");

    platosDiv.innerHTML += newplatos;

    loadMoreRequests++;
}