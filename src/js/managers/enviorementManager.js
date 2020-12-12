class EnviorementManager {

  /*
  The Enviorement Manager its responsable of:
  -Setting up the level background

  Dependecies:
  -Scene
  */

  setBackgroundTo(backgroundName) {
    this.background = this.scene.add.tileSprite(0, 0, game.config.width, game.config.height, backgroundName);
    this.background.setOrigin(0, 0);
    this.background.setScrollFactor(0);
  }

  constructor(scene, backgroundName) {
    this.scene = scene;
    this.setBackgroundTo(backgroundName);
  }

  update() {
    this.background.tilePositionY -= 5;
  }

}
