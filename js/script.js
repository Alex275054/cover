//burger
$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
   //burger

   //slick
   $('.items').slick({
      arrows: true,
      // dots: false,
      // slidesToShow: 3,
      // speed: 1000,
      // responsive: [
      // 	{
      // 		breakpoint: 805,
      // 		settings: {
      // 			slidesToShow: 2
      // 		}
      // 	},
      // 	{
      // 		breakpoint: 550,
      // 		settings: {
      // 			slidesToShow: 1
      // 		}
      // 	}
      // ],
   });
});
//slick