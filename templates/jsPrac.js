function getWinner(){
	var win = Math.floor(Math.random()*3)+1;
	return win;
}

function getSelection(){
	var sel = prompt("Pick door 1, 2, or 3.");
	return sel;
}
function elimDoor(win, sel){
	if((win == 1 || sel == 1) && (win == 2 || sel == 2)){
		alert("door 3 is gone");
	}
	else if((win == 1 || sel == 1) && (win == 3 || sel == 3)){
		alert("door 2 is gone");
	}
	else if((win == 3 || sel == 3) && (win == 2 || sel == 2)){
		alert("door 1 is gone");
	}
	else{
		if(win == 1){
			alert("door 3 is gone");
		}
		else if(win == 2){
			alert("door 1 is gone");
		}
		else{
			alert("door 2 is gone");
		
		}
	}
}

function endGame(win){
	var sel = prompt("You may now switch doors if you wish. Enter the door number you choose.");
	if(sel == win){
		alert("YOU WIN");
	}
	else{
		alert("U LOSE");
	}
}

function playGame(){
	var win = getWinner();
	var sel = getSelection();
	elimDoor(win, sel);
	endGame(win);
}