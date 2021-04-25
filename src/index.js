
console.log('%c HI', 'color: firebrick')

 document.addEventListener("DOMContentLoaded", function a () {
loadImages()

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


function loadbreed() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  document.getElementsById("dog-breeds")
fetch(breedUrl)
// .then(res => res.json())
// .then ((json) => { console.log(json)
// 
// }

}
