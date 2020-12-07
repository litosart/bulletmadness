class SceneBoot extends Phaser.Scene {
  constructor() {
    super("SceneBoot");
  }

  preload() {
    this.add.text(20, 20, "Loading Game...", {
      font: "25px Arial",
      fill: "white"
    });

    this.load.image("play_button", "resources/img/buttons/play_button.png");
    this.load.image("logo", "resources/img/sprites/LOGO.png");

    this.load.image("1p", "resources/img/buttons/1.png");
    this.load.image("2p", "resources/img/buttons/2.png");

    this.load.image("background", "resources/img/backgrounds/Background_ClearSky.png");
    this.load.image("playerShip1", "resources/img/sprites/PlayerShip1.png");
  }

  create() {
    this.scene.start("SceneTitleScreen");
  }
}
