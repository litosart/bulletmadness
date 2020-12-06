class SceneBoot extends Phaser.Scene{
  constructor(){
    super("SceneBoot");
  }

  preload(){
    this.add.text(20,20,"Loading Game...", {
      font:"25px Arial", fill:"white"
    });
    this.load.image("background", "resources/img/backgrounds/Background_ClearSky.png");
    this.load.image("playerShip1", "resources/img/sprites/PlayerShip1.png");
  }

  create(){
    this.scene.start("SceneGame");
  }
}
