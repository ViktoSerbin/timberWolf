// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


document.body.addEventListener("click", function (e) {
    const targetElement = e.target;
    if (targetElement.closest('.featured__item-like')) {
        targetElement.classList.toggle('_active');
    }
});