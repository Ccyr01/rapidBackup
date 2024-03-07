
const myCarouselElement = document.querySelector('#carouselExample')
let popup = document.querySelector(".popup");

//popup
function openPop(){
  popup.classList.add("open-popup");
}
function closePop(){
  popup.classList.remove("open-popup");
}

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 5000,
  touch: false
})

document.querySelector("#leftBtn").addEventListener("click", (e)=>{
    carousel.prev();
})

document.querySelector("#rightBtn").addEventListener("click", (e)=>{
    carousel.next();
})

myCarouselElement.addEventListener('slide.bs.carousel', event => {
    document.querySelector('#info').innerHTML =  (event.to + 1) + "/4";
    // console.log(event)
   
    // do something...
  })