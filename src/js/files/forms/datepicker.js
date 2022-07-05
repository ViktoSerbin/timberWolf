/* Календарь */

// Подключение функционала "Чертогов Фрилансера"
// Подключение списка активных модулей
import { flsModules } from "../modules.js";

// Подключение модуля
import datepicker from 'js-datepicker';

const picker = datepicker('[data-datepicker]', {
	customDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	customMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	overlayButton: 'Apply',
	overlayPlaceholder: 'Years (4 numbers)',
	startDay: 1,
	formatter: (input, date, instance) => {
		const value = date.toLocaleDateString()
		input.value = value
	},
	onSelect: function (input, instance, date) {

	}
});
flsModules.datepicker = picker;
