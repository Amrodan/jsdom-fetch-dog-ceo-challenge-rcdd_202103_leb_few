//
// console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const div = document.querySelector("#dog-image-container")
// // document.addEventListener("DOMContentLoaded", function a () {
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