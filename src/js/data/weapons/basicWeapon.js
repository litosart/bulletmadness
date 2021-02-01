class BasicWeapon {
  constructor(beamData) {
    this.shootingSpeed = 6;
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

      if (this.team == 0){
        this.ship.beamWebSocket.send(JSON.stringify({
          speedX: beam.body.velocity.x,
          speedY: beam.body.velocity.y,
          beamRotation: beam.rotation,
          ship: this.ship,
          beamData: this.beamData,
          team: this.team
        }));
      }

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
