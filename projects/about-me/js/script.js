const aboutLink = document.querySelector('.about__link'),
	  aboutText = document.querySelector('.about__text');

aboutLink.addEventListener('click', (e) => {
	e.preventDefault();
	aboutText.classList.toggle('show');
});
