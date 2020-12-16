$(document).on("click", "nav a", function(e) {
	passive: false
    e.preventDefault();
    var id  = $(this).attr('href');
    var top = $(id).offset().top; // получаем координаты блока
    $('body, html').animate({scrollTop: top}, 800); // плавно переходим к блоку
});
/*

menu.onclick = function myFunction() {
	var x = document.getElementById('globalBackground');
	if (x.className == "globalBW") {
	x.className = "globalWB"
	} 
	else {
	x.className = "globalBW";
 	}
}
*/