class EnemyShipsData {


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
    this.list.push(data);

    data = new EnemyData();
    data.movementSpeed = 200;
    this.list.push(data);

    data = new EnemyData();
    data.movementSpeed = 700;
    this.list.push(data);

    data = new EnemyData();
    data.movementSpeed = 200;
    data.spriteName = "ship_enemy_tiny_1";
    data.idleAnimName = "ship_enemy_tiny_1_idle";
    this.list.push(data);

  }
}
