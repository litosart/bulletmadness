class EnemySpawner {

  constructor(scene, enemyArray) {
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
