/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
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
				modules: [Navigation, Pagination],
				observer: true,
				observeParents: true,
				slidesPerView: 1,
				spaceBetween: 0,
				speed: 800,
				navigation: {
						prevEl: '.sec-01__slider .swiper-button-prev',
						nextEl: '.sec-01__slider .swiper-button-next',
				},

				// Пагинация
			  pagination: {
					el: '.swiper-pagination',
					clickable: false,
					// renderBullet: (index, className) => {
					// 	return `<span class="${className}" data-index="${index}"></span>`;
					// },
				},
				// --------

				on: {
						init: function () {
								this.slides.forEach(function (slide, index) {
										var slideId = 'slide-' + (index + 1);
										slide.setAttribute('id', slideId);
										slide.classList.add('slide-' + (index + 1)); // Добавляем класс по номеру id
								});

								const bullets = document.querySelectorAll('.swiper-pagination-bullet');
			          const pagination = document.querySelector('.swiper-pagination');
			          // Ширина контейнера пагинации
			          const paginationWidth = 90; // px
			          const bulletWidth = 16; // px
			          const initialOffset = ((paginationWidth - bulletWidth) / 2) + 12;
			          // Устанавливаем начальное смещение для всех буллетов
			          bullets.forEach((bullet, index) => {
			            // bullet.style.transform = `translateX(${initialOffset}px)`;
			            bullet.style.left = `${initialOffset}px`;
			          });
			          // Устанавливаем начальные классы
			          bullets[0].classList.add('swiper-pagination-bullet-active');
			          bullets[1]?.classList.add('swiper-pagination-bullet-active-next');
			          bullets[2]?.classList.add('swiper-pagination-bullet-active-next-next');
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


							// переключение и смещение буллетов =====================
							const bullets = document.querySelectorAll('.swiper-pagination-bullet');
		          const activeIndex2 = swiper.activeIndex;

		          // Ширина контейнера пагинации
		          const paginationWidth = 90; // px
		          const bulletWidth = 16; // px
		          const initialOffset = ((paginationWidth - bulletWidth) / 2) + 12;

		          // Смещение для всех буллетов
		          const offset = initialOffset - activeIndex2 * bulletWidth;

		          bullets.forEach((bullet, index) => {
		            // Обновляем смещение
		            // bullet.style.transform = `translateX(${offset}px)`;
		            bullet.style.left = `${offset}px`;
							
		            // Удаляем старые классы
		            bullet.classList.remove(
		              'swiper-pagination-bullet-active-prev-prev',
		              'swiper-pagination-bullet-active-prev',
		              'swiper-pagination-bullet-active',
		              'swiper-pagination-bullet-active-next',
		              'swiper-pagination-bullet-active-next-next'
		            );
							
		            // Устанавливаем новые классы
		            if (index === activeIndex2) {
		              bullet.classList.add('swiper-pagination-bullet-active');
		            } else if (index === activeIndex2 - 1) {
		              bullet.classList.add('swiper-pagination-bullet-active-prev');
		            } else if (index === activeIndex2 - 2) {
		              bullet.classList.add('swiper-pagination-bullet-active-prev-prev');
		            } else if (index === activeIndex2 + 1) {
		              bullet.classList.add('swiper-pagination-bullet-active-next');
		            } else if (index === activeIndex2 + 2) {
		              bullet.classList.add('swiper-pagination-bullet-active-next-next');
		            }
		          });
						}
				}
		});
	}
}

window.addEventListener("load", function (e) {
	initSliders();
});
