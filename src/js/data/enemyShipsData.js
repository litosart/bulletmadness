class EnemyShipsData {

  list = []

  constructor() {

    var data = new EnemyData();
    data.movementSpeed = 100;
    data.spriteName = "ship_enemy_big_1";
    data.idleAnimName = "ship_enemy_big_1_idle";
    this.list.push(data);

    data = new EnemyData();
    data.movementSpeed = 200;
    this.list.push(data);

    data = new EnemyData();
    data.movementSpeed = 350;
    this.list.push(data);

    data = new EnemyData();
    data.movementSpeed = 450;
    this.list.push(data);

    data = new EnemyData();
    data.movementSpeed = 600;
    this.list.push(data);

  }
}
