
//navbar
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      document.getElementById('navbar_top').classList.add('fixed-top');
      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar_top').classList.remove('fixed-top');
      // remove padding top from body
      document.body.style.paddingTop = '0';
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var myScrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: "#navbar_top"
  })
});
//carosel
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: true,
  pause: false,
  keyboard: true
})
//modal
$("#modalForm").on('show.bs.modal', function(event) {
  var button = $(event.relatedTarget); //Button that triggered the modal
  const email = button.data('email') //need to find the button and get email
  const nume = button.data('nume') //need to find the button and get name
  $(".modal-body #email").val( email );
  $(".modal-body #parola").val( nume );
  
  
 
})