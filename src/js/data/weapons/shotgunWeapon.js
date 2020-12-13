class ShotgunWeapon extends BasicWeapon {
  constructor(beamData) {
    super(beamData);
  }

  shoot() {
    if(!this.shootCooldown){
      //Instantiate Beam
      var beam = new Beam(this.scene, this.ship, this.beamData);

      //Raise Player_Shoot event
      eventSystem.emit("PlaySound_Player_Shoot");

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
}
