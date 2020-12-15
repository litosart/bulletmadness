class ScenePlayers extends Phaser.Scene {
  constructor() {
    super("ScenePlayers");
  }

  create() {

    this.selectShipText = this.add.bitmapText(100, 40, "font_default", "Select Your Ship");
    this.selectShipText = this.add.bitmapText(35, config.height-80, "font_default", "Select Player Number");

    this.selectShipText = this.add.bitmapText(100, 100, "font_default", "Speed:").setFontSize(40);
    this.selectShipText = this.add.bitmapText(100, 196, "font_default", "Health:").setFontSize(40);
    this.selectShipText = this.add.bitmapText(100, 292, "font_default", "Weapons:").setFontSize(40);
    this.stats1 = this.add.image(175, 200, 'ship1_stats').setScale(3);
    this.stats2 = this.add.image(425, 200, 'ship2_stats').setScale(3);

    this.add.image(150, 600, 'W').setScale(3);
    this.add.image(100, 650, 'A').setScale(3);
    this.add.image(150, 650, 'S').setScale(3);
    this.add.image(200, 650, 'D').setScale(3);
    this.add.image(250, 625, 'V').setScale(3);

    this.add.image(400, 600, 'UP').setScale(3);
    this.add.image(350, 650, 'LEFT').setScale(3);
    this.add.image(400, 650, 'DOWN').setScale(3);
    this.add.image(450, 650, 'RIGHT').setScale(3);
    this.add.image(500, 625, 'L').setScale(3);

    this.oneplayer = this.add.image(175, 500, '1p').setScale(3);
    this.twoplayer = this.add.image(425, 500, '2p').setScale(3);
    this.oneplayer.setInteractive();
    this.twoplayer.setInteractive();
    this.oneplayer.on('pointerdown', () => this.OnePlayerSelected());
    this.twoplayer.on('pointerdown', () => this.TwoPlayerSelected());
    this.oneplayer_leftarrow = this.add.image(100, 420, 'arrow_left').setScale(3);
    this.oneplayer_rightarrow = this.add.image(250, 420, 'arrow_right').setScale(3);
    this.twoplayer_leftarrow = this.add.image(350, 420, 'arrow_left').setScale(3);
    this.twoplayer_rightarrow = this.add.image(500, 420, 'arrow_right').setScale(3);
    this.oneplayer_leftarrow.setInteractive();
    this.oneplayer_rightarrow.setInteractive();
    this.twoplayer_leftarrow.setInteractive();
    this.twoplayer_rightarrow.setInteractive();
    this.oneplayer_leftarrow.on('pointerdown', () => this.ChangeShip(-1, 1));
    this.oneplayer_rightarrow.on('pointerdown', () => this.ChangeShip(1, 1));
    this.twoplayer_leftarrow.on('pointerdown', () => this.ChangeShip(-1, 2));
    this.twoplayer_rightarrow.on('pointerdown', () => this.ChangeShip(1, 2));

    this.ship1 = this.add.sprite(175, 420, 'ship_player_1').setScale(2);
    this.ship2 = this.add.sprite(425, 420, 'ship_player_2').setScale(2);

    this.selectedPlayerDataIndex = 0;
    this.playerDataArray = [];
    this.playerDataArray[0] = 0;
    this.playerDataArray[1] = 1;

    this.cameras.main.fadeIn(500);
  }

  update() {}

  startNextScene() {
    var nextSceneData = {
      //Setup information about what ship each player has selected
      playerData: this.playerDataArray
    }
    this.scene.start("SceneGame", nextSceneData);
  }

  OnePlayerSelected() {
    this.startNextScene();
    playerNumber = 1;
  }

  TwoPlayerSelected() {
    this.startNextScene();
    playerNumber = 2;
  }

  ChangeShip(dir, p) {

    if (dir == 1) {
      if (this.selectedPlayerDataIndex < playerShipsData.list.length) {
        this.selectedPlayerDataIndex++;
      }
      if (this.selectedPlayerDataIndex == playerShipsData.list.length) {
        this.selectedPlayerDataIndex = 0;
      }
    } else if (dir == -1) {
      if (this.selectedPlayerDataIndex < playerShipsData.list.length) {
        this.selectedPlayerDataIndex--;
      }
      if (this.selectedPlayerDataIndex < 0) {
        this.selectedPlayerDataIndex = playerShipsData.list.length - 1;
      }
    }

    if (p == 1) {
      this.ship1.destroy();
      this.stats1.destroy();
      if(this.selectedPlayerDataIndex==0){
        this.stats1 = this.add.image(175, 200, 'ship1_stats').setScale(3);
      } else if (this.selectedPlayerDataIndex==1){
        this.stats1 = this.add.image(175, 200, 'ship2_stats').setScale(3);
      } else if (this.selectedPlayerDataIndex==2) {
        this.stats1 = this.add.image(175, 200, 'ship3_stats').setScale(3);
      };
      this.ship1 = this.add.sprite(175, 420, playerShipsData.list[this.selectedPlayerDataIndex].spriteName).setScale(2);
    } else if (p == 2) {
      this.ship2.destroy();
      this.stats2.destroy();
      if(this.selectedPlayerDataIndex==0){
        this.stats2 = this.add.image(425, 200, 'ship1_stats').setScale(3);
      } else if (this.selectedPlayerDataIndex==1){
        this.stats2 = this.add.image(425, 200, 'ship2_stats').setScale(3);
      } else if (this.selectedPlayerDataIndex==2) {
        this.stats2 = this.add.image(425, 200, 'ship3_stats').setScale(3);
      };
      this.ship2 = this.add.sprite(425, 420, playerShipsData.list[this.selectedPlayerDataIndex].spriteName).setScale(2);
    }

    this.playerDataArray[p-1] = this.selectedPlayerDataIndex;
  }

}
