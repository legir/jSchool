/* jshint esversion:6*/
(function () {
	'use strict';

	document.addEventListener('DOMContentLoaded', function () {

		let clockElem = document.querySelector('#clock')

		let showTime = function (){
			clockElem.innerText = new Date().toLocaleString();
		}

	showTime();
	setInterval(showTime, 200);

	});
})()

