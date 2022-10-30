const buttonsCollaps = document.querySelectorAll('.collaps__item_title');
const contentCollaps = document.querySelectorAll('.collaps__item_content');
buttonsCollaps.forEach((element) => {
	element.addEventListener('click', () => {
		let content = element.nextElementSibling;
		if (content.style.maxHeight) {
			contentCollaps.forEach((el) => {
				el.style.maxHeight = null;
			})
		} else {
			contentCollaps.forEach((el) => {
				el.style.maxHeight = null;
			})
			content.style.maxHeight = `${content.scrollHeight}px`
		}

	})
})