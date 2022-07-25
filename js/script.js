/* Код для активации focus в браузере Safari */

document.addEventListener('click', event => {
  if (event.target.matches('button')) {
      event.target.focus()
  }
});


/* Slider */

new Swiper(".swiper", {
  loop: true,

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
      hintContent: 'улица Усачёва'
    });

      kremMap.geoObjects.add(marker);
  };


/* Модальное окно */


const headerBtn = document.querySelector('.header__btn');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

headerBtn.addEventListener('click', () => {
  overlay.classList.add('overlay_active');
  modal.classList.add('modal_active');
});

overlay.addEventListener('click', (event) => {
  const target = event.target;
  if (target === overlay || target.closest('.modal__close')) {
    overlay.classList.remove('overlay_active');
    modal.classList.remove('modal_active');
  }  
});


/*
const modal = $('.modal');
const modalBtn = $('.header__btn');
const modalClose = $('.modal__close');
const modalContent = $('.modal__content');
const modalOverlay = $('.overlay');

modalBtn.click(function() {  
  modal.toggleClass('modal_active');
  modalOverlay.addClass('overlay_active');
});

const closeModal = function() {
  modal.removeClass('modal_active');
  modalOverlay.removeClass('overlay_active');  
};

modalOverlay.click(closeModal);
modalClose.click(closeModal);
*/


/* Закрытие модального окна при клике вне его контентной области */

modal.click(function (event) {    
    if (!modalContent.is(event.target) && modalContent.has(event.target).length === 0) {
      $(this).removeClass('modal_active'); // событие вызвал элемент modal
      modalOverlay.removeClass('overlay_active');
    }
});


/* Отправка формы */

const modalTitle = $('.modal__title');
const modalForm = $('.modal__form');

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
});


/* Burger */

const burger = document.querySelector('.header__burger');
const popup = document.querySelector('.popup');
const headerNav = document.querySelector('.header__navigation');
const navItem = document.querySelector('.navigation__item');

burger.addEventListener('click', () => {
  popup.classList.add('active');
  headerNav.classList.add('active');
});

navItem.addEventListener('click', () => {
  //popup.classList.remove('active');
  //headerNav.classList.remove('active');
});

$('.navigation__item a').on('click', function(){
  $('.header__navigation').removeClass('active');
  $('.popup').removeClass('active');
});

/* Календарь */

