var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 4000,
  wrap: false,
  pause: true,
  keyboard:true
})