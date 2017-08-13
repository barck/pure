var link = document.querySelectorAll(".tab_link");

for(var i = 0; i < link.length; i++){

	var attribute = link[i].getAttribute("data-id");
	console.log(attribute);
	console.log(link[i]);
	link[i].addEventListener("click", function(){alert(link[i])}); //почему здесь link[i]  уже undefined?
}
//  Сделай все по шагам, каждый этам заливать в гит, если на какой то этап уходит много времени - писать мне.
//  разметку немного переделал, ее не менять.

// 1. Циклом пройтись по всем линкам 
// 2. В цикле на каждый элемент линка повесить листнер события click
// 3. В функции листнера которая страбатывает при клике, получить id data-id
// 4. Используя этот id найти в доме нужный box
// 5. Используя получиные данные реализовать табы.


