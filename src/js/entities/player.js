class Player extends Phaser.GameObjects.Sprite {

  constructor(scene, playerData) {

    super(scene, 0, 0, "ship_player_1");
    this.scene = scene;
    this.team = 0;
    this.enemiesKilled = 0;

    //Player Variables Setup
    this.playerData = playerData;
    this.lives = this.playerData.lives;
    this.alive = true;
    this.movementSpeed = this.playerData.movementSpeed;

    this.weapon = WeaponCreator.getWeapon(this.playerData.weaponID,this.playerData.bulletData);
    this.weapon.linkToShip(this.scene,this,this.team);

    //Set default Input Keys
    this.inputKeys = scene.input.keyboard.createCursorKeys();

    //Setting up Sprite
    this.setScale(1.5);
    this.setTexture(this.playerData.spriteName);
    this.play(this.playerData.idleAnimName);

    //Adding to scene and enabling Physics
    scene.add.existing(this);
    scene.physics.world.enable([this]);
    scene.physicsManager.playerPhysicsGroup.add(this);
    this.body.setCollideWorldBounds(true);
  }

  recieveDamage() {
    this.lives--;
    if (this.lives == 0) {
      this.playerDeath();
    }
  }

  playerDeath() {
    this.x = config.height + 200;
    this.alive = false;
    this.body.enable = false;
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
    if (this.inputKeys.shoot.isDown) {
      this.weapon.shoot();
    }
  }

  update() {
    this.move();
    this.shoot();
  }
}
