var BLANK_GAME_TABLE = ['','','','','','','','',''];
var LOG_GAME_TABLE = [];
var HISTORY_OF_GAME = [];

var gameTable = BLANK_GAME_TABLE.slice(0);
var logBlock = LOG_GAME_TABLE.slice(0);
var stepHistory = HISTORY_OF_GAME.slice(0);
var actionPlayer = true;

//Рисование в блоках
var draw = function(state){
    var gameBlocks = document.getElementsByClassName('gameBlock');

    for ( var i = 0; i < gameBlocks.length; i++){
        gameBlocks[i].innerText = state[i];
    }
};

//Запись логов
var writeLog = function(){
    var logBlocks = document.getElementsByClassName('rightMain');
        logBlocks[0].innerHTML = logBlock.join('');
};

//Чистка логов
var clearLog = function(){
    var logBlocks = document.getElementsByClassName('rightMain');
    logBlock = LOG_GAME_TABLE.slice(0);
    logBlocks[0].innerHTML = logBlock;
};

//Чистка досок
var resetAndDrawBoard = function () {
    gameTable = BLANK_GAME_TABLE.slice(0);
    draw(gameTable);
    clearLog();
    stepHistory = [];
};

//Отменяем последний ход
stepBackAndDraw = function(){
    logBlock.pop();
    stepHistory.pop();

    if (logBlock.length === 0){
        clearLog();
    } else {
        writeLog();
    }

    if (stepHistory.length === 0){
        gameTable = BLANK_GAME_TABLE.slice(0);
    } else {
        gameTable = stepHistory[stepHistory.length - 1].slice(0);
    }

    draw(gameTable);

    actionPlayer = !actionPlayer;
};

//Определяем победу
var isPlayerWin = function (table, player){
    return ((table[0] === player && table[1] === player && table[2] === player) ||
        (table[3] === player && table[4] === player && table[5] === player) ||
        (table[6] === player && table[7] === player && table[8] === player) ||
        (table[0] === player && table[3] === player && table[6] === player) ||
        (table[1] === player && table[4] === player && table[7] === player) ||
        (table[2] === player && table[5] === player && table[8] === player) ||
        (table[0] === player && table[4] === player && table[8] === player) ||
        (table[2] === player && table[4] === player && table[6] === player))
};

//Определяем ничью
var isGameEnded = function (){
    return gameTable.every(function(element){
        return element !== '';
    })
};

//Определяем название игрока
var nameOfPlayer = function (){return actionPlayer ? 'X' : 'O'};

var modalBoxEvent = function (textEvent){
    document.getElementById('modalBox').style.visibility = 'visible';
    document.getElementById('leftBlock').classList.add("banBlocks");
    document.getElementById('rightBlock').classList.add("banBlocks");
    document.getElementById('mainPage').classList.add("banBody");
    var modalEvent = document.getElementsByClassName('modalBody');
    modalEvent[0].innerText = textEvent;
};

var onPageLoaded = function(){
    var gameBlocks = document.getElementById('gameBlocks');
    gameBlocks.onclick = function (e) {
        var index = Array.from(e.target.parentElement.children).indexOf(e.target);

        if (gameTable[index] !== ''){
            return alert('Поле уже занято!');
        }

        gameTable[index] = nameOfPlayer();
        logBlock.push('<p>Походил игрок игравщий за: ' + nameOfPlayer() + '. В ячейку массива №' + index + '</p>');
        stepHistory.push(gameTable.slice(0));

        draw(gameTable);
        writeLog();

        if(isPlayerWin(gameTable, nameOfPlayer())){
            return modalBoxEvent('Победил игрок игравший за: ' + nameOfPlayer() + '. Хотите начать новую игру?');
        }

        if (isGameEnded()){
            modalBoxEvent('Ничья, все поля заполнены. Можете начать <<Новую игру>>');
        }

        actionPlayer = !actionPlayer;
    };

    document.getElementsByClassName('resetGame')[0].onclick = function(event){
        event.preventDefault();
        resetAndDrawBoard();
    };

    document.getElementsByClassName('stepBack')[0].onclick = function(event){
        event.preventDefault();
        stepBackAndDraw();
    };

    document.getElementById('modalResetGame').onclick = function(event){
        event.preventDefault();
        resetAndDrawBoard();
        document.getElementById('modalBox').style.visibility = 'hidden';
        document.getElementById('leftBlock').classList.remove("banBlocks");
        document.getElementById('rightBlock').classList.remove("banBlocks");
        document.getElementById('mainPage').classList.remove("banBody");
    };

};

document.addEventListener('DOMContentLoaded', onPageLoaded);

