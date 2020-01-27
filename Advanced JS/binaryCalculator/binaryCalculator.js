let result = document.getElementById("res");
let buttons = ["btn0", "btn1", "btnClr", "btnEql",
              "btnSum", "btnSub", "btnMul", "btnDiv"];
result.value = "";

function doCalculation(event){
	debugger;
	// console.log("button clicked");
    switch(event.target.textContent){
    	case "0":
    	case "1":
    	case "+":
    	case "-":
    	case "*":
    	case "/":
    					result.value += event.target.textContent;
    					break;
    	case "C":
    					result.value = "";
    					break;
    	case "=":
    					let expression = result.value;
    					let regexForNumber = /(\d+)/g;
    					expression = expression.replace(regexForNumber, function(numberMatched)
    					{
    						return parseInt(numberMatched,2);
    					})
    					result.value = Math.floor(eval(expression)).toString(2);
    				   	break;
    }
}

buttons.forEach((button)=>{
    let btn = document.getElementById(button);
    btn.addEventListener("click",doCalculation);
});
