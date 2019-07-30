var HP_Baseball_Game = Object.create(null);

(function($) {
    $.run = function() {
        $.choosePlayerNumber();
        $.chooseEnemyNumber();
        $.selectFirstTurnPlayer();
        
        while($.isGameEnded()) {
            $.progressFirstTurn();
            $.progressLateTurn();
        }
        $.endGame();
    };
    
    $.choosePlayerNumber = function() {

    };
    $.chooseEnemyNumber = function() {

    };
    $.selectFirstTurnPlayer = function() {

    };
    $.progressFirstTurn = function() {

    };
    $.progressLateTurn = function() {

    };
    $.isGameEnded = function() {

    };
    $.endGame = function() {

    };
})(HP_Baseball_Game);
