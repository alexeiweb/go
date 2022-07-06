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


/* Аккордеон */

// $('.faq__list').accordion({
//   active: true,
//   collapsible: true,
//   heightStyle: 'content',
//   icons: {
//     header: 'acc__accord',
//   }
// });


/* Модальное окно */

const modal = $('.modal');
const modalBtn = $('.header__btn');
const modalClose = $('.modal-close');
const modalContent = $(".modal__content");

modalBtn.click(function() {  
  modal.addClass('modal-active');
});

modalClose.click(function() {
  modal.removeClass('modal-active');
});

/* Закрытие модального окна при клике вне его контентной области */

modal.click(function (e) {    
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      modal.removeClass('modal-active');
      //$(this).removeClass('modal-active'); // можно написать так
    }
});