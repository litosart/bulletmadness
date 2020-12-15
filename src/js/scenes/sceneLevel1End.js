class SceneLevel1End extends Phaser.Scene {

  constructor() {
    super("SceneLevel1End");
  }

  create(sceneData) {

    this.cameras.main.fadeIn(500);

    //Final Score Text
    this.scoreText = this.add.bitmapText(config.width / 2, config.height / 2, "font_default", "Final Score: " + sceneData.score);
    this.scoreText.setOriginFromFrame();
    this.scoreText.setPosition(config.width / 2, config.height / 2);

    this.playb = this.add.image(300, 500, 'continue_button').setScale(4);
    this.playb.setInteractive();
    this.playb.on('pointerdown', () => this.scene.start("ScenePlayers"));

    this.cameras.main.fadeIn(500);
  }
}
