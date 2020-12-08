class EnemyManager {

  enemyArray = [];
  enemyShipsData;

  constructor(scene, enemyShipsData) {

    this.scene = scene
    this.enemyShipsData = enemyShipsData;

    this.BasicSpawner = new EnemySpawner(scene,this.enemyArray);

  }

  /*SpawnEnemy() {

    //Gets a random enemyData from the enemyDataContainer and spawns an enemy with given Data
    var enemyDataContainer = new EnemyShipsData();
    var enemyData = enemyDataContainer.list[Phaser.Math.Between(0, enemyDataContainer.list.length - 1)]

    //Adds enemy to enemyList
    this.enemyArray.push(new Enemy(this.scene, enemyData));

  }

  setupSpawnLoop() {

    var timerEventConfig = {
      delay: this.timeBetweenSpawns,
      loop: true,
      callback: this.spawnEnemy,
      callbackScope: this
    }
    this.scene.timer = this.scene.time.addEvent(timerEventConfig);

  }*/

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

class EnemySpawner {

  constructor(scene,enemyArray) {
    this.scene = scene;
    this.enemyList = enemyArray;
    this.setupSpawnLoop();

    this.enemyDataContainer = new EnemyShipsData();
  }

  spawnEnemy() {

    //Gets a random enemyData from the enemyDataContainer and spawns an enemy with given Data
    var enemyData = this.enemyDataContainer.list[Phaser.Math.Between(0, this.enemyDataContainer.list.length - 1)]

    //Creates enemy
    var enemy = new Enemy(this.scene, enemyData);

    //Adds enemy to enemyList
    this.enemyList.push(enemy);

  }

  setupSpawnLoop() {

    var timerEventConfig = {
      delay: 100,
      loop: true,
      callback: this.spawnEnemy,
      callbackScope: this
    }
    this.scene.timer = this.scene.time.addEvent(timerEventConfig);

  }

}
