class SceneStory1 extends Phaser.Scene {
  constructor() {
    super("SceneStory1");
  }

  create() {

    this.gobackb = this.add.image(300, 600, 'continue_button').setScale(4);
    this.gobackb.setInteractive();
    this.gobackb.on('pointerdown', () => this.scene.start("ScenePlayers"));

    this.storyText = this.add.bitmapText(80, 120, "font_default", "An alien civilization is\ninvading the earth, you\nmust get on a ship\nand reach the mother\nship to destroy them.").setFontSize(60);
    this.storyText.setOriginFromFrame();
    this.storyText.setPosition(config.width / 2, 300);

    //Scene Fade In
    this.cameras.main.fadeIn(500);
  }

  update() {}

}
