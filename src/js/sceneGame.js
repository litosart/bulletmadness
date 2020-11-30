
class sceneGame extends Phaser.Scene {
  constructor(){
    super("bootGame");
  }

  preload(){
    this.load.image("background", "resources/img/backgrounds/Background_ClearSky.png");
    this.load.image("playerShip1", "resources/img/sprites/PlayerShip1.png");
  }

  create() {
    this.background = this.add.image(0,0,"background");
    this.background.setOrigin(0,0);


    //Ships Initialization
    //this.shipPhysicsGroup = this.physics.add.group();
    this.shipPlayer1Physics = this.physics.add.sprite(16,16,"playerShip1");
    //this.shipPhysicsGroup.add(shipPlayer1Physics);

    this.shipPlayer1Physics.setPosition(config.width/2,config.height/2);
    this.shipPlayer1Physics.setCollideWorldBounds(true);

    //Input Initialization
    this.cursorKeys = this.input.keyboard.createCursorKeys();
  }

  update(){
    this.MovePlayer();
  }

  MovePlayer(){
    var playerSpeed = 300;

    if(this.cursorKeys.left.isDown){
      this.shipPlayer1Physics.setVelocityX(-playerSpeed);
    }else if(this.cursorKeys.right.isDown){
      this.shipPlayer1Physics.setVelocityX(playerSpeed);
    }else {
      this.shipPlayer1Physics.setVelocityX(0);
    }

    if(this.cursorKeys.up.isDown){
      this.shipPlayer1Physics.setVelocityY(-playerSpeed);
    }else if(this.cursorKeys.down.isDown){
      this.shipPlayer1Physics.setVelocityY(playerSpeed);
    }else {
      this.shipPlayer1Physics.setVelocityY(0);
    }
  }

}
