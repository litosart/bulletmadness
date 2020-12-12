class PowerUpBehaviorData{

  list = [];

  constructor(){

    var data = new PowerUpData();
    data.spriteName = "powerup_movement_speed_boost";
    this.behavior = new PowerUpMovementSpeed(10);
    this.list.push(data);
  }
}
