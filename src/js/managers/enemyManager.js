class EnemyManager {

  enemyArray = [];
  timeBetweenSpawns = 200;

  constructor(scene) {
    this.scene = scene
    this.setupSpawnLoop();
  }

  spawnEnemy() {
    this.enemyArray.push(new Enemy(this.scene));
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
