const buttonWrapper = document.querySelector('.button-wrapper');
const button = document.querySelector('.button');
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
button.addEventListener('mouseenter', () => {
	button.style.left = `${getRandomInt(0, 70)}%`;
	button.style.top = `${getRandomInt(0, 70)}%`;
})