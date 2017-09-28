//Variables for input
var minNum;
var maxNum;
var guessAmt;
var guessLeft;
var answer;

//Variables for the labels
var minLabel;
var maxLabel;
var guessLabel;
function getValues(){
	//Float of the user input
	minNum = parseFloat(document.getElementById('min-value-input').value);
	maxNum = parseFloat(document.getElementById('max-value-input').value);
	guessAmt = parseFloat(document.getElementById('guess-value-input').value);
	
	minLabel = document.getElementById('min-num-label');
	maxLabel = document.getElementById('max-num-label');
	guessLabel = document.getElementById('guess-amt-label');
	checkInput();
}

function startGame(){
	document.getElementById('check-guess-button').disabled = false;
	document.getElementById('guess-input').disabled = false;
	document.getElementById('guess-input').focus();
	
	document.getElementById('min-value-input').disabled = true;
	document.getElementById('start-game-button').disabled = true;
	document.getElementById('max-value-input').disabled = true;
	document.getElementById('guess-value-input').disabled = true;
}
function checkInput(){
	if (isNaN(minNum) || minNum < 0){
		minNum = 0;
		minLabel.innerHTML = 'Minimum Number was changed to 0!';
		minLabel.style.color = 'red';
		document.getElementById('min-value-input').value = minNum;
	}
	else if (minNum > 10000){
		minNum = 10000;
		minLabel.innerHTML = 'Minimum Number was changed to 10,000!';
		minLabel.style.color = 'red';
		document.getElementById('min-value-input').value = minNum;
	}
	
	if (isNaN(maxNum) || maxNum > 1000000){
		maxNum = 1000000;
		maxLabel.innerHTML = 'Maximum Number was changed to 1,000,000!';
		maxLabel.style.color = 'red';
		document.getElementById('max-value-input').value = maxNum;
	}
	else if (maxNum < minNum){
		maxNum = minNum + 10000;
		maxLabel.innerHTML = 'Maximum Number was changed to 10,000 over the minimum number!';
		maxLabel.style.color = 'red';
		document.getElementById('max-value-input').value = maxNum;
	}
	
	if (isNaN(guessAmt) || guessAmt < 1 || guessAmt > 20){
		guessAmt = 20;
		guessLabel.innerHTML = 'Amount of gusses was changed to 20!';
		guessLabel.style.color = 'red';
		document.getElementById('guess-value-input').value = guessAmt;
	}
	
	guessLeft = guessAmt;
	genAnswer();
	startGame(minLabel,maxLabel,guessLabel);
}

function genAnswer(){
	answer = Math.round(Math.random() * (maxNum - minNum) + minNum);
}
function checkGuess(){
	var guess = parseFloat(document.getElementById('guess-input').value);
	guessLabel.innerHTML = 'You have: ' + guessLeft + ' guesses left!';
	console.log("Guess is " + guess + "answer is " + answer)
	var guessBox = document.getElementById('guessDisplay');
	
	if(guessLeft == 0){
		$(guessBox).removeClass('alert-info');
		$(guessBox).removeClass('alert-success');
		$(guessBox).removeClass('alert-warning');
		$(guessBox).addClass('alert-danger');
		guessBox.innerHTML = '<strong> Sorry! You lost</strong>';
	}
	else if (isNaN(guess)){
		$(guessBox).removeClass('alert-info');
		$(guessBox).addClass('alert-danger');
		guessBox.innerHTML = '<strong>At least <i>try</i> to enter a real number</strong>';
	}
	else if(guess > answer){
		$(guessBox).removeClass('alert-info');
		$(guessBox).removeClass('alert-danger');
		$(guessBox).addClass('alert-warning');
		guessBox.innerHTML = '<strong>Your guess is too high!</strong>';	
		guessLeft--;
		guessLabel.innerHTML = 'You have: ' + guessLeft + ' guesses left!';
	}
	else if(guess < answer){
		$(guessBox).removeClass('alert-info');
		$(guessBox).removeClass('alert-danger');
		$(guessBox).addClass('alert-warning');
		guessBox.innerHTML = '<strong>Your guess is too low!</strong>';
		guessLeft--;
		guessLabel.innerHTML = 'You have: ' + guessLeft + ' guesses left!';
	}
	else{
		$(guessBox).removeClass('alert-info');
		$(guessBox).removeClass('alert-danger');
		$(guessBox).removeClass('alert-warning');
		$(guessBox).addClass('alert-success');
		guessBox.innerHTML = '<strong>Congratulations! You win!</strong>';
	}
}