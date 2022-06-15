/* Код для активации focus в браузере Safari */

document.addEventListener('click', event => {
  if (event.target.matches('button')) {
      event.target.focus()
  }
});

new Swiper(".swiper", {
  navigation: {
    nextEl: ".feedback__arrow_right",
    prevEl: ".feedback__arrow_left",
  }
});

$(document).ready(function(){
  $('.booking__hall_radio').on('click', function(){
    $('.booking__hall_radio').removeClass('booking__hall_radio-click');
    $(this).addClass('booking__hall_radio-click');
  })
});

// $('.faq__list').accordion({
//   active: true,
//   collapsible: true,
//   heightStyle: 'content',
//   icons: {
//     header: 'acc__accord',
//   }
// });

