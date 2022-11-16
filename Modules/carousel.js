//Some previous info for the function
let Index = 0;
let DisplayPictures = ["Cartel.jpg", "Sitio.jpg", "Amigos.jpg", "Mesa.jpg"];

//Functions of this module
export function carousel() {
  //It will change between some images each 5 seconds
  
  let content = document.getElementById("Display");
  content.innerHTML = `<img class="Photo" src="Imagenes/${DisplayPictures[Index]}"></img>`;
  if (Index >= DisplayPictures.length - 1) {
    Index = 0;
  } else {
    Index++;
  }
  setTimeout(carousel, 5000); // Change image every 5 seconds
}
