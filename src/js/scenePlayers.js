class ScenePlayers extends Phaser.Scene {
  constructor(){
    super("ScenePlayers");
  }

  preload(){
    this.load.image("1p", "resources/img/buttons/1.png");
    this.load.image("2p", "resources/img/buttons/2.png");
  }

  create(){
    this.oneplayer = this.add.image(250,500, '1p').setScale(4);
    this.twoplayer = this.add.image(350,500, '2p').setScale(4);
    this.oneplayer.setInteractive();
    this.twoplayer.setInteractive();
    this.oneplayer.on('pointerdown', () =>  this.scene.start("SceneGame"));
    this.twoplayer.on('pointerdown', () =>  this.scene.start("SceneGame"));
  }

  update(){
  }

}
