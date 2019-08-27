//fonctionalité 1
// let footer = document.querySelector("footer");

// function clickfooter(){
// 	console.log("clique ");
// }
// footer.addEventListener("click",clickfooter);

/////////////////fonctionalité 1-bis//////////////
let footer = document.querySelector("footer");
 var i=1;
function clickfooter(){
	console.log("clic numero "+i);
	i++;
}
footer.addEventListener("click",clickfooter);

//////////////fonctionalité 2///////////////////
 var nbh = document.getElementById("navbarHeader");
 let ms = false;

 function deleteClass(){
 //My own method
 	if(ms==false){
 		nbh.setAttribute("class","bg-dark");
 		ms = true;
 		console.log("class deleted");
 	}
 	else if (ms==true){
 		nbh.setAttribute("class","collapse");
 		ms = false;
 	}
//method using your indice
 	//nbh.classList.toggle("collapse");
 } 
document.getElementsByClassName("navbar-toggler")[0].addEventListener("click",deleteClass);

///////////////Fonctionnalité 3////////////////////
let btnEdit1 = document.querySelector("button.btn-outline-secondary");
function setcolortext(){
	document.querySelector("p.card-text").style.color = "red";
}
btnEdit1.onclick = setcolortext;

//////////////fonctionalité4/////////////
let btnEdit2 = document.querySelectorAll("button.btn-outline-secondary")[1];
istextcolored = false;
function setColorText2(){
	if (istextcolored==false){
		document.querySelectorAll("p.card-text")[1].style.color ="green";
		istextcolored = true;
	}
	else {
		document.querySelectorAll("p.card-text")[1].style.color = "";
		istextcolored = false;
	}
}

btnEdit2.onclick = setColorText2;

////////////fonctionalité5/////////////////
let linkCss = document.querySelector("link");
 href = linkCss.href;
 console.log(href);
 let isCssDesactive = true;

function desactiveCss(){
	if(isCssDesactive==true){
		linkCss.href = "";
		isCssDesactive = false;
	}
	else {
		linkCss.href = href;
		isCssDesactive = true;
	}

}
var nav = document.getElementsByClassName("container d-flex justify-content-between")[0];

nav.addEventListener("dblclick",desactiveCss);


 	//////////////Fonctionalité6/////////////

var viewButton = document.getElementsByClassName("btn-sm btn-success");
var t = document.querySelectorAll("p.card-text")[0].textContent;
var ambonyV = false;
img = document.querySelectorAll("img");
// for (i=0;i<6;i++){
	

for (let i = 0; i<img.length; i++){
	
		viewButton[i].addEventListener("mouseover",function(){
			if (ambonyV==false){
				img[i].style.width = "20%";
				document.querySelectorAll("p.card-text")[i].textContent ="";
				ambonyV = true;
			}
			else {
				document.querySelectorAll("p.card-text")[i].textContent = t;
		 		img[i].style.width = "100%";
		 		ambonyV= false;
			}
		});
}


//////////////Fonctionalité 7//////////////////// 


let card = document.querySelectorAll("div.col-md-4");
var b = [];


//document.querySelectorAll("a.my-2")[0].href ="";


document.querySelectorAll("a.my-2")[1].addEventListener("click",function(){
	// for (let i = 0;i<card.length;i++){
	//  b[i] = card[i].innerHTML;
	// }
	// 	var a = b[0];
	// for(i = 0; i<b.length-1;i++){
	// 	b[i]= b[i+1];
	// }
	// b[b.length-1]=a;
	// for(let k = 0; k<b.length;k++){
	// 	card[i].innerHTML = b[i];
	// }
	var cp = card[0].innerHTML;
	c0 = card[card.length-1].innerHTML;
	console.log(i)
	for (let i=card.length-1; i>0; i--){
		card[i].innerHTML=card[i-1].innerHTML;
	}
	card[0].innerHTML=c0;

	//card[0].parentNode.insertBefore(card[0].parentNode.childNodes[0], card[3].parentNode.childNodes[5]);

});




///////////////fonctionalité 8//////////////////

document.querySelectorAll("a.my-2")[0].href ="#";


document.querySelectorAll("a.my-2")[0].addEventListener("click",function(){
	// for (let i = 0;i<card.length;i++){
	//  b[i] = card[i].innerHTML;
	// }
	// 	var a = b[0];
	// for(i = 0; i<b.length-1;i++){
	// 	b[i]= b[i+1];
	// }
	// b[b.length-1]=a;
	// for(let k = 0; k<b.length;k++){
	// 	card[i].innerHTML = b[i];
	// }
	
	c0 = card[0].innerHTML;
	console.log(i)
	for (let i=0;i <card.length-1; i++){
		card[i].innerHTML=card[i+1].innerHTML;
	}
	card[card.length-1].innerHTML=c0;

	//card[0].parentNode.insertBefore(card[0].parentNode.childNodes[0], card[3].parentNode.childNodes[5]);

});


////// reactivation de la fonctionalité 6, jsuis capable de trouver une solution mais je n'ai pas assez de temps, il en est de même pour la fonctionalité 9. déso






 	