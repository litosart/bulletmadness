var  mouse = 0;

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
    this.oneplayer.on('pointerdown', () => mouse = 1);
    this.twoplayer.on('pointerdown', () => mouse = 2);
  }

  update(){

    if(mouse==1){
      this.scene.start("SceneGame")
    } else if(mouse==2) {
      this.scene.start("SceneGame")
    }

  }

}
