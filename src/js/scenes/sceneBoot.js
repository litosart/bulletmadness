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

    this.load.spritesheet("ship_enemy_small_1", "resources/img/sprites/ship_enemy_small_red.png", {
      frameWidth: 32,
      frameHeight: 32
    });

    this.load.spritesheet("ship_enemy_big_1", "resources/img/sprites/ship_enemy_big_red.png", {
      frameWidth: 64,
      frameHeight: 32
    });

    this.load.spritesheet("ship_player_1", "resources/img/sprites/ship_player_1.png", {
      frameWidth: 32,
      frameHeight: 32
    });

  }

  create() {

    this.anims.create({
      key: "ship_enemy_small_1_idle",
      frames: this.anims.generateFrameNumbers("ship_enemy_small_1"),
      frameRate: 25,
      repeat: -1,
      yoyo: true
    });

    this.anims.create({
      key: "ship_enemy_big_1_idle",
      frames: this.anims.generateFrameNumbers("ship_enemy_big_1"),
      frameRate: 12,
      repeat: -1,
      yoyo: true
    });

    this.anims.create({
      key: "ship_player_1_idle",
      frames: this.anims.generateFrameNumbers("ship_player_1"),
      frameRate: 25,
      repeat: -1,
      yoyo: true
    });

    this.scene.start("SceneTitleScreen");
  }
}
