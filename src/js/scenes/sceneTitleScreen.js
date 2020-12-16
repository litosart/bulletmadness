class SceneTitleScreen extends Phaser.Scene {
  constructor() {
    super("SceneTitleScreen");
  }

  create() {

    this.add.sprite(300, 200, 'game_logo').setScale(2).play('game_logo_anim');
    this.playb = this.add.image(300, 480, 'play_button').setScale(4);
    this.playb.setInteractive();
    this.playb.on('pointerdown', () => this.scene.start("SceneStory1"));

    this.creditsb = this.add.image(300, 580, 'credits_button').setScale(4);
    this.creditsb.setInteractive();
    this.creditsb.on('pointerdown', () => this.scene.start("SceneCredits"));

    this.verText = this.add.bitmapText(config.width / 2, config.height / 2, "font_default", "Ver. 0.1 EARLY ACCESS\nSTILL IN DEVELOPMENT").setFontSize(40);
    this.verText.setOriginFromFrame();
    this.verText.setPosition(config.width / 2, 700);

    //Scene Fade In
    this.cameras.main.fadeIn(500);
  }

  update() {}

}
