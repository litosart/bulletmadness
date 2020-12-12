class ShotgunWeapon extends BasicWeapon {
  constructor(beamData) {
    super(beamData);
  }

  shoot() {
    if(!this.shootCooldown){
      //Instantiate Beam
      var beam = new Beam(this.scene, this.player.x, (this.player.y - 10), this.beamData);
      var beam = new Beam(this.scene, this.player.x + 20, (this.player.y - 10), this.beamData);
      var beam = new Beam(this.scene, this.player.x - 20, (this.player.y - 10), this.beamData);

      //Raise Player_Shoot event
      eventSystem.emit("PlaySound_Player_Shoot", this.scene, this.player);

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
