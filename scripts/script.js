var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");       
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode buttons
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
	
			 this.textContent == "Easy" ? numSquares = 3: numSquares = 6;
			 reset();
			
		});
	}
}

function setUpSquares(){
	for(var i = 0; i < squares.length; i++){
		//add eventListener 
		squares[i].addEventListener("click", function() {
			//square color
			var clickedColor = this.style.background;
			//compare two colors
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
				resetBtn.textContent = "Play Again?"
			} else {
				this.style.background = "#232323"; 
				messageDisplay.textContent = "Try Again!"
			}
		});
	}
}


function reset(){
	//generate new random colors
	colors = generateRandomColors(numSquares);
	//pick new random color from array
	pickedColor = pickColor();
	//change disp color (in the questiom)
	colorDisplay.textContent = pickedColor;
	//change color of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	resetBtn.textContent = "New Colors";
	h1.style.background = "steelblue";
	messageDisplay.textContent = "";
}



resetBtn.addEventListener("click", function(){
	reset();
})



function changeColors(color){
	//when user gets a correct one, all squares change to to match the right answer
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	arr = [];
	//generate and add num random colors to the array
	for(var i = 0; i < num; i++){
		//get the random color and push into array
		arr.push(randomColor())
	}
	//return the array
	return arr;
}

function randomColor(){
	//pick red from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick green from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick blue from 0-255
	var b = Math.floor(Math.random() * 256);
	//combine into rgb(r, g, b);
	var randColor = "rgb(" + r + ", " + g + ", " + b + ")";
	return randColor;
}