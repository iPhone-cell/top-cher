// Hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}))

$(function () {



	// Slider: https://kenwheeler.github.io/slick/	
	let slider = $("#jobsSlider");

	slider.slick({
		infinite: false,
		slidesToShow: 2.5,
		slidesToScroll: 3,
		arrows: true,
		dots: true,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1.1,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					infinite: true,
				}
			}
		]
	})
});

// Tabs
const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');

const changeClass = el => {
	for (let i = 0; i < tabs.children.length; i++) {
		tabs.children[i].classList.remove('active');
	}
	el.classList.add('active');
}


tabs.addEventListener('click', e => {
	const currTab = e.target.dataset.btn;
	changeClass(e.target);
	for (let i = 0; i < content.length; i++) {
		content[i].classList.remove('active');
		if (content[i].dataset.content === currTab) {
			content[i].classList.add('active');
		}
	}
})

const tabsDop = document.getElementById('tabs-dop');
const content2 = document.querySelectorAll('.content-dop');

const changeClassDop = el => {
	for (let i = 0; i < tabsDop.children.length; i++) {
		tabsDop.children[i].classList.remove('active');
	}
	el.classList.add('active');
}


tabsDop.addEventListener('click', e => {
	const currTabDop = e.target.dataset.btndop;
	changeClassDop(e.target);
	for (let i = 0; i < content2.length; i++) {
		content2[i].classList.remove('active');
		if (content2[i].dataset.content2 === currTabDop) {
			content2[i].classList.add('active');
		}
	}
})