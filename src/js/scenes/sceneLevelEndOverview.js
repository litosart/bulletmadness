class SceneLevelEndOverview extends Phaser.Scene {

  constructor() {
    super("SceneLevelEndOverview");
  }

  create(sceneData) {

    this.cameras.main.fadeIn(500);

    this.deathText = this.add.bitmapText(config.width / 2, config.height / 2, "font_default", "YOU DIED");
    this.deathText.setOriginFromFrame();
    this.deathText.setPosition(config.width / 2, 200);

    //Final Score Text
    this.scoreText = this.add.bitmapText(config.width / 2, config.height / 2, "font_default", "Final Score: " + sceneData.score);
    this.scoreText.setOriginFromFrame();
    this.scoreText.setPosition(config.width / 2, 400);

    this.playb = this.add.image(300, 500, 'play_button').setScale(4);
    this.playb.setInteractive();
    this.playb.on('pointerdown', () => this.scene.start("SceneTitleScreen"));

    this.cameras.main.fadeIn(500);

    //Send Score To Server
    $.ajax({
      url: "http://127.0.0.1:8080/leaderboard",
      method: "POST",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({
        playerName: clientParameters.playerName,
        scoreNumber: sceneData.score
      })
    })
  }
}
