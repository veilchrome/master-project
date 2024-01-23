let slideIndex = 1;
let autoChangeInterval;

showSlides(slideIndex);
toggleAuto(); // Start autoplay by default

function plusSlides(n) {
	clearInterval(autoChangeInterval);
	showSlides((slideIndex += n));
	if (autoChangeInterval) {
		toggleAuto(); // Restart autoplay after manual slide change
	}
}

function currentSlide(n) {
	clearInterval(autoChangeInterval);
	showSlides((slideIndex = n));
	if (autoChangeInterval) {
		toggleAuto(); // Restart autoplay after manual slide change
	}
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");

	if (n > slides.length) {
		slideIndex = 1;
	}

	if (n < 1) {
		slideIndex = slides.length;
	}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}

function toggleAuto() {
	let autoPlayButton = document.querySelector(".auto-play");
	if (autoChangeInterval) {
		clearInterval(autoChangeInterval);
		autoChangeInterval = null;
		autoPlayButton.textContent = "Play";
	} else {
		autoChangeInterval = setInterval(function () {
			plusSlides(1);
		}, 3000); // Change slide every 3 seconds
		autoPlayButton.textContent = "Pause";
	}
}
