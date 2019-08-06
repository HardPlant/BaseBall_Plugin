
var HP_BaseBall_Plugin = Object.create(null);

(function ($, game) {

    if (typeof (game) === "undefined") {
        console.error("Error loading baseballgame");
    }

    $.run = function () {
        var isRunGame = promptRunGame();

        if (isRunGame) {
            $.init();
        }
    };
    $.init = function () {
        game.reset();
        game.choosePlayerNumber(promptPlayerNumber());
        game.chooseEnemyNumber(promptEnemyNumber());
    };
    $.guess = function () {
        if (game._isPlayerTurn) {

        } else {
            var candidate = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
            var guess = [];
            for (var i = 0; i < 3; i++) {
                var target = Math.floor(Math.random() * candidate.length);
                
                guess.push(candidate[target]);
                candidate = candidate.filter(item => item != candidate[target]);
            }
        }
    };
    $.showResult = function () {

    };

    function promptRunGame() {

    }
})(HP_BaseBall_Plugin, HP_Baseball_Game);