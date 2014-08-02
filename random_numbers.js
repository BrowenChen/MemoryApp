// 
// Practice Techniques for Dominic O' Brien's How to have amazing memory. 

// Implementation
// Fill up dominic table. Option to assign and formulate a table.
// Memorize your table with random generated pairs using spaced repitition

// Next is to do strings of numbers. If we get 5 in a row correct, increase the length of the string?


// How to Memorize a Deck of Cards
// Epands further on the first app. Now we introduce a deck of playinng cards.  

var list = [];

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

	console.log("Testing translation");

	console.log(translation[6-1]);
	for (item in newlist){
		console.log(newlist[item]);
		translatedList.push([newlist[item]])
	}
}



randomNum();
translateNumber(list);