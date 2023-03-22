let boxes = document.querySelectorAll(".boxes")
let topR = document.querySelectorAll(".topR")
let midR = document.querySelectorAll(".midR")
let botR = document.querySelectorAll(".botR")
let gameBoard = [topR, midR, botR]
let currentPlayer
switchPlayer()



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        box.classList.add(currentPlayer)
        switchPlayer()
        checkForWinner()
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
    let player1Count = 0
    let player2Count = 0
    if("player1" === [[0],[0],[0]]){
        console.log ("player 1 wins!")
    } else if ("player1" === [[1],[1],[1]]) {
        console.log ("player 1 wins!")
    } else {
        console.log("help")
    }
}

