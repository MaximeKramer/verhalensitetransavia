/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var section = document.querySelector('section.like');
var button = document.querySelector('section > button.star');

var fly = function () {
	section.classList.toggle('flying');
};

button.addEventListener('click', fly);

var section = document.querySelector('article.aanb-1a');
var hover1 = document.querySelector('article.aanb-1:hover');

var new1 = function (Event) {
	section.classList.add('new');
};

hover1.addEventListener('hover', new1);