//  сортировка комплексов

// var sort = new Array();

// document.querySelector('#first').onchange = function() {
// 	with (this)
// 	sort.push(options [selectedIndex].value);
// }
// document.querySelector('#second').onchange = function() {
// 	with (this)
// 	sort.push(options [selectedIndex].value);
// }
// document.querySelector('#fff').onclick = function() {
// 	document.getElementById('fff').setAttribute('data-filter', sort)
// }

// fixmenu 
// window.onscroll = function() {
// 	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
// 	if (scrolled > "50" ) {
// 		document.querySelector('.header').style.background="#ffffff";
// 		document.querySelector('.header').style.padding="15px 0";
// 		document.querySelector('#nav-toggle').style.top="50px";

// 	}
// 	else {
// 		document.querySelector('.header').style.background="none";
// 		document.querySelector('.header').style.padding="30px 0";
// 		document.querySelector('#nav-toggle').style.top="65px";
// 	}
// }

// // sandwich
// function sandwich(id){
// 	style = document.getElementById(id).className;
// 	if(style=='active'){
// 		document.getElementById(id).classList.remove('active');
// 	}else{
// 		document.getElementById(id).classList.add('active');
// 	}
// }

// function sandwichL(id){
// 	right = document.getElementById(id).style.right;
// 	if(right=='35px'){
// 		document.getElementById(id).style.right='300px';
// 		document.querySelector('#nav-toggle span').style.top='-20px';
// 	}else{
// 		document.getElementById(id).style.right='35px';
// 		document.querySelector('#nav-toggle span').style.top='10px';
// 	}
// }

// // sidebar 
// function sidebar(id){
// 	right = document.getElementById(id).style.right;

// 	if(right=='-350px'){
// 		document.getElementById(id).style.right='0';
// 	}else{
// 		document.getElementById(id).style.right='-350px';
// 	}
// }

// document.querySelector('.smart-menu a').onclick=function(){
// 	document.querySelector('.smart-menu').style.right='-350px';
// }
// // close btn
// function leftClose(){
// 	document.querySelector('.left-bar-full #top').style.opacity='1';
// 	document.querySelector('.left-bar-full #bottom').style.opacity='1';
// 	document.querySelector('.left-bar-full #top').style.transform='rotate(45deg)';
// 	document.querySelector('.left-bar-full #bottom').style.transform='rotate(-45deg)';
// }
// function rightClose(){
// 	document.querySelector('.right-bar-full #top').style.opacity='1';
// 	document.querySelector('.right-bar-full #bottom').style.opacity='1';
// 	document.querySelector('.right-bar-full #top').style.transform='rotate(45deg)';
// 	document.querySelector('.right-bar-full #bottom').style.transform='rotate(-45deg)';
// }
// function sideClose(){
// 	document.querySelector('.left-bar-full').style.left='-76vw';
// 	document.querySelector('.right-bar-full').style.width='0';
// }

// // Opnebox clicks

// function openbox(id){
// 	display = document.getElementById(id).style.left;

// 	if(display=='-100vw'){
// 		document.getElementById(id).style.left='0';
// 	}else{
// 		document.getElementById(id).style.left='-100vw';
// 	}
// }
// // plusfunc
// function plusFunc(id){
// 	opacity = document.getElementById(id).style.opacity;

// 	if(opacity=='0'){
// 		document.getElementById(id).style.transition='all .4s ease-in-out';
// 		document.getElementById(id).style.opacity='1';
// 	}else{
// 		document.getElementById(id).style.transition='all .4s ease-in-out';
// 		document.getElementById(id).style.opacity='0';
// 	}
// }

// // heightbox

// function heightBox(id){
// 	height = document.getElementById(id).style.maxHeight;

// 	if(height=='0px'){
// 		document.getElementById(id).style.transition='all .6s linear';
// 		document.getElementById(id).style.maxHeight='2700px';
// 		document.getElementById(id).style.paddingBottom='30px';

// 	}else{
// 		document.getElementById(id).style.transition='all .6s linear';
// 		document.getElementById(id).style.maxHeight='0px';
// 		document.getElementById(id).style.paddingBottom='0px';
// 	}
// }
// function closeBox(id){
// 	height = document.getElementById(id).style.maxHeight;

// 	document.getElementById(id).style.transition='all .4s linear';
// 	document.getElementById(id).style.maxHeight='0px';
// 	document.getElementById(id).style.paddingBottom='0px';
// }
function changePic(){
	document.getElementById('image').classList.add('changeClass');
	document.getElementById("image").src="img/2.jpg";
};
function changePic2(){
	document.getElementById('image').classList.add('changeClass');
	document.getElementById("image").src="img/3.jpg";
};
function changePic3(){
	document.getElementById('image').classList.add('changeClass');
	document.getElementById("image").src="img/4.jpg";
};
function changePic4(){
	document.getElementById('image').classList.add('changeClass');
	document.getElementById("image").src="img/5.jpg";
};
function changePic5(){
	document.getElementById('image').classList.add('changeClass');
	document.getElementById("image").src="img/6.jpg";
};
function changePic6(){
	document.getElementById('image').classList.add('changeClass');
	document.getElementById("image").src="img/7.jpg";
};

function openbox(){
	dis = document.getElementById('box').style.display;

	document.getElementById('box2').style.display='none';
	document.getElementById('box3').style.display='none';
	document.getElementById('box4').style.display='none';
	document.getElementById('box5').style.display='none';
	document.getElementById('box6').style.display='none';

	if(dis=='none'){
	   document.getElementById('box').style.display='block';
	}else{
	   document.getElementById('box').style.display='none';
	}
}
function openbox2(){
	display = document.getElementById('box2').style.display;
	document.getElementById('box').style.display='none';
	document.getElementById('box3').style.display='none';
	document.getElementById('box4').style.display='none';
	document.getElementById('box5').style.display='none';
	document.getElementById('box6').style.display='none';
	
	if(display=='none'){
	   document.getElementById('box2').style.display='block';
	}else{
	   document.getElementById('box2').style.display='none';
	}
}
function openbox3(){
	display = document.getElementById('box3').style.display;
	document.getElementById('box2').style.display='none';
	document.getElementById('box').style.display='none';
	document.getElementById('box4').style.display='none';
	document.getElementById('box5').style.display='none';
	document.getElementById('box6').style.display='none';
	
	if(display=='none'){
	   document.getElementById('box3').style.display='block';
	}else{
	   document.getElementById('box3').style.display='none';
	}
}
function openbox4(){
	display = document.getElementById('box4').style.display;
	document.getElementById('box').style.display='none';
	document.getElementById('box3').style.display='none';
	document.getElementById('box2').style.display='none';
	document.getElementById('box5').style.display='none';
	document.getElementById('box6').style.display='none';
	
	if(display=='none'){
	   document.getElementById('box4').style.display='block';
	}else{
	   document.getElementById('box4').style.display='none';
	}
}
function openbox5(){
	display = document.getElementById('box5').style.display;
	document.getElementById('box').style.display='none';
	document.getElementById('box3').style.display='none';
	document.getElementById('box4').style.display='none';
	document.getElementById('box2').style.display='none';
	document.getElementById('box6').style.display='none';
	
	if(display=='none'){
	   document.getElementById('box5').style.display='block';
	}else{
	   document.getElementById('box5').style.display='none';
	}
}
function openbox6(){
	display = document.getElementById('box6').style.display;
	document.getElementById('box').style.display='none';
	document.getElementById('box3').style.display='none';
	document.getElementById('box4').style.display='none';
	document.getElementById('box5').style.display='none';
	document.getElementById('box2').style.display='none';
	
	if(display=='none'){
	   document.getElementById('box6').style.display='block';
	}else{
	   document.getElementById('box6').style.display='none';
	}
}
	