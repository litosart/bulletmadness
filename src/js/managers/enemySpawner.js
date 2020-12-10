class EnemySpawner {

  spawnDelay = 100;
  spawnShouldLoop = true;
  enemyData = enemyShipsData.list[0];

  constructor(scene, enemyData, enemyArray) {
    this.scene = scene;
    this.enemyData = enemyData;
    this.enemyList = enemyArray;
  }

  spawnEnemy() {
    //Gets a random enemyData from the enemyDataContainer and spawns an enemy with given Data
    var enemyData = this.enemyData;
    //Creates enemy
    var enemy = new Enemy(this.scene, enemyData);
    //Adds enemy to enemyList
    this.enemyList.push(enemy);
  }

  setupSpawner(spawnerData) {

    this.spawnerLoopConfig = {
      delay: spawnerData.spawnDelay,
      loop: spawnerData.loop,
      callback: this.spawnEnemy,
      callbackScope: this
    }
    this.scene.timer = this.scene.time.addEvent(this.spawnerLoopConfig);

  }

}
