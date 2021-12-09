$(document).ready(function () {
	$('.slider').slick({
		dots: true,
		arrows: false
	})
})

const btnBurger = document.querySelector('.header__burger')
const burgerMenu = document.querySelector('.menu__burger')

btnBurger.addEventListener('click', function() {
    btnBurger.classList.toggle('active')
    burgerMenu.classList.toggle('active')
})