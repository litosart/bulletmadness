class PowerUpChangeWeapon{

  constructor(weaponID,duration){
    this.weaponID = weaponID;
    this.duration = duration;
  }

  execute(scene,player){
    this.previousWeapon = player.weapon;
    player.weapon = WeaponCreator.getWeapon(this.weaponID,player.playerData.bulletData);
    player.weapon.linkToShip(scene,player,player.team);
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
    this.player.weapon = this.previousWeapon;
  }
}
