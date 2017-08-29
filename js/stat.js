'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);


  var getRandomBlueColor = function () {
    return 'hsl(240, 100%, ' + Math.round(Math.random() * 100) + '%)';
  };
  var HISTOGRAM_HEIGHT = 150;
  var BAR_WIDTH = 40;
  var INDENT = 90;
  var BAR_INDENT = 100;
  var TEXT_INDENT = 20;
  var INITIAL_X = 150;
  var INITIAL_Y = 240;
  var maxTime = Math.max.apply(null, times);
  var step = HISTOGRAM_HEIGHT / maxTime;

  ctx.textBaseline = 'top';
  for (var i = 0; i < times.length; i++) {
    var YOUR_NAME = 'Вы';
    var YOUR_COLOR = 'rgba(255, 0, 0, 1)';
    var PLAYERS_COLOR = getRandomBlueColor();
    var barHeight = times[i] * step;
    var totalWidth = INITIAL_X + INDENT * i;
    var playerName = names[i];
    var playerTime = times[i];
    var totalNameIndent = HISTOGRAM_HEIGHT + BAR_INDENT;
    var totalTimeIndent = INITIAL_Y - barHeight - TEXT_INDENT;
    ctx.fillStyle = names[i] === YOUR_NAME ? YOUR_COLOR : PLAYERS_COLOR;
    ctx.fillRect(totalWidth, INITIAL_Y, BAR_WIDTH, -barHeight);
    ctx.fillStyle = 'black';
    ctx.font = '16px Tahoma';
    ctx.textBaseline = 'hanging';
    ctx.fillText(playerName, totalWidth, totalNameIndent);
    ctx.fillText(Math.round(playerTime), totalWidth, totalTimeIndent);
  }
};


