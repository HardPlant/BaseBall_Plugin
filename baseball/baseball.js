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
    function _isStrike(src, idx, dest) {
        if (src[idx] === dest[idx]) {
            return true;
        return false;
    };
    function _isBall(src, idx, dest) {
        for (var i = 0; i < dest.length; i++) {
            if (i === idx) continue;
            if (dest[i] === src[idx]) {
                return true;
            }
        }
        return false;
    };
})(HP_Baseball_Game);
