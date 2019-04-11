// *** spyder bot like **** \\ 
// curtida automática
setInterval(function(){		
	var home = document.querySelector("a.FPmhX.notranslate.nJAzx")
	var picture = document.querySelector("._9AhH0")
	var heart = document.querySelector("button.coreSpriteHeartOpen") 
	var arrow = document.querySelector("a.coreSpriteRightPaginationArrow") 	

	if(home){ home.click(); }	

	if(picture){ picture.click(); }	
	
	if(heart){ heart.click() }	
		arrow.click(); 	
	
	},4000);  


// seguidores	
var i = 0;
setInterval(function(){
	var btn = document.querySelectorAll("button");
	if(btn){
		i++; 
		btn[i].click(); 
		console.log(i);
	}
},1000); 

var contador = 0;
setInterval(function(){
	a = document.querySelectorAll("td.titleColumn"); 
	console.log(a[contador].innerText);	
	contador++; 
	if (contador==250) {
		window.reload();
	}

},1000) 