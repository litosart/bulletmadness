class BasicWeapon {
  constructor(beamData) {
    this.shootingSpeed = 2;
    this.shootCooldown = false;
    this.beamData = beamData;
  }

  linkToShip(scene,ship,team){
    this.scene = scene;
    this.ship = ship;
    this.team = team;
  }

  shoot() {
    if(!this.shootCooldown){
      //Instantiate Beam
      var beam = new Beam(this.scene, this.ship, this.beamData,this.team);

      //Raise Player_Shoot event
      eventSystem.emit("PlaySound_Player_Shoot");
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
