// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


document.body.addEventListener("click", function (e) {
    const targetElement = e.target;
    if (targetElement.closest('.featured__item-like')) {
        targetElement.classList.toggle('_active');
    }

	if (targetElement.closest('.detail-tour__wishlist')) {
        targetElement.classList.toggle('_active');
    }
});

function menuFilter() {
	if (document.querySelector(".filter-btn")) {
		document.addEventListener("click", function (e) {
			if (e.target.closest('.filter-btn')) {
				document.documentElement.classList.toggle("filter-open");
			}
		});
	};
}

menuFilter();