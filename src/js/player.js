class Player extends Phaser.GameObjects.Sprite{
  constructor(scene){
    super(scene,0,0,"playerShip1");

    //Adding to scene
    scene.add.existing(this,0);
    //Enabling Physics
    scene.physics.world.enable([this]);

    this.body.setCollideWorldBounds(true);
  }

  Move(cursorKeys){
    var playerSpeed = 300;

    if(cursorKeys.left.isDown){
      this.body.setVelocityX(-playerSpeed);
    }else if(cursorKeys.right.isDown){
      this.body.setVelocityX(playerSpeed);
    }else {
      this.body.setVelocityX(0);
    }

    if(cursorKeys.up.isDown){
      this.body.setVelocityY(-playerSpeed);
    }else if(cursorKeys.down.isDown){
      this.body.setVelocityY(playerSpeed);
    }else {
      this.body.setVelocityY(0);
    }
  }
}
