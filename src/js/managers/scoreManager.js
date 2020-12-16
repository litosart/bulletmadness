class ScoreManager {
  constructor(scene, playersList) {

    this.players = playersList;
    this.scene = scene;
    this.enemiesKilled = 0;

    //Score
    this.score = 0;
    this.scoreText = scene.add.bitmapText(16, 16, "font_default", "Score: 0");

    //Lives text
    this.livesText_1 = scene.add.bitmapText(35, config.height - 50, "font_default", "Lives player 1: " + this.players[0].lives);
    this.livesText_1.setFontSize(40);

    if (playerNumber == 2) {
      this.livesText_2 = scene.add.bitmapText(config.width - 270, config.height - 50, "font_default", "Lives player 2: " + this.players[1].lives);
      this.livesText_2.setFontSize(40);
    }

    //Setup Events
    eventSystem.off("EnemyHit_UpdateScore", this.addScore);
    eventSystem.off("PlayerHit_UpdateHealth", this.updateScore);
    eventSystem.on("EnemyHit_UpdateScore", this.addScore, this);
    eventSystem.on("PlayerHit_UpdateHealth", this.updateScore, this);
  }

  addScore(amount) {
    this.score += amount;
    this.enemiesKilled += 1;
    if (this.scoreText != undefined) {
      this.scoreText.setText('Score: ' + this.score);
    }
    if (this.enemiesKilled > 100){
      this.scene.cameras.main.fadeOut(500);
      this.scene.cameras.main.once('camerafadeoutcomplete', function() {
        this.scene.scene.start("SceneLevel1End",{score:this.score});
      }, this)
    }
  }

  updateTexts() {
    this.livesText_1.setText('Lives player 1: ' + this.players[0].lives);
    if (playerNumber == 2) {
      this.livesText_2.setText('Lives player 2: ' + this.players[1].lives);
    }
  }

  checkPlayersAlive() {
    var n = 0;
    var i = 0;
    for (i = 0; i < playerNumber; i++) {
      if (!this.players[i].alive) {
        n++;
      }
    }
    if (n == playerNumber) {
      //Scene Fade Out
      this.scene.cameras.main.fadeOut(500);
      this.scene.cameras.main.once('camerafadeoutcomplete', function() {
        this.scene.scene.start("SceneLevelEndOverview",{score:this.score});
      }, this);
    }

  }

  updateScore() {
    this.updateTexts();
    this.checkPlayersAlive();
  }
}
