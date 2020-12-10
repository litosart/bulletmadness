class SceneLevelEndOverview extends Phaser.Scene {

  constructor() {
    super("SceneLevelEndOverview");
  }

  create(sceneData) {
    this.ScoreText = this.add.text(config.width / 2, config.height / 2, 'Final Score: ' + sceneData.score, {
      fontSize: '20px',
      fill: "white"
    });
  }
}
