class SceneLevel1End extends Phaser.Scene {

  constructor() {
    super("SceneLevel1End");
  }

  create(sceneData) {

    this.cameras.main.fadeIn(500);

    //Final Score Text
    this.scoreText = this.add.bitmapText(config.width / 2, config.height / 2, "font_default", "Final Score: " + sceneData.score);
    this.scoreText.setOriginFromFrame();
    this.scoreText.setPosition(config.width / 2, 550);

    this.level1Text = this.add.bitmapText(config.width / 2, config.height / 2, "font_default", "Level 1 completed!");
    this.level1Text.setOriginFromFrame();
    this.level1Text.setPosition(config.width / 2, 100);

    this.level1Story = this.add.bitmapText(config.width / 2, config.height / 2, "font_default", "You have defeated the enemies\nthat was aproaching to the Earth.\nNow you must continue your way across\nthe universe to the mother ship.").setFontSize(40);
    this.level1Story.setOriginFromFrame();
    this.level1Story.setPosition(config.width / 2, 300);

    this.playb = this.add.image(300, 650, 'continue_button').setScale(4);
    this.playb.setInteractive();
    this.playb.on('pointerdown', () => this.scene.start("SceneCredits"));

    this.cameras.main.fadeIn(500);
  }
}
