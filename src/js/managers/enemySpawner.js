class EnemySpawner {

  constructor(scene,enemyArray) {
    this.scene = scene;
    this.enemyList = enemyArray;
  }

  spawnEnemy() {

    //Gets a random enemyData from the enemyDataContainer and spawns an enemy with given Data
    var enemyDataContainer = new EnemyShipsData();
    var enemyData = enemyDataContainer.list[Phaser.Math.Between(0, enemyDataContainer.list.length - 1)]

    //Adds enemy to enemyList
    this.enemyList.push(new Enemy(this.scene, enemyData));

  }

  setupSpawnLoop() {

    var timerEventConfig = {
      delay: this.timeBetweenSpawns,
      loop: true,
      callback: this.spawnEnemy,
      callbackScope: this
    }
    this.scene.timer = this.scene.time.addEvent(timerEventConfig);

  }

}
