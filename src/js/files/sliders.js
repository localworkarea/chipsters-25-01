/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	if (document.querySelector('.sec-01__slider')) { 
		var swiper = new Swiper('.sec-01__slider', {
				modules: [Navigation],
				observer: true,
				observeParents: true,
				slidesPerView: 1,
				spaceBetween: 0,
				speed: 800,
				// effect: 'fade',
				navigation: {
						prevEl: '.sec-01__slider .swiper-button-prev',
						nextEl: '.sec-01__slider .swiper-button-next',
				},
				on: {
						init: function () {
								this.slides.forEach(function (slide, index) {
										var slideId = 'slide-' + (index + 1);
										slide.setAttribute('id', slideId);
										slide.classList.add('slide-' + (index + 1)); // Добавляем класс по номеру id
								});
						},
						slideChange: function () {
								var activeIndex = this.activeIndex;
								var sectionBody = this.el.closest('.sec-01__body'); // Находим ближайший родительский элемент с классом section-body
	
								// Удаляем все классы слайдов из section-body
								for (var i = 1; i <= swiper.slides.length; i++) {
										sectionBody.classList.remove('slide-' + i);
								}
	
								// Добавляем класс для текущего активного слайда
								sectionBody.classList.add('slide-' + (activeIndex + 1)); 
						}
				}
		});
	}
}

window.addEventListener("load", function (e) {
	initSliders();
});