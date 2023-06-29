$('.artickle__multi-slider').slick({
	infinite: true,
	dots: false,
	slidesToShow: 3,
	dots: true,
	arrows: true,
	prevArrow: $('.slider-arrows__prev'),
	nextArrow: $('.slider-arrows__next'),
	appendDots: $('.slider-dots'),
	responsive: [
		{
			breakpoint: 980,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 680,
			settings: {
				slidesToShow: 1,
			},
		},
	],
	slidesToScroll: 1,
});

