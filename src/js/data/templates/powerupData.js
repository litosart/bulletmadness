class PowerUpData {

  /*
  TBW
  */

  constructor() {
    //Set Default Values
    this.name = "Generic PowerUp"
    this.spriteName = "powerup_movement_speed_1";
    this.behavior = new PowerUpMovementSpeed(250,1500);
    //this.idleAnimName = "ship_player_1_idle";
  }

}
