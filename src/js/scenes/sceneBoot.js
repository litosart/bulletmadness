class SceneBoot extends Phaser.Scene {
  constructor() {
    super("SceneBoot");
  }

  //Loads all the necesary images
  preload() {
    //IMAGENES

    this.loadingText = this.add.bitmapText(config.width - 400, config.height - 80, "font_default", "Loading Game...");

    this.load.image("play_button", "resources/img/buttons/play_button.png");
    this.load.image("logo", "resources/img/sprites/LOGO.png");
    this.load.image("score", "resources/img/sprites/score.png");

    this.load.image("1p", "resources/img/buttons/1.png");
    this.load.image("2p", "resources/img/buttons/2.png");

    this.load.image("arrow_left", "resources/img/buttons/flecha_izq.png");
    this.load.image("arrow_right", "resources/img/buttons/flecha_der.png");

    this.load.image("background", "resources/img/backgrounds/Background_ClearSky.png");
    this.load.image("back_borders", "resources/img/backgrounds/back_borders.png");
    this.load.image("background_2", "resources/img/backgrounds/Background_Black_Borders.png");

    //SPRITES

    this.load.spritesheet("powerup_movement_speed_1", "resources/img/sprites/powerup_ship_speed_1.png",{
      frameWidth: 32,
      frameHeight: 32
    });

    this.load.spritesheet("powerup_movement_speed_2", "resources/img/sprites/powerup_ship_speed_2.png",{
      frameWidth: 32,
      frameHeight: 32
    });

    this.load.spritesheet("powerup_shoot_speed_1", "resources/img/sprites/powerup_shoot_speed_1.png",{
      frameWidth: 32,
      frameHeight: 32
    });

    this.load.spritesheet("powerup_shoot_speed_2", "resources/img/sprites/powerup_shoot_speed_2.png",{
      frameWidth: 32,
      frameHeight: 32
    });

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

    this.load.spritesheet("proyectile_beam_1", "resources/img/sprites/proyectile_beam_1.png", {
      frameWidth: 7,
      frameHeight: 16
    });

    this.load.spritesheet("proyectile_beam_2", "resources/img/sprites/proyectile_beam_2.png", {
      frameWidth: 7,
      frameHeight: 16
    });

    this.load.spritesheet("numbers", "resources/img/sprites/numbers.png", {
      frameWidth: 16,
      frameHeight: 16
    });

    //MUSICA
    this.maintheme = this.load.audio('maintheme',"resources/sounds/music/main_theme.mp3");

    this.beamSound = this.load.audio('beam_sound',["resources/sounds/sound_effects/beam.mp3", "resources/sounds/sound_effects/beam.ogg"]);
    this.explosionSound = this.load.audio('explosion_sound',["resources/sounds/sound_effects/explosion.mp3", "resources/sounds/sound_effects/explosion.ogg"]);
    this.powerUpSound = this.load.audio('powerUp_sound',["resources/sounds/sound_effects/powerUp.mp3", "resources/sounds/sound_effects/powerUp.ogg"]);

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

    this.anims.create({
      key: "proyectile_beam_2_anim",
      frames: this.anims.generateFrameNumbers("proyectile_beam_2"),
      frameRate: 5,
      repeat: -1,
      yoyo: true
    });

    //Scene Fade Out
    this.cameras.main.fadeOut(500);

    //Adding a sound Manager
    this.soundManager = new SoundManager(this);
    //Adding sounds
    this.soundManager.addTheme(this.maintheme);
    this.soundManager.addSound(this.beamSound);
    this.soundManager.addSound(this.explosionSound);
    this.soundManager.addSound(this.powerUpSound);

    this.cameras.main.once('camerafadeoutcomplete', function() {
      eventSystem.emit("PlaySound_MainTheme");
      this.scene.sleep("SceneBoot");
      this.scene.start("SceneTitleScreen");
    }, this);

  }
}
