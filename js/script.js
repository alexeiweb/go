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
const modalContent = $('.modal__content');
const modalOverlay = $('.modal>.container');

modalBtn.click(function() {  
  modal.toggleClass('modal-active'),
  modalOverlay.toggleClass('overlay');
});

modalOverlay.click(function() {  
  modal.removeClass('modal-active');
  modalOverlay.removeClass('overlay');
});

modalClose.click(function() {
  modal.removeClass('modal-active');
  modalOverlay.removeClass('overlay');
});

/* Закрытие модального окна при клике вне его контентной области */

// modal.click(function (event) {    
//     if (!modalContent.is(event.target) && modalContent.has(event.target).length === 0) {
//       $(this).removeClass('modal-active'); // событие вызвал элемент modal
//     }
// });