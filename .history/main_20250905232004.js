
const Gameboard = (() => {
    const GameboardArray = new Array(9).fill(null);
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    function updateBoard(index, marker){
        GameboardArray[index] = marker;
        document.getElementById(index).textContent = marker;
    }
    return {
        updateBoard,
        winningConditions,
        GameboardArray};
    })();


const GameReferee = (() => {
    let currIndex = 1;
    let player1 = playerFactory('player1','X',0);
    let player2 = playerFactory('player2','O',0);
    const players = [player1,player2];
    function checkPlayerTurn(){
        currIndex = 1 - currIndex;
        players[currIndex];
        return players[currIndex];
    }

    function checkWin(){
        for (let condition of Gameboard.winningConditions){
            const [a,b,c] = condition;
            if (Gameboard.GameboardArray[a] && Gameboard.GameboardArray[a] === Gameboard.GameboardArray[b] && Gameboard.GameboardArray[a] === Gameboard.GameboardArray[c]){
                console.log(Gameboard.GameboardArray[a]);
                console.log(`${Gameboard.GameboardArray[a]} wins!`);
            }
        }
    }
    return {
        checkWin,
        checkPlayerTurn
    };
})();

function playerFactory(name,marker,score){
    return{
        name: name,
        marker: marker,
        score: score

    }
}


document.querySelectorAll('div').forEach((div,i) => {
    div.id = i;
    div.addEventListener('click', async () => {
        if (Gameboard.GameboardArray[div.id] == null){
            Gameboard.updateBoard(div.id, GameReferee.checkPlayerTurn().marker);
            GameReferee.checkWin();
        }
    });
});

