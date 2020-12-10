class EnemyManager {

  spawnerArray = [];
  enemyArray = [];

  constructor(scene) {
    this.scene = scene
  }

  setupSpawner(enemyData,spawnerData){
    var spawner = new EnemySpawner(this.scene,enemyData,this.enemyArray);
    spawner.setupSpawner(spawnerData);
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
