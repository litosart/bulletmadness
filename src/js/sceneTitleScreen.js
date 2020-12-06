class sceneTitleScreen extends Phaser.scene{
  constructor(){
    super("bootGame");
  }

  preload(){
    this.add.text(20,20,"BULLET MADNESS", {
      font:"25px Arial", fill:"white"
    });
    this.load.image("play_button", "resources/img/buttons/play_button.png");
  }

  create(){
    this.playb = this.add.image(250,500, 'play_button');
    play.setInteractive();
  }

}
