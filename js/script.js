/* Код для активации focus в браузере Safari */

document.addEventListener('click', event => {
  if (event.target.matches('button')) {
      event.target.focus()
  }
});


/* Slider */

new Swiper(".swiper", {
  navigation: {
    nextEl: ".feedback__arrow_right",
    prevEl: ".feedback__arrow_left",
  }
});


/* Радиокнопки */

$(document).ready(function(){
  $('.booking__hall_radio').on('click', function(){
    $('.booking__hall_radio').removeClass('booking__hall_radio-click');
    $(this).addClass('booking__hall_radio-click');
  })
});


/* Аккордеон */

$('.faq__list').accordion({
  active: true,
  collapsible: true,
  heightStyle: 'content',
  icons: {
    header: 'faq__accord',
    activeHeader: 'faq__btn_purple'
  }
});


/* Яндекс-карты */

ymaps.ready(init);
        function init(){
            const kremMap = new ymaps.Map("map", {
                center: [55.752209, 37.618829],
                zoom: 15
            });

            const marker = new ymaps.Placemark([55.752209, 37.618829], {
              hintContent: 'Интересное место'
            });
            kremMap.geoObjects.add(marker);
        };


/* Модальное окно */

const modal = $('.modal');
const modalBtn = $('.header__btn');
const modalClose = $('.modal-close');
const modalContent = $('.modal__content');
const modalOverlay = $('.overlay');

modalBtn.click(function() {  
  modal.toggleClass('modal-active');
  modalOverlay.addClass('overlay-active');
});

const closeModal = function() {
  modal.removeClass('modal-active');
  modalOverlay.removeClass('overlay-active');  
};

modalOverlay.click(closeModal);
modalClose.click(closeModal);


// modalOverlay.click(function() {  
//   modal.removeClass('modal-active');
//   modalOverlay.removeClass('overlay-active');
// });

// modalClose.click(function() {
//   modal.removeClass('modal-active');
//   modalOverlay.removeClass('overlay-active');
// });

/* Закрытие модального окна при клике вне его контентной области */

modal.click(function (event) {    
    if (!modalContent.is(event.target) && modalContent.has(event.target).length === 0) {
      $(this).removeClass('modal-active'); // событие вызвал элемент modal
      modalOverlay.removeClass('overlay-active');
    }
});