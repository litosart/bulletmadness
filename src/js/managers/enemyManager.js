class EnemyManager {

  enemyArray = [];
  timeBetweenSpawns = 100;
  enemyShipsData;

  constructor(scene, enemyShipsData) {

    this.scene = scene
    this.enemyShipsData = enemyShipsData;
    this.setupSpawnLoop();

  }

  spawnEnemy() {

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
