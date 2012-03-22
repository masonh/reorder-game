
var gamestarted=false;
var shuffled;
var board;
var key;
var pieces = ["images/1.png", "images/2.png", "images/3.png",
		"images/4.png", "images/5.png","images/6.png",
		"images/7.png", "images/8.png", "images/9.png"];

$(document).ready(function() {
	var tmp;
	for (var i=0; i < 9; i++)
	{
		tmp = "#"+i;
		tmp2 = "spotclicked("+i+")"
		$(tmp).click(tmp2);
	}
});

function startgame()
{
	if (gamestarted)
	{
		var play = confirm("A game is already in progress. Are you sure you want to restart?");
		if(!play)
			return;
	}
	gamestarted=true;
	$("#startbutton").val("New Game");
	$("#resetbutton").show();
	
	key = shufflepieces();
	board = shufflepieces();
	display();
}

function shufflepieces()
{
	var temp;
	var pos;
	var len=pieces.length;
	for (var i=0; i < pieces.length; i++)
	{
		pos = Math.random()%len+i;
		temp = pieces[i];
		pieces[i] = pieces[pos];
		pieces[pos] = temp;
		len--;
	}
	return pieces;
}

function resetgame()
{
	board = shufflepieces();
}

function display()
{
	var tmp;
	for (var i=0; i < pieces.length; i++)
	{
		tmp = "#"+i;
		$(tmp).attr("src",board[i]);
		tmp = "#k"+i;
		$(tmp).attr("src",key[i]);
	}
}

function spotclicked(spot)
{
	alert(spot);
}
