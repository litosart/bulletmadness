class Player extends Phaser.GameObjects.Sprite{

  //class fields
  movementSpeed = 300;
  inputKeys = undefined;

  constructor(scene){

    super(scene,0,0,"playerShip2").setScale(2).play('ship_motion');

    //Set default Input Keys
    this.inputKeys = scene.input.keyboard.createCursorKeys();

    //Adding to scene
    scene.add.existing(this);

    //Enabling Physics
    scene.physics.world.enable([this]);

    //Setting collisions with screen bounds
    this.body.setCollideWorldBounds(true);

  }
  this.anims.create({
    key: 'ship_motion',
    frames: this.anims.generateFrameNumbers('playerShip2', { start: 0, end: 2 }),
    frameRate: 10,
    repeat: -1
  });
  this.add.sprite(300,200, 'playerShip2').setScale(2).play('ship_motion');
create(){

}


  //Sets the input that will be used to move the sprite
  setInputOrigin(inputKeys){
    this.inputKeys = inputKeys;
  }

  //Moves the sprite acording to the input
  move(){

    if(this.inputKeys.left.isDown){
      this.body.setVelocityX(-this.movementSpeed);
    }else if(this.inputKeys.right.isDown){
      this.body.setVelocityX(this.movementSpeed);
    }else {
      this.body.setVelocityX(0);
    }

    if(this.inputKeys.up.isDown){
      this.body.setVelocityY(-this.movementSpeed);
    }else if(this.inputKeys.down.isDown){
      this.body.setVelocityY(this.movementSpeed);
    }else {
      this.body.setVelocityY(0);
    }
  }

  shoot(){

  }


}
