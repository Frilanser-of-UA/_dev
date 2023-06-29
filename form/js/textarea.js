const myText = document.querySelector('.input-textarea');
myText.style.cssText = `height: ${myText.scrollHeight}px; overflow-y: hidden`;

myText.addEventListener("input", function () {
	this.style.height = "46px";
	this.style.height = `${this.scrollHeight}px`;
});