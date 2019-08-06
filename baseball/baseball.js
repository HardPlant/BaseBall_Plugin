var HP_Baseball_Game = Object.create(null);

(function ($) {
    // $.consoleRun = function() {
    //     $.choosePlayerNumber(player_num);
    //     $.chooseEnemyNumber(enemy_num);
    //     $.selectFirstTurnPlayer();

    //     while($._gameEnded) {
    //         $.progressTurn();
    //     }
    //      $.displayResult();
    // };
    $.reset = function () {
        this._playerNumber = undefined;
        this._enemyNumber = undefined;
        this._turn = undefined;
        this._gameEnded = undefined;
        this._strike = undefined;
        this._ball = undefined;
    };
    $.choosePlayerNumber = function (player_num) {
        if (typeof (player_num) !== "string") {
            console.error("");
            return;
        }

        player_num = player_num.split("");
        this._playerNumber = player_num;
    };
    $.chooseEnemyNumber = function (enemy_num) {

        if (typeof (enemy_num) !== "string") {
            console.error("");
            return;
        }

        enemy_num = enemy_num.split("");
        this._enemyNumber = enemy_num;
    };
    $.selectFirstTurnPlayer = function (rand) {
        var random = rand || Math.random();
        if (random < 0.5) {
            this._isPlayerTurn = true;
        } else {
            this._isPlayerTurn = false;
        }
        this._turn = 1;
    };
    $.progressTurn = function (estimatedArray) {
        if (this._isPlayerTurn) {
            var targetArray = this._playerNumber;
        } else {
            var targetArray = this._enemyNumber;
        }
        this._strike = 0;
        this._ball = 0;
        for (var i = 0; i < targetArray.length; i++) {
            if (_isStrike(estimatedArray, i, targetArray)) {
                this._strike++;
            }
            if (_isBall(estimatedArray, i, targetArray)) {
                this._ball++;
            }
        };
        if ($.isGameEndCondition(this._strike)) {
            $.endGame();
        } else {
            this._turn++;
            this._isPlayerTurn = !this._isPlayerTurn;
        }
        return {
            strike: this._strike,
            ball: this._ball
        }
    };
    $.isGameEndCondition = function (strike) {
        if (strike === 3) return true;
        return false;
    };
    $.endGame = function () {
        $._gameEnded = true;
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
