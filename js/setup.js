'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];


var wizards = [
  {
    firstName: WIZARD_FIRST_NAMES[Math.floor(Math.random() * (WIZARD_FIRST_NAMES.length))],
    lastName: WIZARD_LAST_NAMES[Math.floor(Math.random() * (WIZARD_LAST_NAMES.length))],
    coatColor: COAT_COLORS[Math.floor(Math.random() * (COAT_COLORS.length))],
    eyesColor: EYES_COLORS[Math.floor(Math.random() * (EYES_COLORS.length))]
  },
  {
    firstName: WIZARD_FIRST_NAMES[Math.floor(Math.random() * (WIZARD_FIRST_NAMES.length))],
    lastName: WIZARD_LAST_NAMES[Math.floor(Math.random() * (WIZARD_LAST_NAMES.length))],
    coatColor: COAT_COLORS[Math.floor(Math.random() * (COAT_COLORS.length))],
    eyesColor: EYES_COLORS[Math.floor(Math.random() * (EYES_COLORS.length))]
  },
  {
    firstName: WIZARD_FIRST_NAMES[Math.floor(Math.random() * (WIZARD_FIRST_NAMES.length))],
    lastName: WIZARD_LAST_NAMES[Math.floor(Math.random() * (WIZARD_LAST_NAMES.length))],
    coatColor: COAT_COLORS[Math.floor(Math.random() * (COAT_COLORS.length))],
    eyesColor: EYES_COLORS[Math.floor(Math.random() * (EYES_COLORS.length))]
  },
  {
    firstName: WIZARD_FIRST_NAMES[Math.floor(Math.random() * (WIZARD_FIRST_NAMES.length))],
    lastName: WIZARD_LAST_NAMES[Math.floor(Math.random() * (WIZARD_LAST_NAMES.length))],
    coatColor: COAT_COLORS[Math.floor(Math.random() * (COAT_COLORS.length))],
    eyesColor: EYES_COLORS[Math.floor(Math.random() * (EYES_COLORS.length))]
  }
];
var test = wizards[0];
var test2 = wizards[1];
var test3 = wizards[2];
var test4 = wizards[3];

for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].firstName + ' ' + wizards[i].lastName;
  similarListElement.appendChild(wizardElement);
}



