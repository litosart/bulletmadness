class SceneLevelEndOverview extends Phaser.Scene {

  constructor() {
    super("SceneLevelEndOverview");
  }

  create(sceneData) {

    this.cameras.main.fadeIn(500);

    //Final Score Text
    this.scoreText = this.add.bitmapText(config.width / 2, config.height / 2, "font_default", "Final Score: " + sceneData.score);
    this.scoreText.setOriginFromFrame();
    this.scoreText.setPosition(config.width / 2, config.height / 2);
  }
}
