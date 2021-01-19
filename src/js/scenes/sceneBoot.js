class SceneBoot extends Phaser.Scene {
  constructor() {
    super("SceneBoot");
  }

  //Loads all the necesary images
  preload() {
    //IMAGENES

    this.loadingText = this.add.bitmapText(config.width - 400, config.height - 80, "font_default", "Loading Game...");

    this.load.image("disconnected_warning", "resources/img/Disconnected.png");

    this.load.image("play_button", "resources/img/buttons/play_button.png");
    this.load.image("credits_button", "resources/img/buttons/credits.png");
    this.load.image("goback_button", "resources/img/buttons/go_back.png");
    this.load.image("continue_button", "resources/img/buttons/continue.png");
    this.load.image("records_button", "resources/img/buttons/records.png");
    this.load.image("score_button", "resources/img/buttons/score.png");
    this.load.image("logo", "resources/img/sprites/LOGO.png");
    this.load.image("score", "resources/img/sprites/score.png");

    this.load.image("ship1_stats", "resources/img/sprites/ship1_stats.png");
    this.load.image("ship2_stats", "resources/img/sprites/ship2_stats.png");
    this.load.image("ship3_stats", "resources/img/sprites/ship3_stats.png");

    this.load.image("1p", "resources/img/buttons/1.png");
    this.load.image("2p", "resources/img/buttons/2.png");

    this.load.image("arrow_left", "resources/img/buttons/flecha_izq.png");
    this.load.image("arrow_right", "resources/img/buttons/flecha_der.png");

    this.load.image("background", "resources/img/backgrounds/Background_ClearSky.png");
    this.load.image("back_borders", "resources/img/backgrounds/back_borders.png");
    this.load.image("background_2", "resources/img/backgrounds/Background_Black_Borders.png");
    this.load.image("background_earth", "resources/img/backgrounds/earth.png");

    this.load.image("W", "resources/img/buttons/W.png");
    this.load.image("A", "resources/img/buttons/A.png");
    this.load.image("S", "resources/img/buttons/S.png");
    this.load.image("D", "resources/img/buttons/D.png");
    this.load.image("V", "resources/img/buttons/V.png");
    this.load.image("L", "resources/img/buttons/L.png");
    this.load.image("UP", "resources/img/buttons/UP.png");
    this.load.image("DOWN", "resources/img/buttons/DOWN.png");
    this.load.image("LEFT", "resources/img/buttons/LEFT.png");
    this.load.image("RIGHT", "resources/img/buttons/RIGHT.png");

    //SPRITES

    this.load.spritesheet("powerup_movement_speed_1", "resources/img/sprites/powerup_ship_speed_1.png", {
      frameWidth: 32,
      frameHeight: 32
    });

    this.load.spritesheet("powerup_movement_speed_2", "resources/img/sprites/powerup_ship_speed_2.png", {
      frameWidth: 32,
      frameHeight: 32
    });

    this.load.spritesheet("powerup_shoot_speed_1", "resources/img/sprites/powerup_shoot_speed_1.png", {
      frameWidth: 32,
      frameHeight: 32
    });

    this.load.spritesheet("powerup_shoot_speed_2", "resources/img/sprites/powerup_shoot_speed_2.png", {
      frameWidth: 32,
      frameHeight: 32
    });

    this.load.spritesheet("powerup_weapon_shotgun_1", "resources/img/sprites/powerup_weapon_shotgun_1.png", {
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
    this.load.spritesheet("ship_player_3", "resources/img/sprites/ship_player_3.png", {
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

    this.load.spritesheet("explosion_1", "resources/img/sprites/explosion_1.png", {
      frameWidth: 32,
      frameHeight: 32
    });

    this.load.spritesheet("numbers", "resources/img/sprites/numbers.png", {
      frameWidth: 16,
      frameHeight: 16
    });

    //MUSICA
    this.load.audio('maintheme', "resources/sounds/music/main_theme.mp3");
    this.load.audio('beam_sound', ["resources/sounds/sound_effects/beam.mp3", "resources/sounds/sound_effects/beam.ogg"]);
    this.load.audio('explosion_sound', ["resources/sounds/sound_effects/explosion.mp3", "resources/sounds/sound_effects/explosion.ogg"]);
    this.load.audio('powerUp_sound', ["resources/sounds/sound_effects/powerUp.mp3", "resources/sounds/sound_effects/powerUp.ogg"]);
    this.load.audio('playerHit_sound', "resources/sounds/sound_effects/Player_Hit.wav");

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
      key: "ship_player_3_idle",
      frames: this.anims.generateFrameNumbers("ship_player_3"),
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

    this.anims.create({
      key: "explosion_1_anim",
      frames: this.anims.generateFrameNumbers("explosion_1"),
      frameRate: 15,
      repeat: 0,
      yoyo: false
    });

    //Scene Fade Out
    this.cameras.main.fadeOut(500);

    //Adding a sound Manager
    this.soundManager = new SoundManager(this);

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    //                         Server Conection Setup                        //
    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    var para = document.createElement('p');
    document.body.appendChild(para);
    para.textContent = "PLAYERS ONLINE: 0";
    clientParameters.playerName = prompt('YOUR NAME');


    //Lista que contiene los nombres de los jugadores conectados al servidor
    var playerNames = [];
    for (var s = 0; s < 10; s++) {
      playerNames[s] = document.createElement('p');
      document.body.appendChild(playerNames[s]);
    }

    var serverResponse;
    $.ajax({
      url: "http://127.0.0.1:8080/players",
      method: "POST",
      contentType: "application/json; charset=utf-8",
      data: "{\"connected\":true}",
      context: this
    }).done(function(data) {

      clientParameters.id = data.id;

      //Maintain Conexion With Server
      window.setInterval(function() {
        $.ajax({
          url: "http://127.0.0.1:8080/players/" + clientParameters.id,
          method: "PUT",
          contentType: "application/json; charset=utf-8",
          data: "{\"connected\":true}",
          context: this
        }).fail(function() {
          this.scene.launch("SceneDisconnected");
        })
      }.bind(this), 100)

      //this.intervalID = window.setInterval(this.retrieve_rate.bind(this), this.INTERVAL);

      //Update Player Count
      window.setInterval(function() {
        $.ajax({
          url: "http://127.0.0.1:8080/players/connected"
        }).done(function(data) {
          para.textContent = "PLAYERS ONLINE: " + data;
        });
      }, 600)

      //Update Player Names
      window.setInterval(function() {
        $.ajax({
          url: "http://127.0.0.1:8080/players/playerNames"
        }).done(function(data) {
          for (var i = 0; i < data.length; i++) {
            if (playerNames[i] != undefined) {
              playerNames[i].textContent = data[i];
            }
          }
        });
      }, 600)

      $.ajax({
        url: "http://127.0.0.1:8080/players/name",
        method: "POST",
        contentType: "application/json; charset=utf-8",

        data: JSON.stringify({
          id: clientParameters.id,
          name: clientParameters.playerName
        })
      }).done(function(data) {
        console.log("name: " + data.name);
        console.log("id: " + clientParameters.id)
      });

    }).fail(function() {
      this.scene.launch("SceneDisconnected");
    });

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    this.cameras.main.once('camerafadeoutcomplete', function() {
      eventSystem.emit("PlaySound_MainTheme");
      this.scene.launch("SceneTitleScreen");
    }, this);

  }
}
