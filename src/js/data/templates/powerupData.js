class PowerUpData {

  /*
  TBW
  */

  constructor() {
    //Set Default Values
    this.spriteName = "powerup_movement_speed_boost";
    //this.behavior = new PowerUpMovementSpeed(250,1500);
    this.behavior = new PowerUpShootingSpeed(10,2500);
    //this.idleAnimName = "ship_player_1_idle";
  }

}
