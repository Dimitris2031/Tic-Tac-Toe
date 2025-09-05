function playerFactory(name,marker,score){
    return{
        name: name,
        marker: marker,
        score: score

    }
}


const GameboardModule = (() =>{
    const playerBoard = Array(9).fill(null);
    let winninngConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    return{
        playerBoard,
        winninngConditions
    }
    
})();

const GameController = (() => {
    let currIndex = 1;  
    const player1 = playerFactory("player1","X",0);
    const player2 = playerFactory("player2","0",0);
    const players = [player1,player2];

    function checkPlayerTurn() {
    currIndex = 1 - currIndex;
    console.log(players[currIndex]);
    return players[currIndex];
    }
    function updateBoard(cellPosition){
        let whichPLayer = players[currIndex];
        if (whichPLayer.marker !=GameboardModule.playerBoard[cellPosition]){
            document.getElementById(cellPosition).textContent = whichPLayer.marker;
        }
    }
    return {
    checkPlayerTurn,
    updateBoard
    };
})();

const divs = document.querySelectorAll("div");

divs.forEach((div,index) => {   
    div.id = `cell${index}`;
  div.addEventListener("click", () => {
    console.log(GameboardModule.playerBoard);
    GameController.checkPlayerTurn();
    GameController.updateBoard(div.id);
  });
});