// // swiper slider js
// var swiper = new Swiper(".mySwiper", {
//   loop: true,
//   slidesPerView: 3,
//   spaceBetween: 5,

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   breakpoints: {
//     991: {
//       slidesPerView: 3,
//       spaceBetween: 4,
//     },

//     884: {
//       slidesPerView: 2,
//       spaceBetween: 4,
//     },

//     834: {
//       slidesPerView: 2,
//       spaceBetween: 4,
//     },

//     800: {
//       slidesPerView: 2,
//       spaceBetween: 4,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 10,
//     },

//     767: {
//       slidesPerView: 2,
//       spaceBetween: 10,
//     },

//     640: {
//       slidesPerView: 2,
//       spaceBetween: 10,
//     },

//     600: {
//       slidesPerView: 1,
//       spaceBetween: 5,
//     },

//     576: {
//       slidesPerView: 1,
//       spaceBetween: 5,
//     },

//     540: {
//       slidesPerView: 1,
//       spaceBetween: 5,
//     },

//     480: {
//       slidesPerView: 1,
//       spaceBetween: 5,
//     },

//     428: {
//       slidesPerView: 1,
//       spaceBetween: 15,
//     },

//     425: {
//       slidesPerView: 1,
//       spaceBetween: 15,
//     },
//     414: {
//       slidesPerView: 1,
//       spaceBetween: 15,
//     },

//     412: {
//       slidesPerView: 1,
//       spaceBetween: 15,
//     },

//     393: {
//       slidesPerView: 1,
//       spaceBetween: 15,
//     },

//     390: {
//       slidesPerView: 1,
//       spaceBetween: 15,
//     },

//     375: {
//       slidesPerView: 1,
//       spaceBetween: 15,
//     },

//     360: {
//       slidesPerView: 1,
//       spaceBetween: 15,
//     },

//     320: {
//       slidesPerView: 1,
//       spaceBetween: 15,
//     },
//   },
// });

// // counter js
// // $(window).scroll(function () {
// //   if ($(window).scrollTop() > 1000) {
// //     $.fn.jQuerySimpleCounter = function (options) {
// //       var settings = $.extend({
// //           start: 0,
// //           end: 100,
// //           easing: "swing",
// //           duration: 400,
// //           complete: "",
// //         },
// //         options
// //       );

// //       var thisElement = $(this);

// //       $({
// //         count: settings.start,
// //       }).animate({
// //         count: settings.end,
// //       }, {
// //         duration: settings.duration,
// //         easing: settings.easing,
// //         step: function () {
// //           var mathCount = Math.ceil(this.count);
// //           thisElement.text(mathCount);
// //         },
// //         complete: settings.complete,
// //       });
// //     };

// //     $("#number1").jQuerySimpleCounter({
// //       end: 14,
// //       duration: 3000,
// //     });
// //     $("#number2").jQuerySimpleCounter({
// //       end: 2,
// //       duration: 3000,
// //     });
// //     $("#number3").jQuerySimpleCounter({
// //       end: 24,
// //       duration: 2000,
// //     });
// //   }
// // });



// // set counter
// var counted = 0;
// $(window).scroll(function() {

//   var oTop = $('#number1').offset().top - window.innerHeight;
//   if (counted == 0 && $(window).scrollTop() > oTop) {
//     $.fn.jQuerySimpleCounter = function (options) {
//       var settings = $.extend({
//           start: 0,
//           end: 100,
//           easing: "swing",
//           duration: 400,
//           complete: "",
//         },
//         options
//       );

//       var thisElement = $(this);

//       $({
//         count: settings.start,
//       }).animate({
//         count: settings.end,
//       }, {
//         duration: settings.duration,
//         easing: settings.easing,
//         step: function () {
//           var mathCount = Math.ceil(this.count);
//           thisElement.text(mathCount);
//         },
//         complete: settings.complete,
//       });
//     };

//   //   $("#number1").jQuerySimpleCounter({
//   //     end: 100,
//   //     duration: 3000,
//   //   });
//   //   $("#number2").jQuerySimpleCounter({
//   //     end: 98,
//   //     duration: 3000,
//   //   });
//   //   $("#number3").jQuerySimpleCounter({
//   //     end: 10,
//   //     duration: 2000,
//   //   });
//   //   counted = 1;
//   // }

// });