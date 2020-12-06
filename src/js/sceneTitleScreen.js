class sceneTitleScreen extends Phaser.Scene {
  constructor(){
    super("bootGame");
  }

  preload(){
    this.add.text(200,200,"BULLET MADNESS", {
      font:"25px Arial", fill:"white"
    });
    this.load.image("play_button", "resources/img/buttons/play_button.png");
  }

  create(){
    this.playb = this.add.image(250,500, 'play_button');
    this.playb.setInteractive();
    this.playb.on('pointerdown', () =>  this.scene.start("sceneGame"));
  }

  update(){

  }

}
