class PowerUpDataContainer {

  list = [];

  constructor() {
    var data = new PowerUpData();
    this.name = "Small Speed PowerUp"
    data.spriteName = "powerup_movement_speed_1";
    data.behavior = new PowerUpMovementSpeed(250, 4000);
    this.list.push(data);

    var data = new PowerUpData();
    this.name = "Medium Speed PowerUp"
    data.spriteName = "powerup_movement_speed_2";
    data.behavior = new PowerUpMovementSpeed(450, 4000);
    this.list.push(data);

    var data = new PowerUpData();
    this.name = "Small Cadence PowerUp"
    data.spriteName = "powerup_shoot_speed_1";
    data.behavior = new PowerUpShootingSpeed(2.5, 4000);
    this.list.push(data);

    var data = new PowerUpData();
    this.name = "Medium Cadence PowerUp"
    data.spriteName = "powerup_shoot_speed_2";
    data.behavior = new PowerUpShootingSpeed(5, 4000);
    this.list.push(data);

    var data = new PowerUpData();
    this.name = "Shotgun PowerUp"
    data.spriteName = "powerup_weapon_shotgun_1";
    data.behavior = new PowerUpChangeWeapon(1, 8000);
    this.list.push(data);
  }
}
