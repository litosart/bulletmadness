class ScenePlayers extends Phaser.Scene {
  constructor() {
    super("ScenePlayers");
  }

  create() {
    this.oneplayer = this.add.image(250, 500, '1p').setScale(4);
    this.twoplayer = this.add.image(350, 500, '2p').setScale(4);
    this.oneplayer.setInteractive();
    this.twoplayer.setInteractive();
    this.oneplayer.on('pointerdown', () => this.OnePlayerSelected());
    this.twoplayer.on('pointerdown', () => this.TwoPlayerSelected());
  }

  update() {}

  startNextScene() {
    this.scene.start("SceneGame");
  }

  OnePlayerSelected() {
    this.startNextScene();
    playerNumber = 1;
  }

  TwoPlayerSelected() {
    this.startNextScene();
    playerNumber = 2;
  }

}
