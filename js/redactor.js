/*кое какие тесты*/
var costNumber = document.getElementsByClassName('device-model__break-type-cost-number');
var modelBreakText = document.getElementsByClassName('device-model__break-text');
var pricesOkBtn = document.getElementsByClassName('prices__ok-btn');

var pricesInputNum = document.getElementsByClassName('prices__input--num');
var pricesInputText = document.getElementsByClassName('prices__input--text');

var pricesSubmitBtn = document.getElementsByClassName('prices__submit-btn');

var pricesInputField = document.getElementsByClassName ('prices__input-field');
var pricesRedactor = document.getElementById('prices-red');

var pricesCloseBtn = document.getElementsByClassName('prices__close-btn');

var deviceModelBtn = document.getElementsByClassName('device-model__button');
deviceModelBtn = Array.prototype.slice.call(deviceModelBtn);

var modelItmPhone = document.getElementsByClassName('device-model__model-item--phone');
modelItmPhone = Array.prototype.slice.call(modelItmPhone);

var modelItmPad = document.getElementsByClassName('device-model__model-item--pad');
modelItmPad = Array.prototype.slice.call(modelItmPad);

var allPricesHTML;

costNumber = Array.prototype.slice.call(costNumber);
modelBreakText = Array.prototype.slice.call(modelBreakText);

costNumber.forEach(function(elem, i) {
  function setCostNumber () {
    currentTagretNum = i;
    $(pricesInputField).removeClass('prices__input-field--inactive');
    $(pricesInputNum).removeClass('prices__input--inactive');
    $(pricesInputNum).val(costNumber[currentTagretNum].textContent);
    $(pricesOkBtn).click(function() {
      if ($(pricesInputNum).val() != '') {
        costNumber[currentTagretNum].textContent = $(pricesInputNum).val();
        $(pricesInputField).addClass('prices__input-field--inactive');
        $(pricesInputNum).addClass('prices__input--inactive');
      }
    });
  };
  elem.addEventListener('click', setCostNumber);
});

modelBreakText.forEach(function(element, j) {
  function setModelBreakText () {
    currentTagretText = j;
    $(pricesInputField).removeClass('prices__input-field--inactive');
    $(pricesInputText).removeClass('prices__input--inactive');
    $(pricesInputText).val(modelBreakText[currentTagretText].textContent);
    $(pricesOkBtn).click(function() {
      if ($(pricesInputText).val() != '') {

$(deviceModelBtn[0]).addClass('device-model__button--active');
        modelBreakText[currentTagretText].textContent = $(pricesInputText).val();
        $(pricesInputField).addClass('prices__input-field--inactive');
        $(pricesInputText).addClass('prices__input--inactive');
      }
    });
  };
  element.addEventListener('click', setModelBreakText);
});

$(pricesCloseBtn).click(function() {
  $(pricesInputField).addClass('prices__input-field--inactive');
  $(pricesInputNum).addClass('prices__input--inactive');
  $(pricesInputText).addClass('prices__input--inactive');
});

$(pricesSubmitBtn).click(function() {
  deviceModelBtn[1].click();
  modelItmPad[0].click();
  deviceModelBtn[0].click();
  modelItmPhone[0].click();
  allPricesHTML = pricesRedactor.innerHTML;
  $.ajax({
    url: "save.php",
    type : "POST",
    data : {allPricesHTML:allPricesHTML},
    success: function () {

      // $(deviceModelBtn[0]).addClass('device-model__button--active');
      // $(deviceModelBtn[1]).removeClass('device-model__button--active');

      // for (var m = 1; m < modelItmPhone.length; m++) {
      //   $(modelItmPhone[m]).removeClass('device-model__model-item--active');
      // }
      // $(modelItmPhone[0]).addClass('device-model__model-item--active');

      // for (var n = 1; m < modelItmPad.length; m++) {
      //   $(modelItmPad[m]).removeClass('device-model__model-item--active');
      // }
      // $(modelItmPad[0]).addClass('device-model__model-item--active');
      location.reload();
      console.log('сохранено');
    }
  });
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