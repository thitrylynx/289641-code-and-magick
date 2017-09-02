'use strict';

var WIZARDS = [];
var WIZARD_FIRST_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var WIZARD_LAST_NAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
var EVENT_TYPES = {
  CLICK: 'click',
  KEYDOWN: 'keydown'
};
var KEYCODES = {
  ENTER: 13,
  ESC: 27
};
var userDialog = document.querySelector('.setup');
var similarList = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var fragment = document.createDocumentFragment();

var dialogUSerTitle = document.getElementById('setup-user-title');
var dialogOpen = document.querySelector('.setup-open');
var dialog = document.querySelector('.setup');
var dialogClose = document.querySelector('.setup-close');
var dialogSave = document.querySelector('.setup-submit');
var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var getRandomNumber = function (value) {
  return Math.floor(Math.random() * (value.length));
};
var getRandomName = function (firstName, lastName) {
  var firstElement = firstName[getRandomNumber(firstName)];
  var secondElement = lastName[getRandomNumber(lastName)];
  return firstElement + ' ' + secondElement;
};
var getRandomColor = function (color) {
  var element = color[getRandomNumber(color)];
  return element;
};
var renderRandomWizards = function (array) {
  for (var j = 0; j < 4; j++) {
    array.push({
      name: getRandomName(WIZARD_FIRST_NAMES, WIZARD_LAST_NAMES),
      coatColor: getRandomColor(COAT_COLORS),
      eyesColor: getRandomColor(EYES_COLORS)
    });
  }
};
var getWizardElement = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};
var createWizards = function (wizards) {
  for (var k = 0; k < wizards.length; k++) {
    fragment.appendChild(getWizardElement(wizards[k]));
  }
  similarList.appendChild(fragment);
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
};

renderRandomWizards(WIZARDS);
createWizards(WIZARDS);

var onPopupEscPress = function (evt) {
  if (evt.keyCode === KEYCODES.ESC && evt.target !== dialogUSerTitle) {
    closePopup();
  }
};
var openPopup = function () {
  dialog.classList.remove('hidden');
  document.addEventListener(EVENT_TYPES.KEYDOWN, onPopupEscPress);
};
var closePopup = function () {
  dialog.classList.add('hidden');
  document.removeEventListener(EVENT_TYPES.KEYDOWN, onPopupEscPress);
};
var changeCoatColor = function () {
  wizardCoat.style.fill = getRandomColor(COAT_COLORS);
};
var changeEyesColor = function () {
  wizardEyes.style.fill = getRandomColor(EYES_COLORS);
};
var changeFireballColor = function () {
  wizardFireball.style.background = getRandomColor(FIREBALL_COLORS);
};

dialogUSerTitle.addEventListener('invalid', function () {
  if (!dialogUSerTitle.validity.valid) {
    if (dialogUSerTitle.validity.tooShort) {
      dialogUSerTitle.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (dialogUSerTitle.validity.tooLong) {
      dialogUSerTitle.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (dialogUSerTitle.validity.valueMissing) {
      dialogUSerTitle.setCustomValidity('Обязательное поле');
    }
  } else {
    dialogUSerTitle.setCustomValidity('');
  }
});
dialogUSerTitle.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});
dialogOpen.addEventListener(EVENT_TYPES.CLICK, openPopup);
dialogOpen.addEventListener(EVENT_TYPES.KEYDOWN, function (evt) {
  if (evt.keyCode === KEYCODES.ENTER) {
    openPopup();
  }
});
dialogClose.addEventListener(EVENT_TYPES.CLICK, closePopup);
dialogClose.addEventListener(EVENT_TYPES.KEYDOWN, function (evt) {
  if (evt.keyCode === KEYCODES.ENTER) {
    closePopup();
  }
});
dialogSave.addEventListener(EVENT_TYPES.CLICK, function () {
  if (dialogUSerTitle.validity.valid) {
    closePopup();
  }
});
dialogSave.addEventListener(EVENT_TYPES.KEYDOWN, function (evt) {
  if (evt.keyCode === KEYCODES.ENTER && dialogUSerTitle.validity.valid) {
    closePopup();
  }
});

wizardCoat.addEventListener(EVENT_TYPES.CLICK, changeCoatColor);
wizardEyes.addEventListener(EVENT_TYPES.CLICK, changeEyesColor);
wizardFireball.addEventListener(EVENT_TYPES.CLICK, changeFireballColor);
