
const Gameboard = (() => {
    const GameboardArray = new Array(9).fill(null);
    return {
        GameboardArray};
    })();


const GameReferee = (() => {
    let player1 = playerFactory('player1','X',0);
    let player2 = playerFactory('player2','O',0);
    function checkPlayerTurn(){

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
        GameReferee.checkPlayerTurn(div.id);
    });
});

