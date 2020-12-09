class ScenePlayers extends Phaser.Scene {
  constructor() {
    super("ScenePlayers");
  }

  create() {
    this.oneplayer = this.add.image(200, 700, '1p').setScale(4);
    this.twoplayer = this.add.image(400, 700, '2p').setScale(4);
    this.oneplayer.setInteractive();
    this.twoplayer.setInteractive();
    this.oneplayer.on('pointerdown', () => this.OnePlayerSelected());
    this.twoplayer.on('pointerdown', () => this.TwoPlayerSelected());
    this.oneplayer_leftarrow = this.add.image(100, 500, 'arrow_left').setScale(4);
    this.oneplayer_rightarrow = this.add.image(250, 500, 'arrow_right').setScale(4);
    this.twoplayer_leftarrow = this.add.image(350, 500, 'arrow_left').setScale(4);
    this.twoplayer_rightarrow = this.add.image(500, 500, 'arrow_right').setScale(4);
    this.oneplayer_leftarrow.setInteractive();
    this.oneplayer_rightarrow.setInteractive();
    this.twoplayer_leftarrow.setInteractive();
    this.twoplayer_rightarrow.setInteractive();
    this.oneplayer_leftarrow.on('pointerdown', () => this.ChangeShip());

    this.ship1 = this.add.sprite(175, 300, 'ship_player_1').setScale(2);
  }

  update() {}

  OnePlayerSelected() {
    this.scene.start("SceneGame");
    playerNumber = 1;
  }

  TwoPlayerSelected() {
    this.scene.start("SceneGame");
    playerNumber = 2;
  }

  ChangeShip() {
    this.ship1.destroy();
    this.ship1 = this.add.sprite(175, 300, 'ship_enemy_small_1').setScale(2);
  }

}
