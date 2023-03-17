/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, EffectFade, Pagination, Thumbs } from "swiper";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
    // Перечень слайдеров
    // Проверяем, есть ли слайдер на стронице
    if (document.querySelector(".promo__slider")) {
        // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper(".promo__slider", {
            // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            modules: [Navigation, EffectFade],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            speed: 1000,
            effect: "fade",
            // Кнопки "влево/вправо"
            navigation: {
                prevEl: ".promo__slider-navigation .swiper-button-prev",
                nextEl: ".promo__slider-navigation .swiper-button-next",
            },
        });
    }

    if (document.querySelector(".galleryslider__slider")) {
        // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper(".galleryslider__slider", {
            // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            modules: [Navigation, EffectFade],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 15,
            autoHeight: true,
            speed: 1000,
            effect: "fade",
            //touchRatio: 0,
            //simulateTouch: false,
            //loop: true,
            //preloadImages: false,
            //lazy: true,

            /*
			// Эффекты
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

            // Пагинация
            /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

            // Скроллбар
            /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

            // Кнопки "влево/вправо"
            navigation: {
                prevEl: ".galleryslider__head-navigation .swiper-button-prev",
                nextEl: ".galleryslider__head-navigation .swiper-button-next",
            },

            // Брейкпоинты
            /*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
            // События
            on: {},
        });
    }

    if (document.querySelector(".guides__slider")) {
        // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper(".guides__slider", {
            // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            modules: [Navigation],
            observer: true,
            observeParents: true,
            slidesPerView: 1.3,
            spaceBetween: 60,
            speed: 1000,
            // Кнопки "влево/вправо"
            navigation: {
                prevEl: ".guides__head-navigation .swiper-button-prev",
                nextEl: ".guides__head-navigation .swiper-button-next",
            },
            // Брейкпоинты
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                992: {
                    slidesPerView: 1.3,
                    spaceBetween: 60,
                },
                1268: {
                    slidesPerView: 1.3,
                    spaceBetween: 60,
                },
            },
        });
    }

    if (document.querySelector(".viewed__slider")) {
        // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper(".viewed__slider", {
            // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            modules: [Navigation],
            observer: true,
            observeParents: true,
            slidesPerView: 3,
            spaceBetween: 32,
            speed: 1000,
            // Кнопки "влево/вправо"
            navigation: {
                prevEl: ".viewed__head-navigation .swiper-button-prev",
                nextEl: ".viewed__head-navigation .swiper-button-next",
            },
            // Брейкпоинты
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 32,
                },
                820: {
                    slidesPerView: 2,
                    spaceBetween: 32,
                },
                1268: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                },
            },
        });
    }

    if (
        document.querySelector(".tour-detail__slider" && ".tour-thumbs__slider")) {// Указываем скласс нужного слайдера
        // Создаем слайдер
        const tourThumbsSlider = new Swiper(".tour-thumbs__slider", {
            // Подключаем модули слайдера
            // для конкретного случая
            modules: [Navigation],
            observer: true,
            observeParents: true,
            slidesPerView: 4,
            spaceBetween: 16,
            autoHeight: true,
            speed: 1000,
			direction: "vertical",
            // Брейкпоинты
            breakpoints: {
                320: {
                    slidesPerView: 3,
                    spaceBetween: 16,
					direction: "horizontal",
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 16,
					direction: "vertical",
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                1598: {
                    slidesPerView: 4,
                    spaceBetween: 16,
                },
            },
            // События
            on: {},
        });
        // Создаем слайдер
        new Swiper(".tour-detail__slider", {
            // Указываем скласс нужного слайдера
            // Подключаем модули слайдера // для конкретного случая
            modules: [Navigation, Pagination, Thumbs],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 15,
            autoHeight: true,
            speed: 1000,
            thumbs: {
                swiper: tourThumbsSlider,
            },
            // Пагинация
            pagination: {
                el: ".tour-detail__pagin-block .swiper-pagination",
                type: "fraction",
            },
            // Кнопки "влево/вправо"
            navigation: {
                prevEl: ".tour-detail__navigation .swiper-button-prev",
                nextEl: ".tour-detail__navigation .swiper-button-next",
            },
        });
    }
}

window.addEventListener("load", function (e) {
    // Запуск инициализации слайдеров
    initSliders();
    // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
    //initSlidersScroll();
});
