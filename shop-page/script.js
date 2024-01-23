var slideIndex = 1;
var autoChangeInterval;

showSlides(slideIndex);
toggleAuto(); // Start autoplay by default

function plusSlides(n) {
	clearInterval(autoChangeInterval);
	showSlides((slideIndex += n));
}

function currentSlide(n) {
	clearInterval(autoChangeInterval);
	showSlides((slideIndex = n));
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");

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
	var autoPlayButton = document.querySelector(".auto-play");
	if (autoChangeInterval) {
		clearInterval(autoChangeInterval);
		autoPlayButton.textContent = "Play";
	} else {
		autoChangeInterval = setInterval(function () {
			plusSlides(1);
		}, 3000); // Change slide every 3 seconds
		autoPlayButton.textContent = "Pause";
	}
}
