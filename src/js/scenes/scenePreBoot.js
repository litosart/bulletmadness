username_string = "";
//this.player_name = null;

class ScenePreBoot extends Phaser.Scene {

  constructor() {
    super("ScenePreBoot");
  }

  preload() {
    this.load.bitmapFont("font_default", "resources/img/font/font.png", "resources/img/font/font.fnt");
    this.load.image("play_button", "resources/img/buttons/play_button.png");
    this.load.image("delete_button", "resources/img/buttons/delete.png");
    this.load.image("black", "resources/img/sprites/black.png");
  }

  create() {
    document.addEventListener('keypress', logKey);
    this.add.bitmapText(300, 200, "font_default", "enter your name").setOrigin(0.5);
    this.blackname = this.add.image(300, 400, 'black');

    this.deletename = this.add.image(200, 600, 'delete_button').setScale(4);
    this.deletename.setInteractive();
    this.deletename.on('pointerdown', () => this.cleanname());

    this.playgame = this.add.image(400, 600, 'play_button').setScale(4);
    this.playgame.setInteractive();
    this.playgame.on('pointerdown', () => this.scene.start("SceneBoot"));

    function logKey(e) {
      console.log(e.key);
      if(username_string.length<10){
        username_string += e.key;
        //this.blackname = this.add.image(300, 400, 'black');
      }
    }
  }

  update() {
    this.blackname = this.add.image(300, 400, 'black');
    this.player_name = this.add.bitmapText(300, 400, "font_default", username_string).setOrigin(0.5);
    //this.player_name.destroy();
    clientParameters.playerName = username_string;
  }

  cleanname() {
    username_string = "";
    //this.player_name.destroy();
    this.blackname = this.add.image(300, 400, 'black');
  }
}
