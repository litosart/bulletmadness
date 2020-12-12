class PowerUp extends Phaser.GameObjects.Sprite {

  scene;
  powerupData;

  constructor(scene, powerupData) {
    super(scene, Phaser.Math.Between(0, config.width), Phaser.Math.Between(0, config.height), "powerup_movement_speed_boost");
    this.setScale(1.5);
    this.scene = scene;
    this.powerupData = powerupData;

    //Adding to scene
    scene.add.existing(this);

    //Enabling Physics
    scene.physics.world.enable([this]);
    scene.physicsManager.powerupPhysicsGroup.add(this);
  }
}
