class Enemy extends Phaser.GameObjects.Sprite {

  constructor(scene) {
    super(scene, Phaser.Math.Between(0, config.width), 0, "playerShip1");

    //Adding to scene
    scene.add.existing(this);

    //Enabling Physics
    scene.physics.world.enable([this]);

    //Rotation in Radians
    this.rotation = 3.1415;
  }

  move() {
    var speed = 150;
    this.body.setVelocityY(speed);
  }

  //Removes player if out of bounds
  checkOutOfBounds() {
    if (this.y > config.height - 200) {
      this.destroy();
    }
  }

  create() {
    this.move();
  }

  update() {
    this.checkOutOfBounds();
  }
}
