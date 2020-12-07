class Enemy extends Phaser.GameObjects.Sprite {

  speed = 150;

  constructor(scene) {
    super(scene, Phaser.Math.Between(0, config.width), 0, "playerShip1");

    //Adding to scene
    scene.add.existing(this);

    //Enabling Physics
    scene.physics.world.enable([this]);

    //Rotation in Radians
    this.rotation = 3.1415;

    this.move();
  }

  move() {
    this.body.setVelocityY(this.speed);
  }

  //Removes player if out of bounds
  checkOutOfBounds() {
    if (this.y > config.height - 200) {
      this.destroy();
    }
  }

  update() {
    this.checkOutOfBounds();
  }
}
