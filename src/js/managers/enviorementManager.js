class EnviorementManager {

  /*
  The Enviorement Manager its responsable of:
  -Setting up the level background

  Dependecies:
  -Scene
  */

  setBackgroundTo(backgroundName, posX, posY) {
    this.background = this.scene.add.tileSprite(posX, posY, game.config.width, game.config.height, backgroundName);
    this.background.setOrigin(0, 0);
    this.background.setScrollFactor(0);
  }

  constructor(scene, backgroundName, posX, posY) {
    this.scene = scene;
    this.setBackgroundTo(backgroundName, posX, posY);
  }

  update(mode) {
    if(mode == 1){
      this.background.tilePositionY -= 5;
    }
    if(mode == 2){
      this.background.tilePositionY -= 0.02;
    }
  }

}
