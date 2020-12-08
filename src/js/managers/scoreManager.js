class ScoreManager {
  constructor(scene, playersList) {

    this.players = playersList;
    this.scene = scene;

    //Score
    this.score = 0;
    this.scoreText = scene.add.text(16, 16, 'Score: 0', {
      fontSize: '20px',
      fill: '#000'
    });

    //Lives text
    this.livesText_1 = scene.add.text(16, config.height - 30, 'Lives player 1: ' + this.players[0].lives, {
      fontSize: '20px',
      fill: '#000'
    });
    if (playerNumber == 2) {
      this.livesText_2 = scene.add.text(config.width - 200, config.height - 30, 'Lives player 2: ' + this.players[1].lives, {
        fontSize: '20px',
        fill: '#000'
      });
    }

    //Setup Events
    eventSystem.removeAllListeners("enemyHit");
    eventSystem.removeAllListeners("playerHit");
    eventSystem.on("enemyHit", this.addScore, this);
    eventSystem.on("playerHit", this.updateScore, this)
  }

  addScore(amount) {
    this.score += amount;
    if (this.scoreText != undefined) {
      this.scoreText.setText('Score: ' + this.score);
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
      this.scene.scene.start("SceneTitleScreen");
    }
  }

  updateScore() {
    this.updateTexts();
    this.checkPlayersAlive();
  }
}
