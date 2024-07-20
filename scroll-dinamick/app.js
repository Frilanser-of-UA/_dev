// dinamick scroll
let listsScroll = Array.from(document.querySelectorAll('.list'));
if (listsScroll.length > 0) {
    function startScroll() {
        let windowHeight = window.innerHeight - 100;
        console.log(windowHeight);
        listsScroll.forEach(el => {
            let elemHeight = el.offsetHeight;
            if (elemHeight > windowHeight) {
                el.classList.add('scroll');
                el.style.maxHeight = windowHeight + 'px';
            }else{
                el.style.maxHeight = windowHeight + 'px';
            }
        });
    }
}
window.addEventListener('resize', () => {
    startScroll();
});

window.addEventListener('load', () => {
    startScroll();
});