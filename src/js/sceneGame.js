
class sceneGame extends Phaser.Scene {
  constructor(){
    super("bootGame");
  }

  preload(){
    this.add.text(20,20,"Loading Game...", {
      font:"25px Arial", fill:"white"
    });
    this.load.image("background", "resources/img/backgrounds/Background_ClearSky.png");
    this.load.image("playerShip1", "resources/img/sprites/PlayerShip1.png");
  }

  create() {
    this.background = this.add.image(0,0,"background");
    this.background.setOrigin(0,0);

    this.player1 = this.add.image(config.width/2,config.height/2,"playerShip1");
    //(this.player1.setCollideWorldBounds(true);


  }

  update() {
    this.cursors = this.input.keyboard.createCursorKeys();

    if (this.cursors.left.isDown) {
      this.player1.x -= 3;
    } else if (this.cursors.right.isDown) {
      this.player1.x += 3;
    } else if (this.cursors.up.isDown) {
      this.player1.y -= 3;
    } else if (this.cursors.down.isDown) {
      this.player1.y += 3;
    }

  }
}
