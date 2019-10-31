'use strict';

//EXERCICE 3

var beginning;
var accurateGames = 0;
var player;
var playerOne = 'X';
var playerTwo = 'O';
var choosePlayer = 0;
var playerOneScore = 0;
var playerTwoScore = 0;

//set all winning combinaisons
var toWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

//select all cells of our board
var elTd = document.querySelectorAll('td');

function gridBoard () {
    var elBody = document.querySelector('body');
    elBody.setAttribute(
        'style',
        'margin: 0 auto'
    );
    var elH1 = document.createElement('h1');
    elH1.innerHTML = 'TIC TAC TOE';
    elBody.appendChild(elH1);
    var elTable = document.createElement('table');
    elTable.setAttribute(
        'style',
        'width:230px;height:70px;border:1px solid #ff452f'
    );
    
    var count = 0;

    for (var tr = 0; tr <= 2; tr++) {
        var elTr = document.createElement('tr');

        for(var td = 0; td <= 2; td++){
            var elTd = document.createElement('td');

            //setattribute
            elTd.setAttribute('id', count);
            elTd.setAttribute(
                'style',
                'width:230px;height:70px;border:1px solid #ff452f'
            );

            elTr.appendChild(elTd);
            count++;
        }
        elTable.appendChild(elTr);
    }
    elBody.appendChild(elTable);

    var elDiv = document.createElement('div');

    //score
    var gamesScore = document.createElement('h3');
    gamesScore.setAttribute('id', 'gamesH3');
    gamesScore.innerHTML = 'Number of accurates games : ' + accurateGames;
    elDiv.appendChild(gamesScore);

    var pl1Score = document.createElement('h3');
    pl1Score.setAttribute('id', 'pl1H3');
    pl1Score.innerHTML = 'Player X score : '+playerOneScore;
    elDiv.appendChild(pl1Score);

    var pl2Score = document.createElement('h3');
    pl2Score.setAttribute('id', 'pl2H3');
    pl2Score.innerHTML = 'Player O score : '+playerTwoScore;
    elDiv.appendChild(pl2H3);

    elBody.appendChild(elDiv);
}

//initialize the game
function start() {

    //set each actual td in array 
    beginning = Array.from(Array(9).keys());

    //empty all the tds
    for (var i = 0; i < 9; i++) {
        //select all tds
        var allTd = document.querySelectorAll('td');
        allTd[i].innerText = '';
        
        //set function on click
        allTd[i].addEventListener('click', play, false)
    }
}

function play(cell) {

    //protect from re-writting
    if (cell.target.innerText != ''){
        return;
    } else {

        //switch player with a count
        var remain = choosePlayer % 2;
        //if the count is a multiple of 2 so remain == 0 
        if (remain == 0) {
            //select playerOne
            player = playerOne;
        } else {
            //else select playerTwo
            player = playerTwo;
        }
        //increment the count
        choosePlayer++
        var cellId = cell.target.id;

        //put value in the td
        document.getElementById(cellId).innerText = player;
        document.getElementById(cellId).style.textAlign = 'center';

        //check if the game is won
        check(beginning, player);

    }
}


function check(display, player) {

    //set iswin to null
    var isWin = null;
    
    //pick the updated allTd
    var allTd = document.querySelectorAll('td');
    
    //convert it to array
    var tdArray = Array.from(allTd);

    //check if someone win the game
    toWin.forEach(function(pattern) {
        var combinaison = '';
        pattern.forEach(function(td) {
            combinaison = combinaison+tdArray[td].innerText;

            if (combinaison.length == 3) {
                //check for combinaisons
                if (combinaison == 'OOO') {
                    isWin = playerTwo;
                    endPart(isWin);
                    
                } else if (combinaison == 'XXX') {
                    isWin = playerOne;
                    endPart(isWin);
                    
                } else {
                    isWin = null;
                    endPart(isWin);
                }  
            } 
        });
    });
    //create empt var
    var empt = 0;

    //check if all tds are full 
    tdArray.forEach(function(element) {
        if (element.innerText == '') {
            empt++
        }
    });
        
    //if less than one empty square
    if (empt == 0) {
        var iswin = 'nobody';
        endPart(iswin)
    }
}

function endPart(won) {
    //match nul
    if (won == 'nobody') {
        if(!alert('Nobody won')){start();}
    //player1 won
    } else if (won == 'X') {
        playerOneScore++;
        accurateGames++;
        if(!alert('Player X won')){start();}
    //player2 won
    }else if (won == 'O'){
        playerTwoScore++;
        accurateGames++;
        if(!alert('Player O won')){start();}

    //won is null
    }else{
        return;
    }
    //show scores
    show(accurateGames, playerOneScore, playerTwoScore);

    //Stop Game
    if (accurateGames == 3) {
        if (playerOneScore < playerTwoScore) {
            var winner = playerTwo;
        } else {
            var winner = playerOne;
        }
        //reload at the gameover
        if(!alert('Player '+winner+' won the game.')){window.location.reload();}

    } 
}

function show(accurateGames, playerOneScore, playerTwoScore) {
    document.getElementById('gamesScore').innerText = 'Number of accurates games : '+accurateGames;
    document.getElementById('pl1Score').innerText = 'Player X score : '+ playerOneScore;
    document.getElementById('pl2Score').innerText = 'Player O score : '+ playerTwoScore;



}
//PROGRAM
writeHtml();
start();

