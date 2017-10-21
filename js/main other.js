/* делаем динамический заголовок */
function findEnd(url, urlpos) {
  for (var i = urlpos; i <= url.length; i++) {
    if (url[i] == '&') {
      return i;
    } else if (i == (url.length - 1)) {
      return i + 1;
    }
  }
}

function iphoneIpadEnd (url, urlpos) {
  for (i = urlpos; i <= url.length; i++) {
    if (url[i] == '&') {
      return i;
    }
  }
}

var variableTitle = document.getElementById('variable-title');
var variableDevice = document.getElementById('variable-device');
var introDescriptionCustom = document.getElementById('intro-description-custom');

var utmUrl = decodeURI(document.location.search);
var urlStart = utmUrl.indexOf('content');
var urlStartInt = parseInt(urlStart) + 8;
var urlEndInt = findEnd(utmUrl, urlStartInt);
var iphoneIpadStart = utmUrl.indexOf('campaign');
var iphoneIpadStartInt = parseInt(iphoneIpadStart) + 9;
var iphoneIpadEndInt = iphoneIpadEnd(utmUrl, iphoneIpadStartInt);
var titleText = utmUrl.slice(urlStartInt, urlEndInt);
var deviceType = utmUrl.slice(iphoneIpadStartInt, iphoneIpadEndInt);

var utmSourceStart = utmUrl.indexOf('utm_source');
var utmSourceStartInt = parseInt(utmSourceStart) + 11;
var utmSourceEndInt = findEnd(utmUrl, utmSourceStartInt);
var utmSource = utmUrl.slice(utmSourceStartInt, utmSourceEndInt);

var utmMediumStart = utmUrl.indexOf('utm_medium');
var utmMediumStartInt = parseInt(utmMediumStart) + 11;
var utmMediumEndInt = findEnd(utmUrl, utmMediumStartInt);
var utmMedium = utmUrl.slice(utmMediumStartInt, utmMediumEndInt);

var utmCampaignStart = utmUrl.indexOf('utm_campaign');
var utmCampaignStartInt = parseInt(utmCampaignStart) + 13;
var utmCampaignEndInt = findEnd(utmUrl, utmCampaignStartInt);
var utmCampaign = utmUrl.slice(utmCampaignStartInt, utmCampaignEndInt);

var utmContentStart = utmUrl.indexOf('utm_content');
var utmContentStartInt = parseInt(utmContentStart) + 12;
var utmContentEndInt = findEnd(utmUrl, utmContentStartInt);
var utmContent = utmUrl.slice(utmContentStartInt, utmContentEndInt);

var utmTermStart = utmUrl.indexOf('utm_term');
var utmTermStartInt = parseInt(utmTermStart) + 9;
var utmTermEndInt = findEnd(utmUrl, utmTermStartInt);
var utmTerm = utmUrl.slice(utmTermStartInt, utmTermEndInt);

if (~deviceType.indexOf('ipad')) {
variableDevice.textContent = 'iPad в Тюмени';
introDescriptionCustom.textContent = 'iPad';
} else if (~deviceType.indexOf('iphone')) {
variableDevice.textContent = 'iPhone в Тюмени';
introDescriptionCustom.textContent = 'iPhone';
} else {
variableDevice.textContent = "iPhone и iPad в Тюмени";
introDescriptionCustom.textContent = 'iPhone и iPad';
}

switch(titleText) {
case 'akkum':
variableTitle.textContent = 'Замена аккумулятора ';
break;
case 'steklo':
variableTitle.textContent = 'Замена стекла ';
break;
case 'ekran':
variableTitle.textContent = 'Замена экрана ';
break;
case 'sensor':
variableTitle.textContent = 'Замена сенсора ';
break;
case 'obshee':
variableTitle.textContent = 'Выездной ремонт ';
break;
case 'shleif':
variableTitle.textContent = 'Замена шлейфа ';
break;
case 'seti':
variableTitle.textContent = 'Ремонт сети ';
break;
case 'korpus':
variableTitle.textContent = 'Замена корпуса ';
break;
case 'knopka':
variableTitle.textContent = 'Замена кнопок ';
break;
case 'kamera':
variableTitle.textContent = 'Замена камеры ';
break;
case 'dinam':
variableTitle.textContent = 'Замена динамика ';
break;
case 'voda':
variableTitle.textContent = 'Ремонт утопленного ';
break;
default:
variableTitle.textContent = 'Ремонт ';
}
/* */
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
/*Плавный скролл*/
$(function(){
  $('a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    
    $('html, body').animate({scrollTop: dn}, 1000);
    
    /*
    * 1000 скорость перехода в миллисекундах
    */
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

var telephoneFieldPopupMain = document.getElementById('telephone-field-popup-main');
$(document).ready(function(){
  $(telephoneFieldPopupMain).inputmask("+7 (999) 999-9999"); //specifying options
});

var telephoneFieldPopupTinkoff = document.getElementById('telephone-field-popup-tinkoff');
$(document).ready(function(){
  $(telephoneFieldPopupTinkoff).inputmask("+7 (999) 999-9999"); //specifying options
});

var telephoneFieldPopupOffices = document.getElementById('telephone-field-popup-offices');
$(document).ready(function(){
  $(telephoneFieldPopupOffices).inputmask("+7 (999) 999-9999"); //specifying options
});
/* */
/*оживляем главный попап*/
var overlay = document.getElementsByClassName('overlay');

var popupMainCloseBtn = document.getElementsByClassName('popup-main__close-btn');
var popupMain = document.getElementsByClassName('popup-main');

var pageHeaderCall = document.getElementsByClassName('page-header__order-call');

var mobileCarCallButton = document.getElementsByClassName('mobile-car__call-button');

var stagesCallButtonFoot = document.getElementsByClassName('stages__call-button-foot');

var pageFooterCallbackLink = document.getElementsByClassName('page-footer__right-callback-link');

var travelMenuCallButton = document.getElementsByClassName('travel-menu__call-button');

$(popupMainCloseBtn).click(function() {
  $(popupMain).addClass('popup-main--inactive');
  $(overlay).removeClass('overlay--active');
});

$(pageHeaderCall).click(function(event) {
  event.preventDefault();
  $(popupMain).find("input[name='form_name']").val("Мы перезвоним");
  $(popupMain).removeClass('popup-main--inactive');
  $(overlay).addClass('overlay--active');
});

$(mobileCarCallButton).click(function(event) {
  event.preventDefault();
  $(popupMain).find("input[name='form_name']").val("Вызвать мастера");
  $(popupMain).removeClass('popup-main--inactive');
  $(overlay).addClass('overlay--active');
});

$(stagesCallButtonFoot).click(function(event) {
  event.preventDefault();
  $(popupMain).find("input[name='form_name']").val("Оставить заявку");
  $(popupMain).removeClass('popup-main--inactive');
  $(overlay).addClass('overlay--active');
});

$(pageFooterCallbackLink).click(function(event) {
  event.preventDefault();
  $(popupMain).find("input[name='form_name']").val("Мы перезвоним");
  $(popupMain).removeClass('popup-main--inactive');
  $(overlay).addClass('overlay--active');
});

$(travelMenuCallButton).click(function(event) {
  event.preventDefault();
  $(popupMain).find("input[name='form_name']").val("Мы перезвоним");
  $(popupMain).removeClass('popup-main--inactive');
  $(overlay).addClass('overlay--active');
});
/* */
/* оживляем попап Тинькофф */
var popupTinkoffCloseBtn = document.getElementsByClassName('popup-tinkoff__close-btn');
var popupTinkoff = document.getElementsByClassName('popup-tinkoff');

var creditTitleLink = document.getElementsByClassName('credit__title-link');

var inputTinkoff = document.getElementsByClassName('popup-tinkoff__form-input--tinkoff');

$(popupTinkoffCloseBtn).click(function() {
  $(popupTinkoff).addClass('popup-tinkoff--inactive');
  $(overlay).removeClass('overlay--active');
});

$(creditTitleLink).click(function(event) {
  event.preventDefault();
  $(inputTinkoff).val('в кредит');
  $(popupTinkoff).removeClass('popup-tinkoff--inactive');
  $(overlay).addClass('overlay--active');
});
/* */
/* оживляем попап для офисов */
var popupOfficeCloseBtn = document.getElementsByClassName('popup-offices__close-btn');
var popupOffices = document.getElementsByClassName('popup-offices');

var addressCallButton1 = document.getElementsByClassName('address__call-button--1');
var addressCallButton2 = document.getElementsByClassName('address__call-button--2');
var addressCallButton3 = document.getElementsByClassName('address__call-button--3');
var addressCallButton4 = document.getElementsByClassName('address__call-button--4');

var popupAddressOffice = document.getElementById('address-office');
var inputOffices = document.getElementsByClassName('popup-offices__form-input--offices');

$(addressCallButton1).click(function(event) {
  event.preventDefault();
  $(inputOffices).val('ул. Широтная, д.80, ТЦ Широтный');
  $(popupOffices).removeClass('popup-offices--inactive');
  $(overlay).addClass('overlay--active');
  popupAddressOffice.textContent = 'ул. Широтная, д.80, ТЦ Широтный';
  $(popupOffices).find("input[name='form_name']").val("Записаться на ремонт: Райт");
  console.log(popupAddressOffice);
});

$(addressCallButton2).click(function(event) {
  event.preventDefault();
  $(inputOffices).val('ул. Пермякова, 82 копр.1');
  $(popupOffices).removeClass('popup-offices--inactive');
  $(overlay).addClass('overlay--active');
  popupAddressOffice.textContent = 'ул. Пермякова, 82 копр.1';
  $(popupOffices).find("input[name='form_name']").val("Записаться на ремонт: Офис");
  console.log(popupAddressOffice);
});

$(addressCallButton3).click(function(event) {
  event.preventDefault();
  $(inputOffices).val('ул. Пермякова, 50Б, 1 этаж ТЦ Солнечный');
  $(popupOffices).removeClass('popup-offices--inactive');
  $(overlay).addClass('overlay--active');
  popupAddressOffice.textContent = 'ул. Пермякова, 50Б, 1 этаж ТЦ Солнечный';
  $(popupOffices).find("input[name='form_name']").val("Записаться на ремонт: Солнечный");
  console.log(popupAddressOffice);
});

$(addressCallButton4).click(function(event) {
  event.preventDefault();
  $(inputOffices).val('Сервисный центр: ул.Пржевальского 42а');
  $(popupOffices).removeClass('popup-offices--inactive');
  $(overlay).addClass('overlay--active');
  popupAddressOffice.textContent = 'Сервисный центр: ул.Пржевальского 42а';
  $(popupOffices).find("input[name='form_name']").val("Записаться на ремонт: СВ");
  console.log(popupAddressOffice);
});

$(popupOfficeCloseBtn).click(function() {
  $(popupOffices).addClass('popup-offices--inactive');
  $(overlay).removeClass('overlay--active');
});
/* */
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
  } else {
    widthCounter = 20;
    $(progressBar).width(widthCounter.toString() + '%');
    for (let i = 1; i < 5; i++) {
      $(stagesIconItems[i]).removeClass('stages__icon-item--active-' + (i + 1));
    }
    $(stagesSliderList).removeClass('stages__slider-list--2');
    $(stagesSliderList).removeClass('stages__slider-list--3');
    $(stagesSliderList).removeClass('stages__slider-list--4');
    $(stagesSliderList).removeClass('stages__slider-list--5');
    $(stagesSliderList).addClass('stages__slider-list--1');
    stagesArrowCounter = 0;
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
  } else {
    widthCounter = 100;
    $(progressBar).width(widthCounter.toString() + '%');
    for (let i = 1; i < 5; i++) {
      $(stagesIconItems[i]).addClass('stages__icon-item--active-' + (i + 1));
      stagesArrowCounter = 4;
    }
    $(stagesSliderList).addClass('stages__slider-list--1');
    $(stagesSliderList).addClass('stages__slider-list--2');
    $(stagesSliderList).addClass('stages__slider-list--3');
    $(stagesSliderList).addClass('stages__slider-list--4');
    $(stagesSliderList).addClass('stages__slider-list--5');
  }
});
var stagesTicTac = setInterval(function() {
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
  } else {
    widthCounter = 20;
    $(progressBar).width(widthCounter.toString() + '%');
    for (let i = 1; i < 5; i++) {
      $(stagesIconItems[i]).removeClass('stages__icon-item--active-' + (i + 1));
    }
    $(stagesSliderList).removeClass('stages__slider-list--2');
    $(stagesSliderList).removeClass('stages__slider-list--3');
    $(stagesSliderList).removeClass('stages__slider-list--4');
    $(stagesSliderList).removeClass('stages__slider-list--5');
    $(stagesSliderList).addClass('stages__slider-list--1');
    stagesArrowCounter = 0;
  }
}, 5000);

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
  if ($(window).width() >= 768) {

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
  }
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
/* ajax отправка без перезагрузки страницы */
var telephoneFieldIntro = document.getElementById('telephone-field-intro');

var telephoneFieldNotFound = document.getElementById('telephone-field-credit');

var nameFieldPopupMain = document.getElementById('name-field-popup-main');

var nameFieldPopupTinkoff = document.getElementById('name-field-popup-tinkoff');

var nameFieldPopupOffices = document.getElementById('name-field-popup-offices');

var frmIntro = $('#form-intro');

frmIntro.submit(function (ev) {
    $.ajax({
        type: frmIntro.attr('method'),
        url: frmIntro.attr('action'),
        data: frmIntro.serialize() + '&utmSource=' + utmSource + '&utmMedium=' + utmMedium + '&utmCampaign=' + utmCampaign +'&utmContent=' + utmContent +'&utmTerm=' + utmTerm,
        success: function (data) {
            alert('Заявка отправлена!');
            $(telephoneFieldIntro).val('');
        }
    });
    ev.preventDefault();
});

var frmNotFound = $('#form-not-found');

frmNotFound.submit(function (ev) {
    $.ajax({
        type: frmNotFound.attr('method'),
        url: frmNotFound.attr('action'),
        data: frmNotFound.serialize() + '&utmSource=' + utmSource + '&utmMedium=' + utmMedium + '&utmCampaign=' + utmCampaign +'&utmContent=' + utmContent +'&utmTerm=' + utmTerm,
        success: function (data) {
            alert('Заявка отправлена!');
            $(telephoneFieldNotFound).val('');
        }
    });
    ev.preventDefault();
});

var frmMain = $('#form-main');

frmMain.submit(function (ev) {
    $.ajax({
        type: frmMain.attr('method'),
        url: frmMain.attr('action'),
        data: frmMain.serialize() + '&utmSource=' + utmSource + '&utmMedium=' + utmMedium + '&utmCampaign=' + utmCampaign +'&utmContent=' + utmContent +'&utmTerm=' + utmTerm,
        success: function (data) {
            alert('Заявка отправлена!');
            $(nameFieldPopupMain).val('');
            $(telephoneFieldPopupMain).val('');
            $(popupMain).addClass('popup-main--inactive');
            $(overlay).removeClass('overlay--active');
        }
    });
    ev.preventDefault();
});

var frmTinkoff = $('#form-tinkoff');

frmTinkoff.submit(function (ev) {
    $.ajax({
        type: frmTinkoff.attr('method'),
        url: frmTinkoff.attr('action'),
        data: frmTinkoff.serialize() + '&utmSource=' + utmSource + '&utmMedium=' + utmMedium + '&utmCampaign=' + utmCampaign +'&utmContent=' + utmContent +'&utmTerm=' + utmTerm,
        success: function (data) {
            alert('Заявка отправлена!');
            $(nameFieldPopupTinkoff).val('');
            $(telephoneFieldPopupTinkoff).val('');
            $(popupTinkoff).addClass('popup-tinkoff--inactive');
            $(overlay).removeClass('overlay--active');
        }
    });
    ev.preventDefault();
});

var frmOffices = $('#form-offices');

frmOffices.submit(function (ev) {
    $.ajax({
        type: frmOffices.attr('method'),
        url: frmOffices.attr('action'),
        data: frmOffices.serialize() + '&utmSource=' + utmSource + '&utmMedium=' + utmMedium + '&utmCampaign=' + utmCampaign +'&utmContent=' + utmContent +'&utmTerm=' + utmTerm,
        success: function (data) {
            alert('Заявка отправлена!');
            $(nameFieldPopupOffices).val('');
            $(telephoneFieldPopupOffices).val('');
            $(popupOffices).addClass('popup-offices--inactive');
            $(overlay).removeClass('overlay--active');
        }
    });
    /*$.ajax({
      url: "mail.php",
      type: "POST",
      data: ({utmSource : utmSource,utmMedium : utmMedium,utmCampaign : utmCampaign, utmContent : utmContent,utmTerm : utmTerm})
      'utmSource=utmSource&utmMedium=utmMedium&utmCampaign=utmCampaign&utmContent=utmContent&utmTerm=utmTerm'
    });*/
    ev.preventDefault();
});
/*троттлинг функция*/
function throttle(func, ms) {

  var isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (isThrottled) { // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}
/* */
/*делаем выезд скрытого меню при скроллинге вниз */
var travelMenu = document.getElementsByClassName('travel-menu');

var hiddenMenuDown = function() {
  console.log(window.pageYOffset);
  if (window.pageYOffset > 200) {
    $(travelMenu).addClass('travel-menu--active');
  } else {
    $(travelMenu).removeClass('travel-menu--active');
  }
}

var hiddenMenuDown100 = throttle(hiddenMenuDown, 100);

 $(window).scroll(function() {
  hiddenMenuDown100();
 });