
class ScenePlayers extends Phaser.Scene {
  constructor() {
    super("ScenePlayers");
  }

  create() {
    this.oneplayer = this.add.image(175, 650, '1p').setScale(4);
    this.twoplayer = this.add.image(425, 650, '2p').setScale(4);
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
    this.oneplayer_leftarrow.on('pointerdown', () => this.ChangeShip(-1, 1));
    this.oneplayer_rightarrow.on('pointerdown', () => this.ChangeShip(1, 1));
    this.twoplayer_leftarrow.on('pointerdown', () => this.ChangeShip(-1, 2));
    this.twoplayer_rightarrow.on('pointerdown', () => this.ChangeShip(1, 2));

    this.ship1 = this.add.sprite(175, 500, 'ship_player_1').setScale(2);
    this.ship2 = this.add.sprite(425, 500, 'ship_player_2').setScale(2);

    this.shipsData = new PlayerShipsData();
    this.i = 0;
  }

  update() {}

  OnePlayerSelected() {
    //eventSystem.emit("selectShip",this.shipsData.list[this.i]);
    this.scene.start("SceneGame");
    playerNumber = 1;
  }

  TwoPlayerSelected() {
    this.scene.start("SceneGame");
    playerNumber = 2;
  }

  ChangeShip(dir, p) {

    if(dir==1){
      if(this.i<this.shipsData.list.length){
        this.i++;
      }
      if(this.i==this.shipsData.list.length){
        this.i=0;
      }
    } else if (dir==-1){
      if(this.i<this.shipsData.list.length){
        this.i--;
      }
      if(this.i<0){
        this.i=this.shipsData.list.length-1;
      }
    }
    eventSystem.emit("selectShip",this.i);
    if(p==1){
      this.ship1.destroy();
      this.ship1 = this.add.sprite(175, 500, this.shipsData.list[this.i].spriteName).setScale(2);
    } else if(p==2){
      this.ship2.destroy();
      this.ship2 = this.add.sprite(425, 500, this.shipsData.list[this.i].spriteName).setScale(2);
    }

    //this.ship1 = this.add.sprite(175, 300, 'ship_enemy_small_1').setScale(2);
    //this.ship1 = playerDataList.list[2]
  }

}
