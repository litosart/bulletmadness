class EnemyManager {

  enemyArray = [];
  enemyShipsData;

  constructor(scene, enemyShipsData) {

    this.scene = scene
    this.enemyShipsData = enemyShipsData;

    //Setup Enemy Spawners
    this.BasicSpawner = new EnemySpawner(scene,this.enemyArray);
  }

  update() {

    //Updates all the enemies in the list and removes deleted enemies
    var i = 0;
    for (var i = 0; i < this.enemyArray.length; i++) {
      if (this.enemyArray[i] == undefined) {
        this.enemyArray.splice(i, 1);
      } else {
        this.enemyArray[i].update();
      }
    }

  }
}
