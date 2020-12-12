class PowerupManager {

  powerUpList = [];

  constructor(scene) {
    this.scene = scene;
    //References the enemyManager list
    this.setupSpawnerLoop();
  }

  spawnPowerUp() {
    var powerUp = new PowerUp(this.scene,powerUpDataContainer.list[Phaser.Math.Between(0,powerUpDataContainer.list.length-1)]);
    this.powerUpList.push(powerUp);
  }

  setupSpawnerLoop() {
    this.spawnerLoopConfig = {
      delay: 3000,
      loop: true,
      callback: this.spawnPowerUp,
      callbackScope: this
    }
    this.scene.timer = this.scene.time.addEvent(this.spawnerLoopConfig);
  }
}
