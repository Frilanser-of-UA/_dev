gsap.registerPlugin(ScrollTrigger)
// const tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".trigger",
//         start: "top top",
//         end: "bottom bottom",
//         scrub: 1,
//         // pin: true,
//         markers: true
//     }
// });
// tl.to(".box", { opacity: 1, duration: 0.3 })
// tl.to(".box", { top: '70%', duration: 1 })
// tl.to(".box", { top: '35%', duration: 1 })
// tl.to(".box", { top: '70%', left: '90%', duration: 1 })
// tl.to(".box", { top: '60%', left: '15px', duration: 1 })
// tl.to(".box", { top: '20%', left: '0px', x: '-65%', duration: 1 })
// tl.to(".box", { top: '50%', left: '15px', x: '0%', duration: 1 })

// document.querySelectorAll('.item').forEach((elemSw) => {
//     elemSw.style.marginRight = "30%";
// });

// let animateSlides = gsap.utils.toArray(".item");
// animateSlides.forEach((elem, i) => {
//     gsap.from(elem, {
//         // marginLeft: '-15%',
//         // css: { marginRight: '30%' },
//         marginRight: '300px',
//         // x: -500,
//         duration: 1.5,
//         ease: "laniar",
//         scrollTrigger: {
//             trigger: elem,
//             start: "-=20% +=60%", // к примеру :)
//             end: '+=400px',
//             scrub: 1,
//             // markers: true,
//         }
//     });
// });


//  nav (добавление id и количество точек навигации создаеться 
// динамически и зависит от количества секций с классом dc-scroll)
let summEl = document.querySelectorAll('.dc-scroll');
let dots = document.querySelector('.dc-page-nav');
if (summEl.length > 0 || window.innerWidth > 992) {
    function initDots() {
        for (let i = 0; i < summEl.length; i++) {
            let idSection = summEl[i];
            let num = [i + 1];
            idSection.id = `section-${num}`;
            document.querySelector('.dc-page-nav').insertAdjacentHTML('beforeEnd',
                `<a class="dc-nav-dot next-${num}" href="#section-${num}"></a>`
            );
        }
    }
    initDots();
}
// const observerDot = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             document.querySelectorAll('.dc-nav-dot').forEach((link) => {
//                 let id = link.getAttribute('href').replace('#', '');
//                 if (id === entry.target.id) {
//                     link.classList.add('dc-nav-dot--active');
//                     link.nextElementSibling.classList.add('dc-nav-dot--next');

//                 } else {
//                     link.classList.remove('dc-nav-dot--active');
//                     link.nextElementSibling.classList.remove('dc-nav-dot--next');
//                     // link.nextElementSibling.classList.remove('dc-nav-dot--next');
//                 }
//             });
//         }
//     });
// }, {
//     threshold: 0.5
// });


// document.querySelectorAll('.dc-scroll').forEach(section => {
//     observerDot.observe(section);
// });
let aaa = document.querySelector('.dc-nav-dot');
aaa.classList.add('dc-nav-dot--active');



// ======================
const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".trigger",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        // pin: true,
        markers: true
    }
});
tl1.to(".dc-nav-dot--active", { y: 20 * 1 + 'px', duration: 1 })
tl1.to(".dc-nav-dot--active", { y: 20 * 2 + 'px', duration: 1 })
tl1.to(".dc-nav-dot--active", { y: 20 * 3 + 'px', duration: 1 })
tl1.to(".dc-nav-dot--active", { y: 20 * 4 + 'px', duration: 1 })
tl1.to(".dc-nav-dot--active", { y: 20 * 5 + 'px', duration: 1 })
tl1.to(".dc-nav-dot--active", { y: 20 * 6 + 'px', duration: 1 })
tl1.to(".dc-nav-dot--active", { y: 20 * 7 + 'px', duration: 1 })

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".trigger",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        // pin: true,
        markers: true
    }
});
tl2.to(".next-2", { y: '-26px', duration: 1 })
tl2.to(".next-3", { y: '-26px', duration: 1 })
tl2.to(".next-4", { y: '-26px', duration: 1 })
tl2.to(".next-5", { y: '-26px', duration: 1 })
tl2.to(".next-6", { y: '-26px', duration: 1 })
tl2.to(".next-7", { y: '-26px', duration: 1 })

// const tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".trigger",
//         start: "top top",
//         end: "bottom bottom",
//         scrub: 1,
//         // pin: true,
//         markers: true
//     }
// });
// tl.to(".box", { opacity: 1, duration: 0.3 })
// tl.to(".box", { top: '70%', duration: 1 })
// tl.to(".box", { top: '35%', duration: 1 })
// tl.to(".box", { top: '70%', left: '90%', duration: 1 })
// tl.to(".box", { top: '60%', left: '15px', duration: 1 })
// tl.to(".box", { top: '20%', left: '0px', x: '-65%', duration: 1 })
// tl.to(".box", { top: '50%', left: '15px', x: '0%', duration: 1 })