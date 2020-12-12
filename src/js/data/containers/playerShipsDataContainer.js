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
    data.shootingSpeed = 6;
    data.lives = 3;
    data.weapon = new BasicWeapon(beamDataContainer.list[0]);
    this.list.push(data);

    data = new PlayerData();
    data.spriteName = "ship_player_2";
    data.idleAnimName = "ship_player_2_idle";
    data.movementSpeed = 325;
    data.shootingSpeed = 8;
    data.lives = 1;
    data.weapon = new BasicWeapon(beamDataContainer.list[0]);
    this.list.push(data);

    data = new PlayerData();
    data.spriteName = "ship_enemy_small_1";
    data.idleAnimName = "ship_enemy_small_1_idle";
    data.movementSpeed = 180;
    data.shootingSpeed = 4;
    data.lives = 4;
    data.weapon = new ShotgunWeapon(beamDataContainer.list[0]);
    this.list.push(data);

  }

}
