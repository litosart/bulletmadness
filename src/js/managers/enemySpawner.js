class EnemySpawner {

  /*
  The Enemy Spawner its responsable of:
  -Spawning enemies using the given spawnerData

  Dependecies:
  -Scene
  -EnemyManager (Ony uses the enemy list)
  -SpawnerData (its not strictly necesary)
  */

  constructor(scene, spawnerData, enemyArray,websocket) {
    this.scene = scene;
    //References the enemyManager list
    this.enemyList = enemyArray;
    this.spawnerData = spawnerData;
    this.websocket = websocket;
    this.setupSpawnerLoop();
  }

  spawnEnemy() {
    //Creates enemy using the given enemyData
    var enemy = new Enemy(this.scene, this.spawnerData.enemyData,this.websocket,this.spawnerData);
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
