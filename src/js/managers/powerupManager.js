class PowerupManager {

  powerUpList = [];

  constructor(scene) {
    this.scene = scene;
    //References the enemyManager list
    this.setupSpawnerLoop();
  }

  spawnPowerup() {
    var powerUp = new PowerUp(this.scene, new PowerUpData());
    this.powerUpList.push(powerUp);
  }

  setupSpawnerLoop() {
    this.spawnerLoopConfig = {
      delay: 500,
      loop: true,
      callback: this.spawnPowerup,
      callbackScope: this
    }
    this.scene.timer = this.scene.time.addEvent(this.spawnerLoopConfig);
  }
}
