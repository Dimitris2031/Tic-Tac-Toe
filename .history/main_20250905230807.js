
const Gameboard = (() => {
    const GameboardArray = new Array(9).fill(null);
    return {
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
    }
    return {checkPlayerTurn};
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
            GameReferee.checkPlayerTurn(div.id);
        }
    });
});

