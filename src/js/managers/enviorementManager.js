class EnviorementManager{
  constructor(scene){
    this.scene = scene;

    this.background = new Phaser.Physics.Arcade.Sprite(scene,0,0,"background").setScale(2);
    this.background.setOrigin(0, 0);
    scene.add.existing(this.background);
  }
}
