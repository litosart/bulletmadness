class EnemyShipsDataContainer {


  /*
  EnemyShipsData contains all the Enemy Ships Information in the game
  */


  list = []

  constructor() {

    var data = new EnemyData();
    data.movementSpeed = 100;
    data.points = 100;
    data.spriteName = "ship_enemy_big_1";
    data.idleAnimName = "ship_enemy_big_1_idle";
    data.startingHealth = 25;
    this.list.push(data);

    data = new EnemyData();
    data.movementSpeed = 200;
    this.list.push(data);

    data = new EnemyData();
    data.movementSpeed = 600;
    this.list.push(data);

    data = new EnemyData();
    data.movementSpeed = 200;
    data.spriteName = "ship_enemy_tiny_1";
    data.idleAnimName = "ship_enemy_tiny_1_idle";
    this.list.push(data);

    data = new EnemyData();
    data.movementSpeed = 400;
    data.spriteName = "shipmodel2";
    data.idleAnimName = "shipmodel2_idle";
    data.points = 15;
    data.weaponID = 1;
    data.startingHealth = 15;
    this.list.push(data);

  }
}
