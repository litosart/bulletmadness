this.username_string = "";

class ScenePreBoot extends Phaser.Scene {



  constructor() {
    super("ScenePreBoot");

  }

  preload() {
    this.load.bitmapFont("font_default", "resources/img/font/font.png", "resources/img/font/font.fnt");

  }

  create() {

    //console.log(Phaser.Input.Keyboard.Key);
    document.addEventListener('keypress', logKey);

    this.add.bitmapText(config.width - 400, 200, "font_default", "Introduzca su nombre de usuario");

    this.deletename = this.add.image(200, 600, 'records').setScale(4);
    this.deletename.setInteractive();
    this.deletename.on('pointerdown', () => this.username_string="");

    this.playgame = this.add.image(400, 600, 'play_button').setScale(4);
    this.playgame.setInteractive();
    this.playgame.on('pointerdown', () => this.scene.start("SceneBoot"));

    function logKey(e) {
      //log.textContent += ` ${e.code}`;
      console.log(e.key);
      username_string += e.key;
    }

    this.player_name = this.add.bitmapText(config.width - 400, 500, "font_default", username_string);

    //this.scene.start("SceneBoot");
  }

  update() {
    this.player_name = this.add.bitmapText(config.width - 400, 500, "font_default", username_string);

  }
}
