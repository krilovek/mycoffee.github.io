$(document).ready(function () {
   $('.product__slider').slick({
      arrows: true,
      dots: false,
      slidesToShow: 2,
      autoplay: true,
      pauseOnHover: true,
      pauseOnFocus: true,
      variableWidth: true,
      asNavFor: ".product__slider_two",
      responsive: [{
         breakpoint: 900,
         settings: {
            arrows: false,
         }
      }]
   });
   $('.product__slider_two').slick({
      arrows: false,
      dots: false,
      slidesToShow: 2,
      autoplay: true,
      pauseOnHover: true,
      pauseOnFocus: true,
      variableWidth: true,
      asNavFor: ".product__slider",
   })

   $('.tabs-triggers__item').click(function (e) {
      e.preventDefault();

      $('.tabs-triggers__item').removeClass('tabs-triggers__item--active');
      $('.tabs-content__item').removeClass('tabs-content__item--active');
      $(this).addClass('tabs-triggers__item--active');
      $($(this).attr('href')).addClass('tabs-content__item--active')
   })
   $('.tabs-triggers__item:first').click();

   $('.combo__slider').slick({
      arrows: false,
      dots: false,
      slidesToShow: 2,
      autoplay: true,
      pauseOnHover: true,
      pauseOnFocus: true,
      variableWidth: true,
      responsive: [{
         breakpoint: 900,
         settings: {
            arrows: false,
         }
      }]
   });
});