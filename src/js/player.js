class Player extends Phaser.GameObjects.Sprite{

  //class fields
  movementSpeed = 300;
  inputKeys = undefined;
  shootKey = undefined;
  beam = undefined;
  //beamsArray = [];
  

  constructor(scene){

    super(scene,0,0,"playerShip1");

    this.scene = scene;

    //Adding to scene
    scene.add.existing(this);

    //Enabling Physics
    scene.physics.world.enable([this]);

    scene.playerGroup.add(this);

    //Setting collisions with screen bounds
    this.body.setCollideWorldBounds(true);

    this.lives = 3;

    this.alive = true;
  }

  //Sets the input that will be used to move the sprite
  setInputOrigin(inputKeys){
    this.inputKeys = inputKeys;
  }

  //Sets the key that will allow the player to shoot
  setShootKey(shootKey){
    this.shootKey = shootKey;
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

  shoot(scene){
    //var i = 0;
    if (Phaser.Input.Keyboard.JustDown(this.shootKey)){ 
      this.beam = new Beam(scene, this.x, (this.y - 10));
      //this.beamsArray.push(this.beam);
      //i++;
    }
    for (var i = 0; i < scene.projectiles1.getChildren().length; i++){
      this.beam = scene.projectiles1.getChildren()[i];
      this.beam.update();
      scene.projectiles1.add(this.beam);
    }
  }

  update(scene){
      this.move();
      this.shoot(scene)
  }

  collideEnemy()
  {
    this.lives --;
  }

  playerDie()
  {
      this.x = config.height +200;
      this.alive = false;
      this.body.enable = false;
  }
}
