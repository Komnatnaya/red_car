'use strict';

// Открытие меню в мобильной версии

var headerNav = document.getElementById('headerNav');
var openMenu = document.getElementById('openMenu');
var closeMenu = document.getElementById('closeMenu');

openMenu.addEventListener('click', function(event) {
	event.preventDefault();
	headerNav.classList.add('header__navigation--open');
});

closeMenu.addEventListener('click', function(event) {
	event.preventDefault();
	headerNav.classList.remove('header__navigation--open');
});
