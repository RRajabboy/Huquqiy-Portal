let navOpen = document.getElementById('nav-open')
let navClose = document.getElementById('nav-close')
let navbar = document.getElementById('navbar')

navOpen.onclick = () => {
	navbar.classList.add('active')
}
navClose.onclick = () => {
	navbar.classList.remove('active')
}

let son = document.querySelectorAll('.navbar2 .container .drop-dawn')
for(let i = 0; i < son.length; i++){
	son[i].onclick = () => {
		son[i].classList.add('border-b')
		for(let a = 0; a < son.length; a++){
			if(a == i) {
				continue
			}
			son[a].classList.remove('border-b')
		}
		
	}
}


let langValue = document.getElementById('lang')
let lang = document.querySelectorAll('.lang')
let langCopy = []

for (let i = 0; i < lang.length; i++) {
	langCopy.push(lang[i].cloneNode(true))
	langValue.appendChild(langCopy[i])
	langCopy[i].style.display = 'none'
	langCopy[0].style.display = 'flex'
	lang[0].classList.add('active')
}
console.log(langCopy);
for (let i = 0; i < lang.length; i++) {
	lang[i].onclick = () => {
		langCopy[i].style.display = 'flex'
		lang[i].classList.add('active')
		for(let a = 0; a <= lang.length; a++) {
			if (i == a) {
				continue;
			}
			langCopy[a].style.display = 'none'
			lang[a].classList.remove('active')
		}
	}
}

////////////////////////// TARGIBOT ///////////////////////////

let navNum = document.querySelectorAll('.banners .container .flex')

let leftBtn = document.getElementById('leftBtn') 
let rightBtn = document.getElementById('rightBtn') 

let arrSon = [];
let nth = 0
for(let i = 0; i < navNum.length; i++) {
	arrSon.push(document.createElement('span'))
	arrSon[i].innerHTML = i + 1
	document.getElementById('numbers').appendChild(arrSon[i]);
	arrSon[0].classList.add('son')
	navNum[0].classList.add('none')
	arrSon[i].onclick = () => {
		nth = i
		arrSon[i].classList.add('son')
		navNum[i].classList.add('none')
		for(let b = 0; b < navNum.length; b++){
			if(b == i) {
				continue
			}
			arrSon[b].classList.remove('son')
			navNum[b].classList.remove('none')	
		}
	}
	leftBtn.onclick = () => {
		nth--
		if(nth < 0) nth = navNum.length -1
		arrSon[nth].classList.add('son')
		navNum[nth].classList.add('none')
		for(let b = 0; b < navNum.length; b++){
			if(b == nth) {
				continue
			}
			arrSon[b].classList.remove('son')
			navNum[b].classList.remove('none')	
		}
	}
	rightBtn.onclick = () => {
		nth++
		console.log(nth)
		if(nth >= navNum.length) nth = 0
		arrSon[nth].classList.add('son')
		navNum[nth].classList.add('none')
		for(let b = 0; b < navNum.length; b++){
			if(b == nth) {
				continue
			}
			arrSon[b].classList.remove('son')
			navNum[b].classList.remove('none')	
		}
	}
}




////////////////////////// TARGIBOT ///////////////////////////
///////////////////////////  END  /////////////////////////////

////////////////////////// NUMBER ////////////////////////////

let tashName = document.querySelectorAll('.call .container .sonlar table .jadval tr .tashName')
let callNav = document.getElementById('callNavigation')
let boxCall = document.querySelectorAll('.call .container .sonlar table .jadval')
let arrName = [];

for(let y = 0; y < boxCall.length; y++) {
	arrName.push(document.createElement('span'))
	console.log(arrName[y]);
	arrName[y].innerHTML = tashName[y].textContent
	callNav.appendChild(arrName[y])
	arrName[0].classList.add('activ')
	boxCall[0].classList.add('none')
	arrName[y].onclick = () => {
		arrName[y].classList.add('activ')
		boxCall[y].classList.add('none')
		for(let b = 0; b < boxCall.length; b++){
			if(b == y) {
				arrName[b].classList.add('noHover')
				continue;	
			}
			arrName[b].classList.remove('noHover')
			arrName[b].classList.remove('activ')
			boxCall[b].classList.remove('none')	
		}
	}
}	


//////////////////////////////////////// Onlayn sinov //////////////////////////////////////

// let navRight = document.querySelectorAll('.ramz .container .right a.box')
// let tests = document.querySelectorAll('.ramz .container .left .test')
// let clickTest = document.querySelectorAll('.sinov .container .box .right .alar .batafsil')
// let clickNumber;
// for (let i = 0; i < navRight.length; i++) {
// 	navRight[i].onclick = () => {
// 		tests[i].classList.add('tests')
// 		for (let a = 0; a < navRight.length; a++) {
// 			if(i == a) {
// 				continue
// 			}
// 			tests[a].classList.remove('tests')
// 		}
// 	}
// }


////////////////////////////////////////////// News ////////////////////////////////

// let orginalNews = document.getElementById('orginalNews')
// console.log(orginalNews);
// const cloneNews = orginalNews.cloneNode(true)
// document.getElementById('newsNav').appendChild(cloneNews)

// let viewNum = document.querySelectorAll('.Yangilik .container .flex .right .box .viewNumber')
// let viewNumber = []
// for (let i = 0; i< viewNum.length; i++) {
//     viewNumber.push(Number(viewNum[i].textContent))
// }

// viewNumber.sort()