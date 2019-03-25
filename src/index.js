window.addEventListener('DOMContentLoaded', function () { 

"use strict";

let tabs = require('./modules/tabs.js'),
    modal = require('./modules/modal.js'),
    phoneMask = require('./modules/phoneMask.js'),
    form = require('./modules/form.js'),
    slider = require('./modules/slider.js'),
    calc = require('./modules/calc.js'),
    timer = require('./modules/timer.js');

tabs();
modal();
phoneMask();
form();
slider();
calc();
timer();

});
 