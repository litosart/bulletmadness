class Player extends Phaser.GameObjects.Sprite {

  //class fields
  movementSpeed = 300;
  inputKeys = undefined;

  constructor(scene) {

    super(scene, 0, 0, "playerShip1");

    //Set default Input Keys
    this.inputKeys = scene.input.keyboard.createCursorKeys();

    //Adding to scene
    scene.add.existing(this);

    //Enabling Physics
    scene.physics.world.enable([this]);

    //Setting collisions with screen bounds
    this.body.setCollideWorldBounds(true);
  }

  //Sets the input that will be used to move the sprite
  setInputOrigin(inputKeys) {
    this.inputKeys = inputKeys;
  }

  //Moves the sprite acording to the input
  move() {

    if (this.inputKeys.left.isDown) {
      this.body.setVelocityX(-this.movementSpeed);
    } else if (this.inputKeys.right.isDown) {
      this.body.setVelocityX(this.movementSpeed);
    } else {
      this.body.setVelocityX(0);
    }

    if (this.inputKeys.up.isDown) {
      this.body.setVelocityY(-this.movementSpeed);
    } else if (this.inputKeys.down.isDown) {
      this.body.setVelocityY(this.movementSpeed);
    } else {
      this.body.setVelocityY(0);
    }
  }

  shoot() {

  }

  update() {
    this.move();
  }
}
