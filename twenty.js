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
    return dealer
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
    return player
}

// askName()
dealer()
player()