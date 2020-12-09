class SceneTitleScreen extends Phaser.Scene {
  constructor(){
    super("SceneTitleScreen");
  }

  create(){
    this.anims.create({
      key: 'logo_motion',
      frames: this.anims.generateFrameNumbers('logoanim', { start: 0, end: 11 }),
      frameRate: 20,
      repeat: -1
    });
    this.add.sprite(300,200, 'logoanim').setScale(2).play('logo_motion');
    this.playb = this.add.image(300,500, 'play_button').setScale(4);
    this.playb.setInteractive();
    this.playb.on('pointerdown', () =>  this.scene.start("ScenePlayers"));


  }

  update(){

  }

}
