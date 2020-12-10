class EnviorementManager {

  /*
  The Enviorement Manager its responsable of:
  -Setting up the level background

  Dependecies:
  -Scene
  */

  setBackgroundTo(newBackgroundName) {
    if (this.background != undefined) {
      this.background.destroy();
    }
    this.background = new Phaser.Physics.Arcade.Sprite(this.scene, 0, 0, newBackgroundName).setScale(2);
    this.background.setOrigin(0, 0);
    this.scene.add.existing(this.background);
  }

  constructor(scene, backgroundName) {
    this.scene = scene;
    this.setBackgroundTo(backgroundName);
  }

}
