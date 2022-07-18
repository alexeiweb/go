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
  function init() {
    const kremMap = new ymaps.Map("map", {
      center: [55.723151, 37.565021],
      zoom: 15
    });

    const marker = new ymaps.Placemark([55.723151, 37.565021], {
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
const modalTitle = $('.modal__title');
const modalForm = $('.modal__form');

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


/* Закрытие модального окна при клике вне его контентной области */

modal.click(function (event) {    
    if (!modalContent.is(event.target) && modalContent.has(event.target).length === 0) {
      $(this).removeClass('modal-active'); // событие вызвал элемент modal
      modalOverlay.removeClass('overlay-active');
    }
});


/* Отправка формы */

modalForm.submit(function (event) {
  event.preventDefault();
  $.ajax( {
    url: 'https://jsonplaceholder.typicode.com/posts',
    type: 'POST',
    data: $(this).serialize(),
    success(data) {
      modalTitle.text('Спасибо, ожидайте звонок')
      modalForm.slideUp(300);
    },
    error() {
      modalTitle.text('Косячок')
    }
  })
});


/* Отправка формы booking */

$('.booking__form').submit(function (event) {
  event.preventDefault();
  $.ajax( {
    url: 'https://jsonplaceholder.typicode.com/posts',
    type: 'POST',
    data: $(this).serialize(),
  })
})


/* Burger */

const burger = document.querySelector('.burger');
const navigation = document.querySelector('.header__list').cloneNode(1);
const popup = document.querySelector('.popup');
const headerLink = document.querySelector('.header__link');

burger.addEventListener('click', burgerClick);

function burgerClick(event) {
  event.preventDefault();
  burger.classList.remove('burger');
  navigation.classList.add('active');
  popup.classList.add('active');
  renderPopup();
};

headerLink.addEventListener('click', headerLinkClick);

function headerLinkClick(event) {  
  event.preventDefault();  
  popup.classList.remove('active');  
  navigation.classList.remove('active');
}

function renderPopup() {
  popup.appendChild(navigation);
}