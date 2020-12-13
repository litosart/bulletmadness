class PlayerData {

  /*
  PlayerData contains all the necesary information to define a Player Ship
  */

  constructor() {
    //Set Default Values
    this.spriteName = "ship_player_1";
    this.idleAnimName = "ship_player_1_idle";
    this.movementSpeed = 10;
    this.lives = 3;
    this.weaponID = 0;
    this.bulletData = beamDataContainer.list[0];
  }

}
