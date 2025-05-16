let sections = document.querySelectorAll(".fullscreen");
for (let i = 0; i < sections.length; i++) {
	let btnSection = sections[i].querySelector(".btn");

	btnSection.addEventListener('click', () => {
		sections[i].classList.remove('active');
		if (sections[i].nextElementSibling !== null) {
			sections[i].nextElementSibling.classList.add('active');
		}
		if (sections[i].nextElementSibling === null) {
			sections[0].classList.add('active');
		}
	});
	console.log('hello');
}
// sections.forEach((item) => {

// })








// document.addEventListener("DOMContentLoaded", () => {
// 	const carousel = document.getElementById('carouselExampleIndicators');
// 	const slides = document.querySelectorAll('.carousel-item');

// 	function setClassToPrevNextSlide() {
// 		const slideActive = carousel.querySelector('.carousel-item.active');
// 		slides.forEach((slide) => {
// 			slide.classList.remove('nearctive');
// 		});

// 		if (slideActive.previousElementSibling) {
// 			slideActive.previousElementSibling.classList.add('nearctive');
// 		}

// 		if (slideActive.nextElementSibling) {
// 			slideActive.nextElementSibling.classList.add('nearctive');
// 		}
// 	}

// 	setClassToPrevNextSlide();

// 	//Сработает в момент окончания перехода слайда (подсмотрено в документации к Carousel Bootstrap)
// 	carousel.addEventListener('slid.bs.carousel', event => {
// 		setClassToPrevNextSlide();
// 	});
// })