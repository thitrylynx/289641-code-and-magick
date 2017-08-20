'use strict';

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var renderRandomNumber = function (value) {
  var valueResult = Math.floor(Math.random() * (value.length));
  return valueResult;
};
var wizards = [
  {
    firstName: WIZARD_FIRST_NAMES[renderRandomNumber(WIZARD_FIRST_NAMES)],
    lastName: WIZARD_LAST_NAMES[renderRandomNumber(WIZARD_LAST_NAMES)],
    coatColor: COAT_COLORS[renderRandomNumber(COAT_COLORS)],
    eyesColor: EYES_COLORS[renderRandomNumber(EYES_COLORS)]
  },
  {
    firstName: WIZARD_FIRST_NAMES[renderRandomNumber(WIZARD_FIRST_NAMES)],
    lastName: WIZARD_LAST_NAMES[renderRandomNumber(WIZARD_LAST_NAMES)],
    coatColor: COAT_COLORS[renderRandomNumber(COAT_COLORS)],
    eyesColor: EYES_COLORS[renderRandomNumber(EYES_COLORS)]
  },
  {
    firstName: WIZARD_FIRST_NAMES[renderRandomNumber(WIZARD_FIRST_NAMES)],
    lastName: WIZARD_LAST_NAMES[renderRandomNumber(WIZARD_LAST_NAMES)],
    coatColor: COAT_COLORS[renderRandomNumber(COAT_COLORS)],
    eyesColor: EYES_COLORS[renderRandomNumber(EYES_COLORS)]
  },
  {
    firstName: WIZARD_FIRST_NAMES[renderRandomNumber(WIZARD_FIRST_NAMES)],
    lastName: WIZARD_LAST_NAMES[renderRandomNumber(WIZARD_LAST_NAMES)],
    coatColor: COAT_COLORS[renderRandomNumber(COAT_COLORS)],
    eyesColor: EYES_COLORS[renderRandomNumber(EYES_COLORS)]
  }
];
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.firstName + ' ' + wizard.lastName;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};
var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
