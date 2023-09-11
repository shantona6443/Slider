$('.banner').slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  nextArrow:'<i class="fa-solid fa-arrow-right next"></i>',
  prevArrow:'<i class="fa-solid fa-arrow-left prev"></i>',
  asNavFor: ".banner2"
});
$('.banner2').slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  nextArrow:'<i class="fa-solid fa-arrow-right next"></i>',
  prevArrow:'<i class="fa-solid fa-arrow-left prev"></i>',
  asNavFor: ".banner"
});
