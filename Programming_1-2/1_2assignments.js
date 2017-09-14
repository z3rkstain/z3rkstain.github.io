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
	
	
}
function checkInput(minNum,maxNum,guessAmt,minLabel,maxLabel,guessLabel){
	if (isNaN(minNum) || minNum < 0){
		minNum = 0;
		minLabel.innerHTML = 'Minimum Number was changed to 0!';
		minLabel.style.color = 'red';
		document.getElementById('min-value-input').value = 0;
	}
	else if (minNum > 10000){
		minNum = 10000;
		minLabel.innerHTML = 'Minimum Number was changed to 10,000!';
		minLabel.style.color = 'red';
		document.getElementById('min-value-input').value = 10000;
	}
	
	if (isNaN(maxNum) || maxNum > 1000000){
		maxNum = 1000000;
		maxLabel.innerHTML = 'Maximum Number was changed to 1,000,000!';
		maxLabel.style.color = 'red';
		document.getElementById('max-value-input').value = 1000000;
	}
	else if (maxNum < minNum){
		maxNum = minNum + 10000;
		maxLabel.innerHTML = 'Maximum Number was changed to 10,000 over the minimum number!';
		maxLabel.style.color = 'red';
		document.getElementById('max-value-input').value = 1000000;
	}
}