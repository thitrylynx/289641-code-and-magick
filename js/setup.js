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
var userDialog = document.querySelector('.setup');
var similarList = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var fragment = document.createDocumentFragment();
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
