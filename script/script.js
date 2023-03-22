const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const body = document.querySelector("body");
var sub_menu = document.getElementById("Sub_Menu");
var down_menu = document.getElementById("down-menu");
var up_menu = document.getElementById("up-menu");

menu_btn.addEventListener('click', function () 
{
	menu_btn.classList.toggle('is-active');
	mobile_menu.classList.toggle('is-active');
	if(body.style.overflow === "hidden")
	{
		body.style.overflow = "auto";
	}
	else{
		body.style.overflow = "hidden";
	}
});

function show_more_menu(){
	if(sub_menu.style.display === "none")
	{
		sub_menu.style.display = "block";
		up_menu.style.display = "block"
		down_menu.style.display = "none"
	}
	else
	{
		sub_menu.style.display = "none";
		up_menu.style.display = "none"
		down_menu.style.display = "block"
	}
	
}

$('.shopIt_slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

$('.section_twiter_slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    dots:true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
});  