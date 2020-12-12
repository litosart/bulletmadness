class BasicWeapon {
  constructor(beamData) {
    this.shootingSpeed = 2;
    this.shootCooldown = false;
    this.beamData = beamData;
  }

  linkToPlayer(scene,player){
    this.scene = scene;
    this.player = player;
  }

  shoot() {
    if(!this.shootCooldown){
      //Instantiate Beam
      var beam = new Beam(this.scene, this.player.x, (this.player.y - 10), this.beamData);

      //Raise Player_Shoot event
      eventSystem.emit("PlaySound_Player_Shoot", this.scene, this.player);
      //Setup Shoot Cooldown Timer
      this.startCooldownTimer();
    }
  }

  startCooldownTimer(){
    this.shootCooldown = true;
    var timerEventConfig = {
      delay: 1 / this.shootingSpeed * 1000,
      loop: false,
      callback: this.resetCooldown,
      callbackScope: this
    }
    this.scene.timer = this.scene.time.addEvent(timerEventConfig);
  }

  resetCooldown() {
    this.shootCooldown = false;
  }
}
