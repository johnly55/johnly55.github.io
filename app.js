var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.getElementById("result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function clickedOn(int){
	var playerChoice = int;
	
	var computerChoice = Math.floor(Math.random() * 3);
	
	calculateWinner(playerChoice, computerChoice);
}

function calculateWinner(playerPick, computerPick){
	var winningPick;
	var tie = false;
	var win = false;
	
	if(playerPick == computerPick){
		winningPick = playerPick;
		tie = true
	}
	
	else if(playerPick == 0){
		if(computerPick == 1){
			winningPick = computerPick;
		}else if(computerPick == 2){
			winningPick = playerPick;
			win = true;
		}
	}
	
	else if(playerPick == 1){
		if(computerPick == 0){
			winningPick = playerPick;
			win = true;
		}else if(computerPick == 2){
			winningPick = computerPick;
		}
	}
	
	else if(playerPick == 2){
		if(computerPick == 1){
			winningPick = playerPick;
			win = true;
		}else if(computerPick == 3){
			winningPick = computerPick;
		}
	}
	
	function scoreToText(int){
		if(int == 0)
			return "Rock";
		else if(int == 1)
			return "Paper";
		else
			return "Scissors";
	}
	
	if(tie){
		result_div.textContent = ("Tie! " + scoreToText(winningPick) + "s!");
	}else if(win){
		userScore_span.textContent = ++userScore;
		result_div.textContent = ("Win! " + scoreToText(winningPick) + " Beats " + scoreToText(winningPick-1) + "!");
	}else if(!win){
		computerScore_span.textContent = ++computerScore;
		result_div.textContent = ("Lose! " + scoreToText(winningPick) + " Beats " + scoreToText(winningPick-1) + "!");
	}
	
}

rock_div.addEventListener('click', function(){
	clickedOn(0);//Rock
})

paper_div.addEventListener('click', function(){
	clickedOn(1);//Paper
})

scissors_div.addEventListener('click', function(){
	clickedOn(2);//Scissors
})