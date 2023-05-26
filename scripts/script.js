let btn1 = document.querySelector('.bt1');
let btn2 = document.querySelector('.bt2');
let btn3 = document.querySelector('.bt3');
let btn4 = document.querySelector('.bt4');
let btn5 = document.querySelector('.bt5');
let btn6 = document.querySelector('.bt6');
let el1 = document.querySelector('.glav');
let el2 = document.querySelector('.inf');
let el3 = document.querySelector('.gal1');
let el4 = document.querySelector('.gallery');
let el5 = document.querySelector('.inf3');
let el6 = document.querySelector('.footer');

btn1.addEventListener('click', function () {
    el1.scrollIntoView({ behavior: "smooth"});
});
btn2.addEventListener('click', function () {
    el2.scrollIntoView({ behavior: "smooth"});
});
btn3.addEventListener('click', function () {
    el3.scrollIntoView({ behavior: "smooth"});
});
btn4.addEventListener('click', function () {
    el4.scrollIntoView({ behavior: "smooth"});
});
btn5.addEventListener('click', function () {
    el5.scrollIntoView({ behavior: "smooth"});
});
btn6.addEventListener('click', function () {
    el6.scrollIntoView({ behavior: "smooth"});
});

function hidden(id){
	let el = document.getElementById(id);
    if (el.style.display == 'none';){
        el.style.display = 'block';
	} 
	else {
	 	el.style.display = 'none';
	}
}