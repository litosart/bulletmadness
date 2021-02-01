class ShotgunWeapon extends BasicWeapon {
  constructor(beamData) {
    super(beamData);
  }

  shoot() {
    if (!this.shootCooldown) {
      //Instantiate Beam
      var FIXTHIS = {
        x: this.ship.x + 10,
        y: this.ship.y,
        rotation: this.ship.rotation - Math.PI/40
      }
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

      var beam = new Beam(this.scene, FIXTHIS, this.beamData,this.team);
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
      
      var FIXTHIS = {
        x: this.ship.x - 10,
        y: this.ship.y,
        rotation: this.ship.rotation + Math.PI/40
      }
      var beam = new Beam(this.scene, FIXTHIS, this.beamData,this.team);
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
