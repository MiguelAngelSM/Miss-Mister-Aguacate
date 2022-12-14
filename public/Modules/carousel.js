//Some previous info for the function
let Index = 0;
let content = document.getElementsByClassName("Photo");

//Functions of this module
export function carousel() {
  //It will change between some images each 5 seconds
  //It will change the display style of all the images and only one will be block, the other will be none

  for (let i = 0; i < content.length; i++) {
    if (i == Index) {
      content[i].style.display = "block";
    } else {
      content[i].style.display = "none";
    }
  }
  if (Index >= content.length - 1) {
    Index = 0;
  } else {
    Index++;
  }
  setTimeout(carousel, 5000); 
}
