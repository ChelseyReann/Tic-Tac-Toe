let boxes = document.querySelectorAll(".boxes")
let topR = document.querySelectorAll(".topR")
let midR = document.querySelectorAll(".midR")
let botR = document.querySelectorAll(".botR")
let gameBoard = [topR, midR, botR]
let currentPlayer
let clickCount = 0
let winner = null

switchPlayer()



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (!box.classList.contains("player1") && !box.classList.contains("player2")) {
            box.classList.add(currentPlayer)
            switchPlayer()
            checkForWinner()
            clickCount++
        }
        if (clickCount === boxes.length && winner === null){
            alert("It's a draw! Game over!")
        }
    })
})

function switchPlayer (){
    if(currentPlayer === "player1"){
        currentPlayer = "player2"
    } else {
        currentPlayer = "player1"
    }
    playerClass.className = currentPlayer
}

function checkForWinner (){
    //vertical wins for player 1
    if(gameBoard[0][0].classList.contains("player1") && gameBoard[1][0].classList.contains("player1") && gameBoard[2][0].classList.contains("player1")){
        winner = "player 1"
        alert("player 1 wins!")
    } else if (gameBoard[0][1].classList.contains("player1") && gameBoard[1][1].classList.contains("player1") && gameBoard[2][1].classList.contains("player1")) {
        winner = "player 1"
        alert("player 1 wins!")
    } else if (gameBoard[0][2].classList.contains("player1") && gameBoard[1][2].classList.contains("player1") && gameBoard[2][2].classList.contains("player1")) {
        winner = "player 1"
        alert("player 1 wins!")
    //horizontal wins for player 1
    } else if (gameBoard[0][0].classList.contains("player1") && gameBoard[0][1].classList.contains("player1") && gameBoard[0][2].classList.contains("player1")){
        winner = "player 1"
        alert("player 1 wins!")
    } else if (gameBoard[0][0].classList.contains("player1") && gameBoard[1][0].classList.contains("player1") && gameBoard[2][0].classList.contains("player1")){
        winner = "player 1"
        alert("player 1 wins!")
    } else if (gameBoard[1][0].classList.contains("player1") && gameBoard[1][1].classList.contains("player1") && gameBoard[1][2].classList.contains("player1")){
        winner = "player 1"
        alert("player 1 wins!")
    } else if (gameBoard[2][0].classList.contains("player1") && gameBoard[2][1].classList.contains("player1") && gameBoard[2][2].classList.contains("player1")){
        winner = "player 1"
        alert("player 1 wins!")
    //diagonal wins for player 1
    } else if (gameBoard[0][0].classList.contains("player1") && gameBoard[1][1].classList.contains("player1") && gameBoard[2][2].classList.contains("player1")){
        winner = "player 1"
        alert("player 1 wins!")
    } else if (gameBoard[0][2].classList.contains("player1") && gameBoard[1][1].classList.contains("player1") && gameBoard[2][0].classList.contains("player1")){
        winner = "player 1"
        alert("player 1 wins!")
    //vertical wins for player 2
    } else if (gameBoard[0][0].classList.contains("player2") && gameBoard[1][0].classList.contains("player2") && gameBoard[2][0].classList.contains("player2")){
        winner = "player 2"
        alert("player 2 wins!")
    } else if (gameBoard[0][1].classList.contains("player2") && gameBoard[1][1].classList.contains("player2") && gameBoard[2][1].classList.contains("player2")){
        winner = "player 2"
        alert("player 2 wins!")
    } else if (gameBoard[0][2].classList.contains("player2") && gameBoard[1][2].classList.contains("player2") && gameBoard[2][2].classList.contains("player2")){
        winner = "player 2"
        alert("player 2 wins!")
    //horizontal wins for player 2
    } else if (gameBoard[0][0].classList.contains("player2") && gameBoard[0][1].classList.contains("player2") && gameBoard[0][2].classList.contains("player2")){
        winner = "player 2"
        alert("player 2 wins!")
    } else if (gameBoard[0][0].classList.contains("player2") && gameBoard[1][0].classList.contains("player2") && gameBoard[2][0].classList.contains("player2")){
        winner = "player 2"
        alert("player 2 wins!")
    } else if (gameBoard[2][0].classList.contains("player2") && gameBoard[2][1].classList.contains("player2") && gameBoard[2][2].classList.contains("player2")){
        winner = "player 2"
        alert("player 2 wins!")
    //diagonal wins for player 2
    } else if (gameBoard[0][0].classList.contains("player2") && gameBoard[1][1].classList.contains("player2") && gameBoard[2][2].classList.contains("player2")){
        winner = "player 2"
        alert("player 2 wins!")
    } else if (gameBoard[0][2].classList.contains("player1") && gameBoard[1][1].classList.contains("player1") && gameBoard[2][0].classList.contains("player1")){
        winner = "player 2"
        alert("player 2 wins!")
    }
}