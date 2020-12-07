class SceneTitleScreen extends Phaser.Scene {
  constructor(){
    super("SceneTitleScreen");
  }
  
  create(){
    this.add.image(300,200, 'logo').setScale(2);
    this.playb = this.add.image(300,500, 'play_button').setScale(4);
    this.playb.setInteractive();
    this.playb.on('pointerdown', () =>  this.scene.start("ScenePlayers"));
  }

  update(){
  }

}
