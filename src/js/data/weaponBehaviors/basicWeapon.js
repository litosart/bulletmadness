class BasicWeapon {
  constructor() {
    this.shootingSpeed
  }

  shoot(scene,player) {
    this.scene = scene;
    //Instantiate Beam
    this.beam = new Beam(this.scene, player.x, (player.y - 10));

    //Raise Player_Shoot event
    eventSystem.emit("PlaySound_Player_Shoot", this.scene, player);

    //Setup Shoot Cooldown Timer
    this.shootCooldown = true;
    var timerEventConfig = {
      delay: 1 / this.shootingSpeed * 1000,
      loop: false,
      callback: this.resetCooldown,
      callbackScope: this
    }
    this.scene.timer = this.scene.time.addEvent(timerEventConfig);
  }
}
