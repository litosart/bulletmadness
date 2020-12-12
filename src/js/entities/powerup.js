class PowerUp extends Phaser.GameObjects.Sprite {

  constructor(scene, powerUpData) {
    super(scene, Phaser.Math.Between(0, config.width), Phaser.Math.Between(0, config.height), "powerup_movement_speed_boost");
    this.scene = scene;
    this.powerUpData = powerUpData;

    this.setTexture(this.powerUpData.spriteName);
    
    scene.physics.world.wrap(this);
    this.setScale(2);

    //Adding to scene
    scene.add.existing(this);

    //Enabling Physics
    scene.physics.world.enable([this]);
    scene.physicsManager.powerupPhysicsGroup.add(this);

    this.on("PowerUp_Hit",this.powerUpHit,this);
    this.on('destroy' , this.onDestroy);
  }

  powerUpHit(player){
    this.powerUpData.behavior.execute(this.scene,player);
    this.destroy();
  }

  onDestroy(){
    this.off("PowerUp_Hit",this.powerUpHit,this);
  }
}
