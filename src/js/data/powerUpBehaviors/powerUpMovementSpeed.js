class PowerUpMovementSpeed{

  constructor(boostAmount,duration){
    this.boostAmount = boostAmount;
    this.duration = duration;
  }

  execute(scene,player){
    player.movementSpeed += this.boostAmount;
    this.player = player;
    this.revertTimerConfig = {
      delay: this.duration,
      loop: false,
      callback: this.revert,
      callbackScope: this
    }
    scene.timer = scene.time.addEvent(this.revertTimerConfig);
  }

  revert(){
    this.player.movementSpeed -= this.boostAmount;
  }
}
