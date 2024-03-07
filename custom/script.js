// document.addEventListener("DOMContentLoaded", function () {
//     var imageElement = document.getElementById("changingImage");
//     console.log(imageElement)
//     var imageArray = ["images/magicSeason.png", "images/1500Promo.PNG"];
//     var currentIndex = 0;

//     function changeImage() {
//         imageElement.src = imageArray[currentIndex];
//         currentIndex = (currentIndex + 1) % imageArray.length;
//     }

//     // Change image every 5 seconds
//     setInterval(changeImage, 5000);
// });


const myCarouselElement = document.querySelector('#carouselExample')

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