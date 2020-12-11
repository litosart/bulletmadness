class Player extends Phaser.GameObjects.Sprite {

  //class fields
  inputKeys = undefined;
  shootCooldown = false;

  constructor(scene, playerData) {

    super(scene, 0, 0, "ship_player_1");
    this.scene = scene;

    //Setups Player Data
    this.playerData = playerData;
    this.setTexture(this.playerData.spriteName);

    //Set Idle Animation;
    this.play(this.playerData.idleAnimName);

    //Set default Input Keys
    this.inputKeys = scene.input.keyboard.createCursorKeys();

    //Movement speed
    this.movementSpeed = this.playerData.movementSpeed;

    //Adding to scene
    scene.add.existing(this);

    //Enabling Physics
    scene.physics.world.enable([this]);
    scene.physicsManager.playerPhysicsGroup.add(this);

    //Setting collisions with screen bounds
    this.body.setCollideWorldBounds(true);

    //Set player lives
    this.lives = this.playerData.lives;
    this.alive = true;
  }

  recieveDamage() {
    this.lives--;
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

  removePlayer() {
    this.kill();
  }

  resetCooldown() {
    this.shootCooldown = false;
  }

  shoot() {
    if (this.inputKeys.shoot.isDown && !this.shootCooldown) {
      this.beam = new Beam(this.scene, this.x, (this.y - 10));
      this.shootCooldown = true;

      var timerEventConfig = {
        delay: 100,
        loop: false,
        callback: this.resetCooldown,
        callbackScope: this
      }
      this.scene.timer = this.scene.time.addEvent(timerEventConfig);

    }
  }

  update() {
    this.move();
    this.shoot();
  }
}
