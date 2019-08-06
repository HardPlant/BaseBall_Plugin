const fs = require("fs");
eval(fs.readFileSync("baseball/baseball.js") + "");

// 자신/상대 수 = 결정
it("chooses player's number", function() {
    var player_num = "123";
    HP_Baseball_Game.choosePlayerNumber(player_num);
    expect(HP_Baseball_Game._playerNumber).toStrictEqual(["1","2","3"]);
});
it("chooses enemys's number", function() {
    var enemy_number = "456";
    HP_Baseball_Game.chooseEnemyNumber(enemy_number);
    expect(HP_Baseball_Game._enemyNumber).toStrictEqual(["4","5","6"]);
});
//턴 지정
it("chooses turn", function() {
    HP_Baseball_Game.selectFirstTurnPlayer();
    expect(HP_Baseball_Game._isPlayerTurn).not.toBe(undefined);

    HP_Baseball_Game.selectFirstTurnPlayer(0.4);
    expect(HP_Baseball_Game._isPlayerTurn).toBe(true);

    HP_Baseball_Game.selectFirstTurnPlayer(0.6);
    expect(HP_Baseball_Game._isPlayerTurn).toBe(false);
});
//선턴 추리
it("progress first turn", function() {
    //Enemy Turn, 456 => 1ball
    var result = HP_Baseball_Game.progressTurn(["1","2","4"]);
    expect(HP_Baseball_Game._strike).toBe(0);
    expect(HP_Baseball_Game._ball).toBe(1);
    expect(result.strike).toBe(0);
    expect(result.ball).toBe(1);
});
//후턴 추리
it("progress late turn", function() {
    //Player Turn, 123 => 1strike 2ball
    HP_Baseball_Game.progressTurn(["2","1","3"]);
    expect(HP_Baseball_Game._strike).toBe(1);
    expect(HP_Baseball_Game._ball).toBe(2);
});
//게임 종료
it("ends game", function() {
    //Enemy Turn, 456 => 1strike 2ball
    HP_Baseball_Game.progressTurn(["4","5","6"]);
    expect(HP_Baseball_Game._strike).toBe(3);
    expect(HP_Baseball_Game._gameEnded).toBe(true);
});
