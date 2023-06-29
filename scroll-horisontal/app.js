gsap.registerPlugin(ScrollTrigger);

let scrollHorizontal = document.querySelector(".scroll");

let tl = gsap.timeline({
	scrollTrigger: {
		pin: true,
		scrub: 2,
		trigger: scrollHorizontal,
		end: () => scrollHorizontal.scrollWidth - document.documentElement.clientWidth
	},
	defaults: { ease: "none", duration: 1 }
});

tl.to(".panel", { x: () => -(scrollHorizontal.scrollWidth - document.documentElement.clientWidth) }, 0)
	.fromTo(".firstAn", {
		y: 150,
		duration: 0.2,
		stagger: {
			amount: 0.8
		}
	}, { y: -150, }, 0)
	.fromTo(".secondAn", {
		y: -150,
		duration: 0.2,
		stagger: {
			amount: 0.8
		}
	}, { y: 150, }, 0);