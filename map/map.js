document.querySelectorAll('.map-ua__item').forEach(function (link, index) {
	link.addEventListener('click', function () {
		let posItem = this.getBoundingClientRect();
		let mapUa = document.querySelector('.map-ua').getBoundingClientRect();
		let mapPopup = document.querySelector('.map-ua__popup');
		mapPopup.style.display = "block";
		let mapPopupXY = mapPopup.getBoundingClientRect();
		mapPopup.style.top = (posItem.top + (mapPopupXY.height / 5)) - mapUa.top + 'px';
		mapPopup.style.left = (posItem.left + (mapPopupXY.width / 2.85)) - mapUa.left + 'px';
		if (this.classList.contains('active')) {
			this.classList.add('active');
		} else {
			const activeLink = document.querySelector('.map-ua__item.active');
			if (activeLink) {
				activeLink.classList.remove('active');
			}
			this.classList.add('active');
		}
	});
});