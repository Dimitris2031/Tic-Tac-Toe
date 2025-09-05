
const Gameboard = (() => {
    const GameboardArray = new Array(9).fill(null);
    return {
        GameboardArray};
    })();


const GameReferee = (() => {

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

