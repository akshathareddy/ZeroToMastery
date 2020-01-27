var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector(".random-button")

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomValueGenerator(){
  var letters = '0123456789ABCDEF';
  var colr1 = '#', colr2 = '#';
  for (var i = 0; i < 6; i++) {
    colr1 += letters[Math.floor(Math.random() * 16)];
    colr2 += letters[Math.floor(Math.random() * 16)];
  }
  color1.value = colr1;
  color2.value= colr2;
  setGradient();
}

setGradient();


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", randomValueGenerator);

