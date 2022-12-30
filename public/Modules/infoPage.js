//Imports from other modules
//Functions of this module


export function modifyDish(key) {
  //It will change to the form for modifying the dish
  //It will hide the add image option and the infoDish menu
  //It will disable the name cause it must not be changed due to the design
  //It will fill the inputs with the previous info but it could be changed
  //It will print the ingredients list too
  //It will upload the buttons from that menu

  let e = document.getElementById("AddImage");
  e.style.display = "none";
  document.getElementById("FormImage").style.display = "block";

  
}