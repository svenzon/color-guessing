var colors = [];
var pickedColor;
var numSquares = 6;

var squares = document.querySelectorAll(".square");
var header = document.querySelector("h1");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init() {
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons() {
	for (var i = 0; i < modeBtns.length; i++) {
		modeBtns[i].addEventListener("click", function(){
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
		
			if(this.textContent === "Easy"){
			numSquares = 3;
			} else {
			numSquares = 6;
			}
			reset();
		});
	}
}

function setUpSquares() {
	for(var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;
		
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play again?";
			changeColors(clickedColor);
			header.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again!";
		}
		});
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	
	for(var i = 0; i < squares.length; i++){
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	header.style.backgroundColor = "steelblue";
}

//easyBtn.addEventListener("click", function(){
//	hardBtn.classList.remove("selected");
//	easyBtn.classList.add("selected");
//	numSquares = 3;
//	colors = generateRandomColors(numSquares);
//	pickedColor = pickColor();
//	colorDisplay.textContent = pickedColor;
	
//	for(var i = 0; i < squares.length; i++) {
//		if(colors[i]) {
//			squares[i].style.backgroundColor = colors[i];
//		} else {
//			squares[i].style.display = "none";
//		}
//	}
//});

//hardBtn.addEventListener("click", function(){
//	easyBtn.classList.remove("selected");
//	hardBtn.classList.add("selected");
//	numSquares = 6;
//	colors = generateRandomColors(numSquares);
//	pickedColor = pickColor();
//	colorDisplay.textContent = pickedColor;
//	colors = generateRandomColors(3);
//	pickedColor = pickColor();
//	colorDisplay.textContent = pickedColor;
	
//	for(var i = 0; i < squares.length; i++) {
//		squares[i].style.backgroundColor = colors[i];
//		squares[i].style.display = "block";
//	}
//});

resetButton.addEventListener("click", function(){
	reset();
//	colors = generateRandomColors(numSquares);
//	pickedColor = pickColor();
//	colorDisplay.textContent = pickedColor;
//	this.textContent = "New colors";
//	messageDisplay.textContent = "";
	
//	for(var i = 0; i < squares.length; i++) {
//		squares[i].style.backgroundColor = colors[i];
//	}
//	header.style.backgroundColor = "steelblue";
});

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function changeColors(color){
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
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





