class Enemy extends Phaser.GameObjects.Sprite {

  constructor(scene, enemyData) {

    super(scene, Phaser.Math.Between(0, config.width), 0, "ship1");

    //Setups Enemy Data
    this.enemyData = enemyData;
    this.setTexture(this.enemyData.spriteName);

    //Adding to scene
    scene.add.existing(this);

        this.play("ship1_anim");

    //Enabling Physics
    scene.physics.world.enable([this]);

    //Rotation in Radians
    this.rotation = 3.1415;

    //Sets Start Velocity
    this.body.setVelocityY(this.enemyData.movementSpeed);
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
