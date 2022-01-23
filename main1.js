player1name = localStorage.getItem("Name1");
player2name = localStorage.getItem("Name2");

document.getElementById("label1").innerHTML = player1name + ":";
document.getElementById("label2").innerHTML = player2name + ":";

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question = "<h4>Q: " + number1 + " X " + number2 + "</h4>";
    answer = "<br> Answer: <input id = 'input3'>";
    button = "<br> <br><button onclick = 'check()' class = 'btn btn-success'>Check</button>";
    document.getElementById("divcake").innerHTML = question + answer + button;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

questionTurn = "player1";
answerTurn = "player2";

function check(){
get_answer = document.getElementById("input3").value;

if(get_answer == actual_answer)	
	{
		if(answerTurn == "player1")
		{
			score1 = score1 +1;
		    document.getElementById("score1").innerHTML = score2;
		}
		else 
		{
			score2 = score2 +1;
		    document.getElementById("score2").innerHTML = score2;
		}
	}
}


score1 = 0;
score2 = 0;