// var carouselWidth = $('.carousel-inner').scrollWidth;
// var cardWidth = $('.carousel-item').width();

// var scrollPosition = 0;
// $('.carousel-control-next').on('click', function(){
//     if(scrollPosition < (carouselWidth- (cardWidth*4))){
//         console.log('next');
//         scrollPosition = scrollPosition + cardWidth;
//         $('.carousel-inner').animate({scrollLeft: scrollPosition},
//             600);
//     }
    
// });

// $('.carousel-control-prev').on('click', function(){
//     if(scrollPosition > 0){
//         console.log('prev');
//         scrollPosition = scrollPosition - cardWidth;
//         $('.carousel-inner').animate({scrollLeft: scrollPosition},
//             600);
//     }
    
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
    document.querySelector('#info').innerHTML =  (event.to + 1) + "/3";
    console.log(event)
   
    // do something...
  })