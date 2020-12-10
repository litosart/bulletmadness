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

    //IMAGENES

    this.load.image("play_button", "resources/img/buttons/play_button.png");
    this.load.image("logo", "resources/img/sprites/LOGO.png");
    this.load.image("score", "resources/img/sprites/score.png");

    this.load.image("1p", "resources/img/buttons/1.png");
    this.load.image("2p", "resources/img/buttons/2.png");

    this.load.image("arrow_left", "resources/img/buttons/flecha_izq.png");
    this.load.image("arrow_right", "resources/img/buttons/flecha_der.png");

    this.load.image("background", "resources/img/backgrounds/Background_ClearSky.png");
    this.load.image("back_borders", "resources/img/backgrounds/back_borders.png");
    this.load.image("background_2", "resources/img/backgrounds/background_2.png");

    //SPRITES

    this.load.spritesheet("game_logo", "resources/img/sprites/logo_sheet.png", {
      frameWidth: 249,
      frameHeight: 96
    });

    this.load.spritesheet("ship_enemy_tiny_1", "resources/img/sprites/ship_enemy_tiny_red.png", {
      frameWidth: 18,
      frameHeight: 18
    });

    this.load.spritesheet("ship_enemy_small_1", "resources/img/sprites/ship_enemy_small_red.png", {
      frameWidth: 20,
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
    this.load.spritesheet("ship_player_2", "resources/img/sprites/ship_player_2.png", {
      frameWidth: 32,
      frameHeight: 32
    });

    this.load.spritesheet("proyectile_beam_1", "resources/img/sprites/proyectile_beam.png", {
      frameWidth: 7,
      frameHeight: 16
    });
    this.load.spritesheet("numbers", "resources/img/sprites/numbers.png", {
      frameWidth: 16,
      frameHeight: 16
    });

    //MUSICA
    this.load.audio('maintheme',"resources/sounds/music/main_theme.mp3");

  }

  create() {

    this.anims.create({
      key: 'game_logo_anim',
      frames: this.anims.generateFrameNumbers('game_logo', {
        start: 0,
        end: 11
      }),
      frameRate: 15,
      repeat: -1
    });

    this.anims.create({
      key: "ship_enemy_tiny_1_idle",
      frames: this.anims.generateFrameNumbers("ship_enemy_tiny_1"),
      frameRate: 25,
      repeat: -1,
      yoyo: true
    });

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
    this.anims.create({
      key: "ship_player_2_idle",
      frames: this.anims.generateFrameNumbers("ship_player_2"),
      frameRate: 25,
      repeat: -1,
      yoyo: true
    });

    this.anims.create({
      key: "proyectile_beam_1_anim",
      frames: this.anims.generateFrameNumbers("proyectile_beam_1"),
      frameRate: 5,
      repeat: -1,
      yoyo: true
    });

    //this.sound.add('maintheme').play();
    this.scene.start("SceneTitleScreen");
  }
}
