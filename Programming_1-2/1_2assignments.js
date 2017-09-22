function getValues(){
	//Float of the user input
	var minNum = parseFloat(document.getElementById('min-value-input').value);
	var maxNum = parseFloat(document.getElementById('max-value-input').value);
	var guessAmt = parseFloat(document.getElementById('guess-value-input').value);
	
	//Variables for the labels
	var minLabel = document.getElementById('min-num-label');
	var maxLabel = document.getElementById('max-num-label');
	var guessLabel = document.getElementById('guess-amt-label');
	
	checkInput(minNum,maxNum,guessAmt,minLabel,maxLabel,guessLabel);
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
function checkInput(minNum,maxNum,guessAmt,minLabel,maxLabel,guessLabel){
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
	
	startGame(minLabel,maxLabel,guessLabel);
}

checkGuess(){
	var guess = document.getElementById('guess-input').value;
}