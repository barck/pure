var slides = document.querySelectorAll(".slides .slide");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");

function nextSlide() {
    goToSlide(currentSlide+1);
}

function previousSlide() {
    goToSlide(currentSlide-1);
}

function goToSlide(n) {
    slides[currentSlide].className = "slide";
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = "slide showing";
}


next.onclick = function() {
    nextSlide();
};
prev.onclick = function() {
    previousSlide();
};