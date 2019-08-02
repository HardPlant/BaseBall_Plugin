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
    
    $.choosePlayerNumber = function(player_num) {
        if (typeof(player_num) !== "string") {
            console.error("");
            return;
        }

        player_num = player_num.split("");
        this._playerNumber = player_num;
    };
    $.chooseEnemyNumber = function(enemy_num) {

        if (typeof(enemy_num) !== "string") {
            console.error("");
            return;
        }

        enemy_num = enemy_num.split("");
        this._enemyNumber = enemy_num;
    };
    $.selectFirstTurnPlayer = function() {

    };
    $.progressTurn = function() {
        // 
        var estimatedArray = [];
        var targetArray = $._playerNumber;
        var strike = 0;
        var ball = 0;
        for (var i = 0; i < targetArray; i++) {
            if (_isStrike(estimatedArray, i, targetArray)) {
                strike++;
            }
            if (_isBall(estimatedArray, i, targetArray)) {
                ball++;
            }
        };
        console.log("스트라이크: " + strike + "볼: " + ball);
        
        if ($.isGameEnded(strike)) {
            endGame();
        } else {
            progressTurn();
        }
    };
    $.isGameEnded = function() {

    };
    $.endGame = function() {

    };
    function _isStrike(src, idx, dest) {
        if (src[idx] === dest[idx]) {
            return true;
        }
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
