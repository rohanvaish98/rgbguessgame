var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var btnReset = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for(var i = 0 ; i < modeButtons.length; i++ ){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected"); 
		this.classList.add("selected");
		if(this.textContent === "Easy"){
			numSquares = 3;
		}
		else{
			numSquares = 6;
		}
		reset();

	});
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	btnReset.textContent = "New Colors";
	msgDisplay.textContent = "";
	for (var i = 0 ; i < squares.length ; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];	
		}
		else{
			squares[i].style.display = "none";  
		}
		
	}
	h1.style.backgroundColor = "steelblue";

}

btnReset.addEventListener("click",function(){
	reset();
});

// btnEasy.addEventListener("click",function(){
// 	btnHard.classList.remove("selected");
// 	btnEasy.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0 ; i < squares.length ; i++ ){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}
// 		else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// btnHard.addEventListener("click",function(){
// 	btnHard.classList.add("selected");
// 	btnEasy.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0 ; i < squares.length ; i++ ){
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}

// });

// btnReset.addEventListener("click",function(){
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	this.textContent = "New Colors";
// 	msgDisplay.textContent = "";
// 	for (var i = 0 ; i < squares.length ; i++){
// 		squares[i].style.backgroundColor = colors[i];
// 	}
// 	h1.style.backgroundColor = "steelblue";
// });

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor){
			msgDisplay.textContent = "CORRECT!";
			btnReset.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else{
			this.style.backgroundColor = "#232323";	
			msgDisplay.textContent = "TRY AGAIN!"	
		}
	});
}

function changeColors(color){
	for (var i =0 ; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0 ; i < num ; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}



