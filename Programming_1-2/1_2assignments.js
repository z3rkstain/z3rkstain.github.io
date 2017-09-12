function startGame(){
	let minNum = parseFloat(document.getElementById('min-value-input').value);
	let maxNum = document.getElementById('max-value-input').value;
	let guessAmt = document.getElementById('guess-value-input').value;

	let correctNum = Math.round(Math.random() * (maxNum-minNum)) + minNum;
	console.log(correctNum);
}
function checkInput(){
	
}