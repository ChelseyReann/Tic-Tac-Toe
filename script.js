let boxes = document.querySelectorAll(".boxes")

let currentPlayer
switchPlayer()

let gameB = [[0,1,2], [0,1,2], [0,1,2]]


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
    if("player1" === [[0],[0],[0]]){
        console.log ("player 1 wins!")
    } else if ("player1" === [[1],[1],[1]]) {
        console.log ("player 1 wins!")
    } else {
        console.log("help")
    }
}

