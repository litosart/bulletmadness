class PlayerShipsData {

  /*
  PlayerShipsData contains all the Player Ships Information in the game
  */

  list = []

  constructor() {

    var data = new PlayerData();
    data.movementSpeed = 300;
    data.spriteName = "ship_player_1";
    data.idleAnimName = "ship_player_1_idle";
    data.lives = 4;
    this.list.push(data);

    data = new PlayerData();
    data.movementSpeed = 500;
    data.spriteName = "ship_player_2";
    data.idleAnimName = "ship_player_2_idle";
    data.lives = 3;
    this.list.push(data);

    data = new PlayerData();
    data.movementSpeed = 100;
    data.spriteName = "ship_enemy_small_1";
    data.idleAnimName = "ship_enemy_small_1_idle";
    data.lives = 2;
    this.list.push(data);

  }

}
