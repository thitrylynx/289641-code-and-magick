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

  var max = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }
  var getHSL = function (hue, saturation, lightness) {
    return 'hsl(' + hue + ', ' + saturation + '%, ' + lightness + '%)';
  };

  var histogramHeight = 130;
  var step = histogramHeight / (max - 0);
  var barWidth = 40;
  var indent = 90;
  var initialX = 140;
  var initialY = 240;

  ctx.textBaseline = 'top';
  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : getHSL(240, 100, Math.round(Math.random() * 100));
    ctx.fillRect(initialX + indent * i, initialY, barWidth, times[i] * (-step));
    ctx.fillStyle = 'black';
    ctx.font = '16px Tahoma';
    ctx.textBaseline = 'hanging';
    ctx.fillText(names[i], initialX + indent * i, histogramHeight + 120);
    ctx.fillText(Math.round(times[i]), initialX + indent * i, 210 - (times[i] * (step)));
  }
};


