
const rangeSlider = document.getElementById('range-slider1');
if (rangeSlider) {
	noUiSlider.create(rangeSlider, {
		start: 300,
		connect: 'lower',
		step: 1,
		padding: [45, 15],
		range: {
			'min': -45,
			'max': 1015,
		}
	});

	const input0 = document.getElementById('input1-0');
	const inputs = [input0];

	rangeSlider.noUiSlider.on('update', function (values, handle) {
		inputs[handle].value = Math.round(values[handle]);
	});

	const setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;
		rangeSlider.noUiSlider.set(arr);
	};

	inputs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			console.log(index);
			setRangeSlider(index, e.currentTarget.value);
		});
	});
}

const rangeSlider2 = document.getElementById('range-slider2');
if (rangeSlider2) {
	noUiSlider.create(rangeSlider2, {
		start: 300,
		connect: 'lower',
		step: 1,
		padding: [45, 15],
		range: {
			'min': -45,
			'max': 1015,
		}
	});

	const input0 = document.getElementById('input2-0');
	const inputs = [input0];

	rangeSlider2.noUiSlider.on('update', function (values, handle) {
		inputs[handle].value = Math.round(values[handle]);
	});

	const setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;
		rangeSlider2.noUiSlider.set(arr);
	};

	inputs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			console.log(index);
			setRangeSlider(index, e.currentTarget.value);
		});
	});
}

const rangeSlider3 = document.getElementById('range-slider3');
if (rangeSlider3) {
	noUiSlider.create(rangeSlider3, {
		start: 300,
		connect: 'lower',
		step: 1,
		padding: [45, 15],
		range: {
			'min': -45,
			'max': 1015,
		}
	});

	const input0 = document.getElementById('input3-0');
	const inputs = [input0];

	rangeSlider3.noUiSlider.on('update', function (values, handle) {
		inputs[handle].value = Math.round(values[handle]);
	});

	const setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;
		rangeSlider3.noUiSlider.set(arr);
	};

	inputs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			console.log(index);
			setRangeSlider(index, e.currentTarget.value);
		});
	});
}


// ================================================================================
const slider = document.querySelector('.investments__wrapper');
let mySwiper;
function mobileSlider() {
	if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
		mySwiper = new Swiper(slider, {
			slidesPerView: 1,
			spaceBetween: 20,
			centeredSlides: true,
			centeredSlidesBounds: true,
			loop: true,
			breakpoints: {
				480: {
					slidesPerView: 1.5,
				}
			},
			navigation: {
				nextEl: '.investments__button-next',
				prevEl: '.investments__button-prev',
			},
			slideClass: 'card',
			pagination: {
				el: '.investments__pagination',
				clickable: true,
			},
		});

		slider.dataset.mobile = 'true';
	}
	if (window.innerWidth > 768) {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-container-initialized')) {
			mySwiper.destroy();
		}
	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});

