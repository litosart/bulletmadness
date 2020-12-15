class Beam extends Phaser.GameObjects.Sprite {

  constructor(scene, ship, beamData,team) {

    super(scene, ship.x, ship.y, "proyectile_beam_1");

    this.team = team;
    this.beamData = beamData;
    this.damage = 10;

    //Setup Sprite
    this.setTexture(this.beamData.spriteName);
    this.play(this.beamData.idleAnimName);
    this.setScale(2.5);

    //Adding to scene and enabling Physics
    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    scene.physicsManager.beamsPhysicsGroup.add(this);

    //Setting up velocity and rotation
    this.body.velocity.x = beamData.velocity * Math.sin(ship.rotation);
    this.body.velocity.y = beamData.velocity * -Math.cos(ship.rotation);
    this.rotation = this.body.velocity.angle() + Math.PI/2;
  }

  update() {
    if (this.y < 20 || this.y > config.height) {
      this.destroy();
    }
  }
}
