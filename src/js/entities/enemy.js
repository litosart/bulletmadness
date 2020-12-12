class Enemy extends Phaser.GameObjects.Sprite {

  constructor(scene, enemyData) {

    super(scene, Phaser.Math.Between(0, config.width), 0, "ship1");


    scene.physics.world.wrap(this);
    this.setScale(2);

    //Setups Enemy Data
    this.enemyData = enemyData;
    this.setTexture(this.enemyData.spriteName);

    //Set Idle Animation;
    this.play(this.enemyData.idleAnimName);

    //Adding to scene
    scene.add.existing(this);

    //Enabling Physics
    scene.physics.world.enable([this]);
    scene.physicsManager.enemyPhysicsGroup.add(this);

    //Rotation in Radians
    this.rotation = 3.1415;

    //Sets Start Velocity
    this.body.setVelocityY(this.enemyData.movementSpeed);

    //Weapon
    this.weapon = enemyData.weapon;

    this.weapon.linkToPlayer(scene,this);
    this.setupShootingLoop();
  }

  //Removes player if out of bounds
  checkOutOfBounds() {
    if (this.y > config.height) {
      this.destroy();
    }
  }

  update() {
    this.checkOutOfBounds();
  }

  spawnBeam() {
    this.weapon.shoot();
  }

  setupShootingLoop() {
    this.shootingLoopConfig = {
      delay: 300,
      loop: true,
      callback: this.spawnBeam,
      callbackScope: this
    }
    this.scene.timer = this.scene.time.addEvent(this.shootingLoopConfig);
  }
}
