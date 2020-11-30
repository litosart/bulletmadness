
class sceneGame extends Phaser.Scene {
  constructor(){
    super("bootGame");
  }

  preload(){
    this.load.image("background", "resources/img/backgrounds/Background_ClearSky.png");
    this.load.image("playerShip1", "resources/img/sprites/PlayerShip1.png");
  }

  create() {
    this.background = this.add.image(0,0,"background");
    this.background.setOrigin(0,0);

    this.ship = this.add.image(config.width/2,config.height/2,"playerShip1");

    this.add.text(20,20,"Loading Game...", {
      font:"25px Arial", fill:"white"
    });
  }
}
