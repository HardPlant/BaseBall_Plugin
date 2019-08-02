const fs = require("fs");
eval(fs.readFileSync("baseball/baseball.js") + "");

// 자신/상대 수 = 결정
it("chooses player's number", function() {
    var player_num = "123";
    HP_Baseball_Game.choosePlayerNumber(player_num);
    expect(HP_Baseball_Game._playerNumber).toStrictEqual(["1","2","3"]);
});
it("chooses enemys's number", function() {
    var enemy_number = "123";
    HP_Baseball_Game.chooseEnemyNumber(enemy_number);
    expect(HP_Baseball_Game._enemyNumber).toStrictEqual(["1","2","3"]);
});
//턴 지정
it("chooses turn", function() {

});
//선턴 추리
it("progress first turn", function() {

});
//후턴 추리
it("progress late turn", function() {

});
//게임 종료
it("ends game", function() {

});
