// 
// Practice Techniques for Dominic O' Brien's How to have amazing memory. 

// Implementation
// Fill up dominic table. Option to assign and formulate a table.
// Memorize your table with random generated pairs using spaced repitition

// Next is to do strings of numbers. If we get 5 in a row correct, increase the length of the string?


// How to Memorize a Deck of Cards
// Epands further on the first app. Now we introduce a deck of playinng cards.  

var list = [];
var trans =  [];
var randomNum = function(){
	list = [];
	for (var i = 0; i < 100; i++){

		list.push([Math.round(Math.random() * 100)]);

	}

	console.log(list);
}



var translateNumber = function(newlist){
	var wordList = [];
	var translatedList = [];
	var translation = [ {1: 'A'}, {2 : 'B'}, {3 : 'C'}, {4 : 'D'}, {5 : 'E'},
				   {6 : 'S'}, {7 : 'G'}, {8 : 'H'}, {9 : 'N'}, {0 : 'O'}];
	
	for (item in newlist){
		var firstDigit = Math.floor(item / 10);
		var secondDigit = item % 10;

		for (var key in translation[firstDigit-1]){
			var firstLetter = translation[firstDigit-1][key];
		}
		for (var key in translation[secondDigit-1]){
			var secondLetter = translation[secondDigit-1][key];
		}

		translatedList.push([item, firstLetter+secondLetter])
	}

	return translatedList;
}




randomNum();
trans = translateNumber(list);
console.log(trans);