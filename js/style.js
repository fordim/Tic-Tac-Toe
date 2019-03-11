

var gameTable = ['X', null,'X','X','O','X','X',null,'X'];

var draw = function(state){
    var gameBlocks = document.getElementsByClassName('gameBlock');

    for ( var i = 0; i < gameBlocks.length; i++){
        gameBlocks[i].innerText = state[i];
    }
};


var onPageLoaded = function(){

    var myElement = document.getElementById('myspan');
    myElement.innerText = 'newText';


    var gameBlocks = document.getElementById('gameBlocks');
    gameBlocks.onclick = function (e) {
        var index = Array.from(e.target.parentElement.children).indexOf(e.target);
        gameTable[index] = '?';
        draw(gameTable);
    };

    draw(gameTable);
};

document.addEventListener('DOMContentLoaded', onPageLoaded);
