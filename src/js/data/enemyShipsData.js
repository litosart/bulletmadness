class EnemyShipsData {

  list = []

  constructor() {

    var data = new EnemyData();
    data.movementSpeed = 100;
    this.list.push(data);

    data = new EnemyData();
    data.movementSpeed = 200;
    this.list.push(data);

    data = new EnemyData();
    data.movementSpeed = 350;
    this.list.push(data);

  }
}
