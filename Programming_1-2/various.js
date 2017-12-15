function compareWords(){
	var word1 = document.getElementById('first-word-input').value;
	var word2 = document.getElementById('second-word-input').value;
	var shortestWord;
	var similarChars = 0;
	if (word1.length < word2.length)
		shortestWord = word1;
	else
		shortestWord = word2;
		
	for (let i = 0; i < shortestWord.length; i++){
		if (word1.charAt(i) == word2.charAt(i))
			similarChars++;
	}
	document.getElementById('character-display').innerHTML = '<b>' + similarChars + '</b>';
	console.log(similarChars);
}