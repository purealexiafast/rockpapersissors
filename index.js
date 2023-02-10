function game() {

    const selection = prompt("Rock, Paper or Sissors?");


    if (selection === "Rock" || "Paper" || "Sissors") {
        confirm(`You have chosen ${selection}.`)
    }

    let select;
    const computerSelect = Math.random();
    if (computerSelect <= 0.30) {
        select = "Rock"
    } else if (computerSelect <= 0.60) {
        select = "Paper"
    } else {
        select = "Sissors"
    }

    var wins = 0;
    var losses = 0;
    var ties = 0;

    if (selection === select) {
        alert("It's a tie.")
        ties ++
    } else if (selection === "Rock" && select === "Paper") {
        alert("You lost.")
        losses ++
    } else if (selection === "Paper" && select === "Rock") {
        alert("You won")
        wins ++
    } else if (selection === "Paper" && select === "Sissors") {
        alert("You lost.")
        losses ++
    } else if (selection === "Sissors" && select === "Paper") {
        alert("You won.")
        wins ++
    } else if (selection === "Sissors" && select === "Rock") {
        alert("You lost.")
        losses ++
    } else {
        alert("You won.")
        wins ++
    }

   const results = confirm("Do you want to see your results?")
   if (results === true){
    alert(`You have won ${wins} times. You have lost ${losses} times. You have tied ${ties} times.`)
   } else {

   }

    const playAgain = confirm("Do you want to play again?")
    if (playAgain === true) {
        game()
    } else {
        alert("See you later!")
    }
}
game()



//your total wins = , total losses = and total ties =

//var wins = document.getElementById("wins");
//wins.innerHTML = parseInt(wins.innerHTML) + 1;



