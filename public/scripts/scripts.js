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
var link = document.querySelectorAll(".tab_link");

for(var i = 0; i < link.length; i++){


	link[i].addEventListener("click", function(){
		event.preventDefault();
		removeVisible();
		var value = this.getAttribute("data-id");
		addVisible(value);
	}); 

}

function removeVisible(){
	var boxes = document.querySelectorAll(".tab");
	for (var j = 0; j < boxes.length; j++){
		boxes[j].classList.remove("visible");
	}
}

function addVisible(value){
	var box = document.querySelector("[data-box='" + value + "']");
		box.classList.add("visible");
}

//  Сделай все по шагам, каждый этам заливать в гит, 
//  если на какой то этап уходит много времени - писать мне.
//  разметку немного переделал, ее не менять.

// 1. Циклом пройтись по всем линкам 
// 2. В цикле на каждый элемент линка повесить листнер события click
// 3. В функции листнера которая страбатывает при клике, получить id data-id
// 4. Используя этот id найти в доме нужный box
// 5. Используя получиные данные реализовать табы.


