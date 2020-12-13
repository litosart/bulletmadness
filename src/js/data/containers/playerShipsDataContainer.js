class PlayerShipsDataContainer {

  /*
  PlayerShipsData contains all the Player Ships Information in the game
  */

  list = []

  constructor() {

    var data = new PlayerData();
    data.spriteName = "ship_player_1";
    data.idleAnimName = "ship_player_1_idle";
    data.movementSpeed = 250;
    data.lives = 3;
    data.weaponID = 0;
    this.list.push(data);

    data = new PlayerData();
    data.spriteName = "ship_player_2";
    data.idleAnimName = "ship_player_2_idle";
    data.movementSpeed = 325;
    data.lives = 1;
    data.weaponID = 0;
    this.list.push(data);

    data = new PlayerData();
    data.spriteName = "ship_enemy_small_1";
    data.idleAnimName = "ship_enemy_small_1_idle";
    data.movementSpeed = 180;
    data.lives = 4;
    data.weaponID = 1;
    this.list.push(data);

  }

}
