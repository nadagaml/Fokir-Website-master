$(function () {

    'use strict';

    var design = "Designer",
        develop = "Developer",
        i = 0,
        j = 0;

    var typeWriterDesign = setInterval (function () {

        document.getElementsByClassName(".firstspan").textContent += design[i];
        i = i+1;

    }, 200);
    var typeWriterDevelop = setInterval (function () {

        document.getElementsByClassName(".secondspan").textContent += develop[j];
        j = j+1;

    }, 200);

});