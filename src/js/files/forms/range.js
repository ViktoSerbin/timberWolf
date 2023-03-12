// Подключение из node_modules
import * as noUiSlider from 'nouislider';
import '../../libs/wNumb.min.js';
// Подключение стилей из scss/base/forms/range.scss 
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	const priceSlider = document.querySelector('#range');
	if (priceSlider) {
		// let textFrom = priceSlider.getAttribute('data-from');
		// let textTo = priceSlider.getAttribute('data-to');
		noUiSlider.create(priceSlider, {
			start: [250,7500],
			connect: true,
			range: {
				'min': [0],
				'max': [10000]
			},
			format: wNumb({
				decimals: 0,
				prefix: '$ '
			})
		});

		const priceStart = document.getElementById('price-start');
		const priceEnd = document.getElementById('price-end');
		priceStart.addEventListener('change', setPriceValues);
		priceEnd.addEventListener('change', setPriceValues);
		const inputs = [priceStart, priceEnd];

		function setPriceValues() {
			let priceStartValue;
			let priceEndValue;
			if (priceStart.value != '') {
				priceStartValue = priceStart.value;
			}
			if (priceEnd.value != '') {
				priceEndValue = priceEnd.value;
			}
			priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
		}

		priceSlider.noUiSlider.on('update', function (values, handle) {
			inputs[handle].value = values[handle];
		});
	}
}
rangeInit();
