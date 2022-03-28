var ran = Math.floor(Math.random() * 10);
var draw = (ran + 1);
do{
    var win = 0
    var lose = 0
    var player = 0
    var computer = 0
    alert("hello");
    // alert("Welcome to Twenty-one!"); //
    // alert("We are going to see which one of us can get closer to 21 without going above the number!"); //
  do{
    alert("It's the dealer's turn right now")
    ran = Math.floor(Math.random() * 10);
    ran = ran + 1
    computer = ran + computer
    alert("The new number is " + ran +" and the new total is " + computer);
  } while (computer < 16)
  do{
    alert("It's the players turn right now")
    ran = Math.floor(Math.random() * 10);
    ran = ran + 1
    player = ran + player
    alert("The new number is " + ran + " and the new total is " + player);
    var check = prompt("Draw Again? Say yes or no");
    if (check == "yes"){
      alert("Proceeding");
    }else{
      alert("The current total is final");
      break;
    }
  } while (player <= 21)
  if (player > 21){
    alert("Oh no, the player has gone above 21, the player has lost!");
  } else if (computer > 21){
    alert("Oh no, the dealer has gone above 21, the dealer has lost!");
  } else {
    alert("Checking to see who is closer!");
  } 
  if ((player > computer) && (player <= 21)){
    alert("You Win");
    win = win + 1;
  } else {
    alert("Nice try");
    lose = lose + 1;
  } 
   var loop = prompt("Would you like to play again? Say yes or no");
}while(loop == "yes");
    if(loop == "no"){
        alert(`The final Score is, Dealer : ${lose} , Player : ${win}.`);
    }else {
        alert("Carry on");