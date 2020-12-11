class Powerup extends Phaser.GameObjects.Sprite{

  scene;
  powerupData;

  constructor(scene,powerupData){
    this.scene = scene;
    this.powerupData = powerupData;
  }
  
}
