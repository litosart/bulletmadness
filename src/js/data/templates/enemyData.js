class EnemyData {

  /*
  EnemyData contains all the necesary information to define an Enemy Ship
  */

  constructor() {
    //Set Default Values
    this.spriteName = "ship_enemy_small_1";
    this.idleAnimName = "ship_enemy_small_1_idle";
    this.movementSpeed = 10;
    this.canShoot = true;
    this.health = 100;
    this.points = 10;
    this.weapon = new BasicWeapon(beamDataContainer.list[1]);
  }

}
