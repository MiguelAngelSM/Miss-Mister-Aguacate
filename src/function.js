export function changeDisplay(modify) {
    let add = document.getElementById("AddImage");
    let form  = document.getElementById("FormImage");

    if(modify){
        add.style.display = "none";
        form.style.display = "block";
    } else {
        add.style.display = "block";
        form.style.display = "none";
    }
}
