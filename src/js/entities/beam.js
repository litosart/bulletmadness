class Beam extends Phaser.GameObjects.Sprite {

  constructor(scene, playerX, playerY, beamData) {

    super(scene, playerX, playerY, "proyectile_beam_1");

    this.beamData = beamData;

    this.setTexture(this.beamData.spriteName);
    this.play(this.beamData.idleAnimName);

    this.setScale(1.5);

    scene.add.existing(this);

    scene.physics.world.enableBody(this);
    scene.physicsManager.beamsPhysicsGroup.add(this);
    
    this.body.velocity.y = beamData.velocity;

    //Adding to beam group
    //scene.projectiles1.add(this);
  }

  update() {
    if (this.y < 20) {
      this.destroy();
    }
  }
}
