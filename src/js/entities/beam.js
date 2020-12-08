class Beam extends Phaser.GameObjects.Sprite {

  constructor(scene, playerX, playerY,enemyPhysicsGroup) {

    super(scene, playerX, playerY, "proyectile_beam_1");

    this.play("proyectile_beam_1_anim");

    this.setScale(1.5);

    scene.add.existing(this);

    scene.physics.world.enableBody(this);
    scene.physicsManager.beamsPhysicsGroup.add(this);

    this.body.velocity.y = -250;

    //Adding to beam group
    //scene.projectiles1.add(this);
  }

  update() {
    if (this.y < 20) {
      this.destroy();
    }
  }
}
