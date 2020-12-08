class SceneBoot extends Phaser.Scene {
  constructor() {
    super("SceneBoot");
  }

  //Loads all the necesary images
  preload() {
    this.add.text(config.width - 250, config.height - 80, "Loading Game...", {
      font: "25px Arial",
      fill: "white"
    });

    this.load.image("play_button", "resources/img/buttons/play_button.png");
    this.load.image("logo", "resources/img/sprites/LOGO.png");

    this.load.image("1p", "resources/img/buttons/1.png");
    this.load.image("2p", "resources/img/buttons/2.png");

    this.load.image("background", "resources/img/backgrounds/Background_ClearSky.png");


    this.load.spritesheet("playerShip1", "resources/img/sprites/enemy_small_red.png", {
      frameWidth: 32,
      frameHeight: 32
    });

  }

  create() {

    this.anims.create({
      key: "ship1_anim",
      frames: this.anims.generateFrameNumbers("playerShip1"),
      frameRate: 25,
      repeat: -1,
      yoyo: true
    });

    this.scene.start("SceneTitleScreen");
  }
}
