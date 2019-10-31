'use strict';

//EXERCICE 1

/**
 * grid generator
 * @constructor
 * @param {number} xAxis
 * @param {number} yAxis
 */
var GridGenerator = function GridGenerator(xAxis, yAxis) {
  this.xAxis = xAxis;
  this.yAxis = yAxis;
}

/**
 * render
 */
GridGenerator.prototype.render = function() {
  this.renderGrid();
}

/**
 * Set interval
 */
GridGenerator.prototype.setInterval = function(el) {
  setTimeout(function() {
    el.style.background = this.randomColor();
    this.setInterval(el);
  }.bind(this), this.randomNumber(1000, 2000))
}

/**
 * GridGenrator
 */
GridGenerator.prototype.renderGrid = function() {
  var elBody = document.querySelector('body');
  var elTable = document.createElement('table');

  for (var i = 0; i < this.xAxis; i += 1) {
    var elTr = document.createElement('tr');

    for (var j = 0; j < this.yAxis; j += 1) {
      var elTd = document.createElement('td');

      var id = (i + 1) + '' + j ; 
      elTd.setAttribute('data-id', id);
      
      this.setInterval(elTd);

      elTd.style.width = '40px';
      elTd.style.height = '40px';

      elTr.appendChild(elTd);
    }

    elTable.appendChild(elTr);
  }

  elBody.appendChild(elTable);
}

GridGenerator.prototype.randomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}  

/**
 * randomColor
 * @return {string} color
 */
GridGenerator.prototype.randomColor = function() {
  var colors = ['red', 'yellow', 'blue', 'red', 'green'];

  return colors[Math.floor(Math.random() * colors.length)];
}

var gridGenerator = new GridGenerator(5, 5);

gridGenerator.render();

//EXERCICE 2

/**
 * DrawBarre
 * @construtor
 * @param {Object} el
 */

var DrawBarre = function DrawBarre(el) {
  this.el = document.querySelector(el);
  this.elSegment = document.createElement('div');
}
/**
 * render
 */

DrawBarre.prototype.render = function () {
  this.el.appendChild(this.renderBarre(function() {
    this.loading();
  }.bind(this)));
}

DrawBarre.prototype.loading = function() {
  setInterval(function() {
    this.elSegment.style.width = this.elSegment.dataset.progress + '%'; 
    this.elSegment.dataset.progress = parseInt(this.elSegment.dataset.progress) + 1;

    if (this.elSegment.dataset.progress >= 101) {
      clearInterval(this.clearInterval);
    }
  }.bind(this), 150);
}

DrawBarre.prototype.renderBarre = function (callback) {
  var barre = document.createElement('div');
  
  barre.style.background = 'red';
  barre.style.height = '30px';
  barre.style.width = '100%';

  this.elSegment.style.background = 'green';
  this.elSegment.style.height = '30px';
  this.elSegment.style.width = '0%';
  this.elSegment.setAttribute('data-progress', '0');

  barre.appendChild(this.elSegment);

  callback();

  return barre;
}

var drawBarre = new DrawBarre('.toto');
drawBarre.render();

//EXERCICE 3