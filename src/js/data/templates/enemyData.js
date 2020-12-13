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
    this.startingHealth = 10;
    this.points = 10;
    this.weaponID = 0;
    this.bulletData = beamDataContainer.list[1];
  }

}
