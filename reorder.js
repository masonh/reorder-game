
var gamestarted=false;
var shuffled;
var board;
var key;
var pieces = ["images/1.png", "images/2.png", "images/3.png",
		"images/4.png", "images/5.png","images/6.png"];
var click = -1;
var moves = 0;

function startgame()
{
	if (gamestarted)
	{
		var play = confirm("A game is already in progress. Are you sure you want to restart?");
		if(!play)
			return;
	}
	gamestarted=true;
	moves=0;
	$("#startbutton").val("New Game");
	$("#resetbutton").show();
	
	key = shufflepieces(pieces);
	board = key.slice();
	board = shufflepieces(board);
	shuffled = board.slice();
	display();
}

function shufflepieces(_pieces)
{
	var result = _pieces.slice();
	var temp;
	var pos;
	var len=result.length;
	for (var i=0; i < result.length; i++)
	{
		pos = Math.floor((Math.random()*len)+i);
		temp = result[i];
		result[i] = result[pos];
		result[pos] = temp;
		len--;
	}
	len = 9-result.length;
	for (var i=result.length; i < 9; i++)
	{
		pos = Math.floor((Math.random()*len)+1);
		result[i] = result[pos];
		len--;
	}
	return result;
}

function resetgame()
{
	board = shuffled.slice();
	moves=0;
	display();
}

function display()
{
	var tmp;
	for (var i=0; i < board.length; i++)
	{
		tmp = "#b"+i;
		$(tmp).attr("src",board[i]);
		tmp = "#k"+i;
		$(tmp).attr("src",key[i]);
	}
	$("#moves").html(moves);
}

function clicked(spot)
{
	if(click <0 || click >8)
	{
		click = spot;
		return;
	}
	if(click == spot)
	{
		click = -1;
		return;
	}
	moves++;
	var tmp = board[click];
	for (var i=click; i < spot; i++)
	{
		board[i] = board[i+1];
	}
	for (var i=click; i > spot; i--)
	{
		board[i] = board[i-1];
	}
	board[spot] = tmp;
	click = -1;
	display();
	for(var i=0; i < 9; i++)
	{
		if(board[i] != key[i])
		{
			return;
		}
	}
	alert("Yay! You're a moron!");
	gamestarted = false;
	moves=0;
}

function instructions()
{
	alert("How to play:\n\nTry to order the blocks like the smaller image by clicking a block to select it, then clicking the block in the spot you want to place your first block. The game is tricky because the blocks \"shift\" to fill in, so you have to think about where they will move. Try to get it in the least number of moves. Play the same level again by clicking the reset button.");
}
