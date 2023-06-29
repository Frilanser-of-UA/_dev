// input label animation
let inputs = document.querySelectorAll('.input').forEach(function (inputs) {
	inputs.addEventListener('focus', function () {
		this.parentElement.classList.add('_focus');
	}, true);
	inputs.addEventListener('blur', function () {
		if (this.value === '') {
			this.parentElement.classList.remove('_focus');
		}
	}, true);
});
// input label pasword not show/show
let btnPass = document.querySelectorAll('.form__icon');
btnPass.forEach(function (btn) {
	btn.addEventListener('click', function () {
		let targetPass = this.getAttribute('data-target');
		inputPass = document.querySelector(targetPass);
		if (inputPass.getAttribute('type') === 'password') {
			inputPass.setAttribute('type', 'text');
			// Иконка
			btn.classList.add('show');
			// Иконочниий шрифт
			// btn.classList.add('_icon-eye-line');
			// btn.classList.remove('_icon-eye-off-line');
		} else {
			inputPass.setAttribute('type', 'password');
			// btn.classList.remove('_icon-eye-line');
			// btn.classList.add('_icon-eye-off-line');
			btn.classList.remove('show')
		}
	});
}) 