function askName() {
    var name = prompt("What is your Name?");
    return name 
}

function dealer() {
    var computer = 0;
    do {
        alert("It's the dealer's turn")  
        var ran = Math.floor(Math.random() * 10) + 1;
        computer = computer + ran 
        alert(`The number is ${ran} and the current total is ${computer}`);
    } while(computer < 16);
    return computer
}

function player() {
    var user = 0;
    do {
        alert("Your turn")
        var ran = Math.floor(Math.random() * 10) + 1;
        user = user + ran
        alert(`The number is ${ran} and the current total is ${user}`);
        var choice = prompt("Draw again? Answer yes or no")
    } while(choice == "yes")
    return user
}

function compare() {
    var p = player()
    var d = dealer()
    if (p <= 21) {
        alert("Nice Draw");
    } else if (p > 21){
        alert("Yikes, you drew higher than a 21, you lose.");
    } else if (d <= 21) {
        alert("This is going to be close");
    } else if (d > 21){
        alert("Ooh, the dealer drew higher than 21, you win!");
    } 
    
    return compare
}

function wCheck() {
    var win = 0;
    var lose = 0;
    var p = player()
    var d = dealer()
    if (p > d) {
        alert("You win");
        win = win + 1;
    } else {
        alert("You lose")
        lose = lose + 1;
    }
    alert(`Current wins: Player: ${win} , Dealer: ${lose}`)

}





// askName()
compare()


