/*оживляем карусель в интро*/
$(document).ready(function(){
  $(".intro__utp-list").owlCarousel({
    responsive:{
        0:{
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            items:1
        },
        768:{
            items:3,
            touchDrag: false,
            mouseDrag: false
        },
        1362:{
            items:3,
            touchDrag: false,
            mouseDrag: false
        }
    }
  });
});
/*  */
/*оживляем карусель в utp-field*/
$(document).ready(function(){
  $(".utp-field__utp-list").owlCarousel({
    responsive:{
        0:{
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            items:1
        },
        768:{
            items:8,
            touchDrag: false,
            mouseDrag: false
        },
        1362:{
            items:8,
            touchDrag: false,
            mouseDrag: false
        }
    }
  });
});
/* */
/*кнопка интро*/
var telephoneFieldIntro = document.getElementById('telephone-field-intro');

var introCallButton = document.getElementsByClassName('intro__call-button');

var introFormField = document.getElementsByClassName('intro__form-field');

$(introCallButton).click(function() {
    $(introFormField).removeClass('intro__form-field--mobile');
    $(introCallButton).addClass('disable');
});
/*  */

/*прикручиваем валидатор для телефонов */
$(document).ready(function(){
  $(telephoneFieldIntro).inputmask("+7 (999) 999-9999"); //specifying options
});

var telephoneFieldCredit = document.getElementById('telephone-field-credit');
$(document).ready(function(){
  $(telephoneFieldCredit).inputmask("+7 (999) 999-9999"); //specifying options
});

/*переключение тогглов интро*/
var introTogglePhone = document.getElementsByClassName('device-model__button--iphone');
var introTogglePad = document.getElementsByClassName('device-model__button--ipad');

var modelListPhone = document.getElementsByClassName('device-model__model-list--phone');
var modelListPad = document.getElementsByClassName('device-model__model-list--pad');

var breakMainListPhone = document.getElementsByClassName('device-model__break-mainlist--phone');
var breakMainListPad = document.getElementsByClassName('device-model__break-mainlist--pad');

$(introTogglePhone).click(function() {
    $(introTogglePhone).addClass('device-model__button--active');
    $(introTogglePad).removeClass('device-model__button--active');

    $(modelListPhone).removeClass('disable');
    $(modelListPad).addClass('disable');

    $(breakMainListPhone).removeClass('disable');
    $(breakMainListPad).addClass('disable');
});
$(introTogglePad).click(function() {
    $(introTogglePhone).removeClass('device-model__button--active');
    $(introTogglePad).addClass('device-model__button--active');

    $(modelListPhone).addClass('disable');
    $(modelListPad).removeClass('disable');

    $(breakMainListPhone).addClass('disable');
    $(breakMainListPad).removeClass('disable');
});

/*переключение между мабасиками*/
var currentItemPhone = 0;
var modelItemsPhone = document.getElementsByClassName('device-model__model-item--phone');
modelItemsPhone = Array.prototype.slice.call(modelItemsPhone);

var currentBkeakListPhone = 0;
var breakListPhone = document.getElementsByClassName('device-model__break-list--phone');
breakListPhone = Array.prototype.slice.call(breakListPhone);

modelItemsPhone.forEach(function (element, i) {
    element.addEventListener('click', function () {
        $(breakListPhone[currentBkeakListPhone]).addClass('disable');
        $(breakListPhone[i]).removeClass('disable');
        currentBkeakListPhone = i;

        $(modelItemsPhone[currentItemPhone]).removeClass('device-model__model-item--active');
        $(modelItemsPhone[i]).addClass('device-model__model-item--active');
        currentItemPhone = i;
    })
});

/*переключение между таблетки*/
var currentItemPad = 0;
var modelItemsPad = document.getElementsByClassName('device-model__model-item--pad');
modelItemsPad = Array.prototype.slice.call(modelItemsPad);

var currentBkeakListPad = 0;
var breakListPad = document.getElementsByClassName('device-model__break-list--pad');
breakListPad = Array.prototype.slice.call(breakListPad);

modelItemsPad.forEach(function (element, i) {
    element.addEventListener('click', function () {
        $(breakListPad[currentBkeakListPad]).addClass('disable');
        $(breakListPad[i]).removeClass('disable');
        currentBkeakListPad = i;

        $(modelItemsPad[currentItemPad]).removeClass('device-model__model-item--active');
        $(modelItemsPad[i]).addClass('device-model__model-item--active');
        currentItemPad = i;
    })
});
/* */
/* ссылкам в поломках обнуляем событие */

breakLink =  document.getElementsByClassName('device-model__break-link');

$(breakLink).click(function(event) {
  event.preventDefault();
});
/* */
/* показать еще виды поломок в мобильной версии*/
seeMoreDevice = document.getElementsByClassName('device-model__see-more');
deviceBreakItem = document.getElementsByClassName('device-model__break-item');
  
$(seeMoreDevice).click(function(event) {
  event.preventDefault();
  $(deviceBreakItem).removeClass('device-model__break-item--mobile');
  $(seeMoreDevice).addClass('disable');
});
/* */
/*отрабатываем работу слайдера в этапах ремонта */
var stageIcon1 = document.getElementsByClassName('stages__icon-item--1');
var stageIcon2 = document.getElementsByClassName('stages__icon-item--2');
var stageIcon3 = document.getElementsByClassName('stages__icon-item--3');
var stageIcon4 = document.getElementsByClassName('stages__icon-item--4');
var stageIcon5 = document.getElementsByClassName('stages__icon-item--5');

var progressBar = document.getElementsByClassName('stages__progress');

var stagesSliderList = document.getElementsByClassName('stages__slider-list');

var stagesArrowCounter = 0;
var widthCounter = 20;

$(stageIcon1).click(function() {
  $(stageIcon1).addClass('stages__icon-item--active-1');
  $(stageIcon2).removeClass('stages__icon-item--active-2');
  $(stageIcon3).removeClass('stages__icon-item--active-3');
  $(stageIcon4).removeClass('stages__icon-item--active-4');
  $(stageIcon5).removeClass('stages__icon-item--active-5');
  
  $(progressBar).width('20%');
  stagesArrowCounter = 0;
  widthCounter = 20;

  $(stagesSliderList).addClass('stages__slider-list--1');
  $(stagesSliderList).removeClass('stages__slider-list--2');
  $(stagesSliderList).removeClass('stages__slider-list--3');
  $(stagesSliderList).removeClass('stages__slider-list--4');
  $(stagesSliderList).removeClass('stages__slider-list--5');
});

$(stageIcon2).click(function() {
  $(stageIcon1).addClass('stages__icon-item--active-1');
  $(stageIcon2).addClass('stages__icon-item--active-2');
  $(stageIcon3).removeClass('stages__icon-item--active-3');
  $(stageIcon4).removeClass('stages__icon-item--active-4');
  $(stageIcon5).removeClass('stages__icon-item--active-5');

  $(progressBar).width('40%');
  stagesArrowCounter = 1;
  widthCounter = 40;

  $(stagesSliderList).addClass('stages__slider-list--2');
  $(stagesSliderList).removeClass('stages__slider-list--1');
  $(stagesSliderList).removeClass('stages__slider-list--3');
  $(stagesSliderList).removeClass('stages__slider-list--4');
  $(stagesSliderList).removeClass('stages__slider-list--5');
});
$(stageIcon3).click(function() {
  $(stageIcon1).addClass('stages__icon-item--active-1');
  $(stageIcon2).addClass('stages__icon-item--active-2');
  $(stageIcon3).addClass('stages__icon-item--active-3');
  $(stageIcon4).removeClass('stages__icon-item--active-4');
  $(stageIcon5).removeClass('stages__icon-item--active-5');

  $(progressBar).width('60%');
  stagesArrowCounter = 2;
  widthCounter = 60;

  $(stagesSliderList).addClass('stages__slider-list--3');
  $(stagesSliderList).removeClass('stages__slider-list--1');
  $(stagesSliderList).removeClass('stages__slider-list--2');
  $(stagesSliderList).removeClass('stages__slider-list--4');
  $(stagesSliderList).removeClass('stages__slider-list--5');
});
$(stageIcon4).click(function() {
  $(stageIcon1).addClass('stages__icon-item--active-1');
  $(stageIcon2).addClass('stages__icon-item--active-2');
  $(stageIcon3).addClass('stages__icon-item--active-3');
  $(stageIcon4).addClass('stages__icon-item--active-4');
  $(stageIcon5).removeClass('stages__icon-item--active-5');

  $(progressBar).width('80%');
  stagesArrowCounter = 3;
  widthCounter = 80;

  $(stagesSliderList).addClass('stages__slider-list--4');
  $(stagesSliderList).removeClass('stages__slider-list--1');
  $(stagesSliderList).removeClass('stages__slider-list--2');
  $(stagesSliderList).removeClass('stages__slider-list--3');
  $(stagesSliderList).removeClass('stages__slider-list--5');
});
$(stageIcon5).click(function() {
  $(stageIcon1).addClass('stages__icon-item--active-1');
  $(stageIcon2).addClass('stages__icon-item--active-2');
  $(stageIcon3).addClass('stages__icon-item--active-3');
  $(stageIcon4).addClass('stages__icon-item--active-4');
  $(stageIcon5).addClass('stages__icon-item--active-5');

  $(progressBar).width('100%');
  stagesArrowCounter = 4;
  widthCounter = 100;

  $(stagesSliderList).addClass('stages__slider-list--5');
  $(stagesSliderList).removeClass('stages__slider-list--1');
  $(stagesSliderList).removeClass('stages__slider-list--2');
  $(stagesSliderList).removeClass('stages__slider-list--3');
  $(stagesSliderList).removeClass('stages__slider-list--4');
});
/*делаем альтернативное переключение по стрелочкам на этапах ремонта */
var stagesArrowLeft = document.getElementsByClassName('stages__arrow--left');
var stagesArrowRight = document.getElementsByClassName('stages__arrow--right');

var stagesIconItems = document.getElementsByClassName('stages__icon-item');
stagesIconItems = Array.prototype.slice.call(stagesIconItems);

$(stagesArrowRight).click(function() {
  if (stagesArrowCounter < 4) {
    widthCounter = widthCounter + 20;
    $(progressBar).width(widthCounter.toString() + '%');
    for (let i = 0; i <= stagesArrowCounter + 1; i++) {
      $(stagesIconItems[i]).addClass('stages__icon-item--active-' + (i + 1));
    }
    $(stagesSliderList).removeClass('stages__slider-list--1');
    $(stagesSliderList).removeClass('stages__slider-list--2');
    $(stagesSliderList).removeClass('stages__slider-list--3');
    $(stagesSliderList).removeClass('stages__slider-list--4');
    $(stagesSliderList).removeClass('stages__slider-list--5');
    console.log(stagesArrowCounter);
    $(stagesSliderList).addClass('stages__slider-list--' + (stagesArrowCounter + 2));
    stagesArrowCounter++;
  }
});
$(stagesArrowLeft).click(function() {
  if (stagesArrowCounter > 0) {
    widthCounter = widthCounter - 20;
    $(progressBar).width(widthCounter.toString() + '%');
    for (let i = stagesArrowCounter; i < 5; i++) {
      $(stagesIconItems[i]).removeClass('stages__icon-item--active-' + (i + 1));
    }
    $(stagesSliderList).removeClass('stages__slider-list--1');
    $(stagesSliderList).removeClass('stages__slider-list--2');
    $(stagesSliderList).removeClass('stages__slider-list--3');
    $(stagesSliderList).removeClass('stages__slider-list--4');
    $(stagesSliderList).removeClass('stages__slider-list--5');
    console.log(stagesArrowCounter);
    $(stagesSliderList).addClass('stages__slider-list--' + (stagesArrowCounter));
    stagesArrowCounter--;
  }
});

/* */
/* оживляем слайдер со специалистами
var bestArrowLeft = document.getElementsByClassName('bests__arrow--left');
var bestArrowRight = document.getElementsByClassName('bests__arrow--right');
var bestsList = document.getElementsByClassName('bests__list');
var countBest = 2;
var currentBest = 1;
var countMore = 1;

$(bestArrowRight).click(function() {
  if (countBest < 4) {
  $(bestsList).addClass('bests__list--' + (countBest + 1));
  $(bestsList).removeClass('bests__list--' + countBest);
  countBest++;
  countMore++;
  }
});

$(bestArrowLeft).click(function() {
  if (countMore > 0) {
  $(bestsList).addClass('bests__list--' + (countBest - 1));
  $(bestsList).removeClass('bests__list--' + countBest);
  countBest--;
  countMore--;
  }
});
*/
/*зацикливаем слайдер со специалистами */
jQuery(document).ready(function ($) {

var slideCount = $('.bests__item').length;
	var slideWidth = $('.bests__item').width();
	var slideHeight = $('.bests__item').height();
	var sliderUlWidth = 1920;
		
  $('.bests__item:last-child').prependTo('.bests__list');
  $('.bests__list').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  $('.bests__item:nth-child(3)').css({ marginRight: slideWidth });
     
    function moveLeft() {
        $('.bests__item:nth-child(3)').animate({
            left: + slideWidth
        }, 200);
        $('.bests__list').animate({
            left: + slideWidth
        }, 200, function () {
            $('.bests__item:last-child').prependTo('.bests__list');
            $('.bests__list').css('left', '');
            $('.bests__item:nth-child(3)').css({ marginRight: slideWidth });
            $('.bests__item:nth-child(4)').css({ marginRight: 0 });
        });
      $('.bests__item:nth-child(3)').animate({
            left: 0
        }, 0);
    };

    function moveRight() {
      $('.bests__item:nth-child(4)').animate({
            left: - slideWidth
        }, 200);
        $('.bests__list').animate({
            left: - slideWidth
        }, 200, function () {
            $('.bests__item:first-child').appendTo('.bests__list');
            $('.bests__list').css('left', '');
            $('.bests__item:nth-child(2)').css({ marginRight: 0 });
            $('.bests__item:nth-child(3)').css({ marginRight: slideWidth });
        });
      $('.bests__item:nth-child(4)').animate({
            left: 0
        }, 0);
    };

    $('.bests__arrow--left').click(function () {
        moveLeft();
    });

    $('.bests__arrow--right').click(function () {
        moveRight();
    });
	
});    
/* */
/* раскрываем адреса для мобильной версии */
var addressMore = document.getElementsByClassName('address__see-more');
addressMore = Array.prototype.slice.call(addressMore);

var addressApi = document.getElementsByClassName('address__api-field');
addressApi = Array.prototype.slice.call(addressApi);

var addressButton = document.getElementsByClassName('address__call-button-field');
addressButton = Array.prototype.slice.call(addressButton);

addressMore.forEach(function (element, i) {
    element.addEventListener('click', function (event) {
      event.preventDefault();
      $(addressApi[i]).removeClass('address__api-field--mobile');
      $(addressButton[i]).removeClass('address__call-button-field--mobile');
      $(addressMore[i]).addClass('disable');
    })
});
/* */
/* отображаем всех мастеров в мобильной версии */
var bestsShowMore = document.getElementsByClassName('bests__show-more');
var bestsItem = document.getElementsByClassName('bests__item');

$(bestsShowMore).click(function(event) {
  event.preventDefault();
  $(bestsItem).removeClass('bests__item--mobile');
  $(bestsShowMore).addClass('disable');
});