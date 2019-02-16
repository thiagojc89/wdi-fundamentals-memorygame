var cards = ["Queen","Queen","King","King"];
var cardsInPlay = [];
var cardOne = null;
var cardTwo = null;

cardOne = cards[3];
cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);


if (cardsInPlay.length === 2)
	if (cardsInPlay[0] === cardsInPlay[1])
		alert ("You got a match!");
	else
		alert ("Match not found, try again!");

