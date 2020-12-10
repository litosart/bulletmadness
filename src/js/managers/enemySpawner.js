class EnemySpawner {

  /*
  The Enemy Spawner its responsable of:
  -Spawning enemies using the given spawnerData

  Dependecies:
  -Scene
  -SpawnerData
  */

  constructor(scene, spawnerData, enemyArray) {
    this.scene = scene;
    //References the enemyManager list
    this.enemyList = enemyArray;
    this.spawnerData = spawnerData;
    this.setupSpawnerLoop();
  }

  spawnEnemy() {
    //Creates enemy using the given enemyData
    var enemy = new Enemy(this.scene, this.spawnerData.enemyData);
    //Adds enemy to the enemyManagers list
    this.enemyList.push(enemy);
  }

  setupSpawnerLoop() {
    this.spawnerLoopConfig = {
      delay: this.spawnerData.spawnDelay,
      loop: this.spawnerData.loop,
      callback: this.spawnEnemy,
      callbackScope: this
    }
    this.scene.timer = this.scene.time.addEvent(this.spawnerLoopConfig);
  }
}
