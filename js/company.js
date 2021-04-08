



// $(function () {
//   $('#nav-toggle').on('click', function () {
//     $('nav ul').toggleClass('is-active');// #nav-toggleをクリックしたら(nav ulにis-activeクラスが追加される)
//   });
// }());


// $(function () {

//   $('.faq-list-item').click(function () {
//     var $answer = $(this).find('.answer');
//     if ($answer.hasClass('open')) {
//       $answer.removeClass('open');
//       $answer.slideUp();

//       // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
//       $(this).find('span').text('+');


//     } else {
//       $answer.addClass('open');

//       $answer.slideDown();

//       // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
//       $(this).find('span').text('-');
//     }
//   });



// });



$(function () {
  $('.play-screan').slick({
    centerMode: true, //センターモード
    centerPadding: '60px', //前後のパディング
    autoplay: true, //オートプレイ
    auseOnHover: false,
    pauseOnFocus: false,
    autoplaySpeed: 2000, //オートプレイの切り替わり時間
    slidesToShow: 3,
    responsive: [{
      breakpoint: 750,
      settings: {
        arrows: true, // 前後の矢印非表示
        centerMode: true,
        centerPadding: '20%',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
      }
    }]
  });
});



$('.slider').slick({
  autoplay: true,
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 750,
      settings: {
        autoplay: true,
        arrows: false,
        centerMode: true,
        centerPadding: '20%',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        autoplay: true,
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});



// $(function () {
//   function sliderSetting() {

//     var width = $(window).width();

//     if (width <= 750) {
//       $('.slider').not('.slick-initialized').slick({
//         autoplay: true,
//         fade: true,
//         dots: true,
//         arrows: false,
//         slidesToShow: 1,
//       });
//     }
//   }

//   sliderSetting();

//   $(window).resize(function () {
//     sliderSetting();
//   });
// });

// $('.slider').slick({
//   autoplay: true,
//   autoplaySpeed: 1000,
//   dots: false,
//   slidesToShow: 4,
// });
