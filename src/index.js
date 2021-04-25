
console.log('%c HI', 'color: firebrick')
let breeds= [];
 document.addEventListener("DOMContentLoaded", function a () {
loadImages()
loadBreed()
 });

function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(res=> res.json())
    .then(results => {
      results.message.forEach(image => addImage(image))
    });
}
function addImage(dogPicUrl) {
  let container = document.querySelector('#dog-image-container');
let newImageEl = document.createElement('img');
newImageEl.src=dogPicUrl
container.appendChild(newImageEl)
}


function loadBreed() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(breedUrl)

.then(res => res.json())
.then (results => {
  breeds=Object.keys(results.message)
  breeds.forEach(breed => addBreed(breed))
  console.log(breeds)


});
}
let ul = document.querySelector('#dog-breeds');
function addBreed(breed) {
  
  let li = document.createElement('li');
  li.innerText = breed;


  ul.appendChild(li);
   li.addEventListener('click', function(){
   li.style.color = 'red';
 });
}
let dropdown=document.querySelector("#breed-dropdown")
function filter() {
dropdown.addEventListener('change',event {
let letter= event.target.value
  const filtered =breeds.filter(wordsss => startsWith(letter));

});
 }
//
 // function loadBreedOptions() {
//   const breedUrl = 'https://dog.ceo/api/breeds/list/all'
//   fetch(breedUrl)
//     .then(res => res.json())
//     .then(results => {
//
//       breeds = Object.keys(results.message);
//       updateBreedList(breeds);
//       addBreedSelectListener();
//     });
// }
//
// function updateBreedList(breeds) {
//   let ul = document.querySelector('#dog-breeds');
//   removeChildren(ul);
//   breeds.forEach(breed => addBreed(breed));
// }
//
// function removeChildren(element) {
//   let child = element.lastElementChild;
//   while (child) {
//     element.removeChild(child);
//     child = element.lastElementChild;
//   }
// }
//
// function selectBreedsStartingWith(letter) {
//   updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
// }
//
// function addBreedSelectListener() {
//   let breedDropdown = document.querySelector('#breed-dropdown');
//   breedDropdown.addEventListener('change', function (event) {
//     selectBreedsStartingWith(event.target.value);
//   });
// }
//
