let line = document.querySelector('.line--efect')
let items = Array.from(document.querySelectorAll('.content'));
if(items.length > 0 ){
    let elemTop = items[0];
    let elemBottom = items[items.length - 1];
function start() {
	let posTop = elemTop.offsetHeight
	let posBottom = elemBottom.offsetHeight
	line.style.top = posTop / 2 + 'px';
	line.style.bottom = posBottom / 2 + 'px';
}

window.addEventListener('resize', () => {
	start();
});

window.addEventListener('load', () => {
	start();
});
}











