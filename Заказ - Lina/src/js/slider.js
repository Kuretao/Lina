$(function()
{

$('.block5-slider').slick({
  
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2500,
  prevArrow: "<img src='src/assets/img/block-5/l.png' class='prev' alt='1'>",
  nextArrow: "<img src='src/assets/img/block-5/r.png' class='next' alt='2'>",

  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint:480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false,
        dots: true
      }
    }
  ]
})

})