

var gameTable = ['X', null,'X','X','O','X','X',null,'X'];

var draw = function(state){
    //to do (Завернуть в цикл)

    document.getElementsByClassName('gameBlockLetter')[0].innerText = state[0];
    document.getElementsByClassName('gameBlockLetter')[1].innerText = state[1];
    document.getElementsByClassName('gameBlockLetter')[2].innerText = state[2];
    document.getElementsByClassName('gameBlockLetter')[3].innerText = state[3];
    document.getElementsByClassName('gameBlockLetter')[4].innerText = state[4];
    document.getElementsByClassName('gameBlockLetter')[5].innerText = state[5];
    document.getElementsByClassName('gameBlockLetter')[6].innerText = state[6];
    document.getElementsByClassName('gameBlockLetter')[7].innerText = state[7];
    document.getElementsByClassName('gameBlockLetter')[8].innerText = state[8];
    for ( var i = 0; i < gameTable.length; i++){
        
    }
};


var onPageLoaded = function(){

    var myElement = document.getElementById('myspan');
    myElement.innerText = 'newText';

//    updateCards();

    document.getElementById('gameBlocks').onclick = function(e){
        console.log(this);
        //Поменять gameTable в соответствии куда я попал (понять что за ID от 0 до 9) и туда вставить значение (X O)

        draw(gameTable);
    };

    draw(gameTable);

};


/*
var updateCards = function (){
    var elements = document.querySelectorAll('.gameBlockLetter');

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.innerText = 'O';

    }
    console.log(element);
};
*/


document.addEventListener('DOMContentLoaded', onPageLoaded);


/*
var a = function(number1, number2){
    var summary = number1 * number2;
    return summary
};

a(2,3);


function a(number1){
    var currentSum = number1;

    function f(number2){
        currentSum *= number2;
        return f;
    }

    f.toString = function(){
        return currentSum;
    };

    return f;
}

a(2)(3);


function multi(a) {
  return function(b) {
  	return a * b;
  }
}
*/