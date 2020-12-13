class Enemy extends Phaser.GameObjects.Sprite {

  constructor(scene, enemyData) {

    super(scene, Phaser.Math.Between(0, config.width), 0, "ship1");
    this.scene = scene;
    this.team = 1;

    //Setups Enemy Data
    this.enemyData = enemyData;
    this.movementSpeed = this.enemyData.movementSpeed;
    this.health = this.enemyData.startingHealth;
    this.points = enemyData.points;

    //Setup Sprite
    this.setTexture(this.enemyData.spriteName);
    this.play(this.enemyData.idleAnimName);
    this.setScale(2);
    this.angle = 180;

    //Setup Weapon
    this.weapon = WeaponCreator.getWeapon(enemyData.weaponID,enemyData.bulletData);
    this.weapon.linkToShip(scene,this,this.team);
    this.setupShootingLoop();

    //Adding to scene and enabling Physics
    scene.add.existing(this);
    scene.physics.world.enable([this]);
    scene.physicsManager.enemyPhysicsGroup.add(this);
    scene.physics.world.wrap(this);

    this.body.setVelocityY(this.movementSpeed);
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

  shoot() {
    this.weapon.shoot();
  }

  setupShootingLoop() {
    this.shootingLoopConfig = {
      delay: 1000,
      loop: true,
      callback: this.shoot,
      callbackScope: this
    }
    this.scene.timer = this.scene.time.addEvent(this.shootingLoopConfig);
  }
}
