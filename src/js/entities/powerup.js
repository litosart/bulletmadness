class PowerUp extends Phaser.GameObjects.Sprite {

  constructor(scene, powerUpData) {

    super(scene, Phaser.Math.Between(0, config.width), Phaser.Math.Between(0, config.height), "powerup_movement_speed_boost");

    this.scene = scene;
    this.powerUpData = powerUpData;

    //Setting up Sprite
    this.setTexture(this.powerUpData.spriteName);
    this.setScale(2);

    //Adding to scene and enabling Physics
    scene.add.existing(this);
    scene.physics.world.enable([this]);
    scene.physicsManager.powerupPhysicsGroup.add(this);
    scene.physics.world.wrap(this);

    //Subscribing to events
    this.on("PowerUp_Hit",this.powerUpHit,this);
    this.on('destroy' , this.onDestroy);

    this.startDestructionTimer();
  }

  powerUpHit(player){
    this.powerUpData.behavior.execute(this.scene,player);
    this.destroy();
  }

  startDestructionTimer(){
    this.spawnerLoopConfig = {
      delay: 3000,
      loop: false,
      callback: this.destroy,
      callbackScope: this
    }
    this.scene.timer = this.scene.time.addEvent(this.spawnerLoopConfig);
  }

  onDestroy(){
    this.off("PowerUp_Hit",this.powerUpHit,this);
  }
}
