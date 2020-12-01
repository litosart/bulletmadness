class Enemy extends Phaser.GameObjects.Sprite{
  constructor(scene){
    super(scene,Phaser.Math.Between(0, config.width),0,"playerShip1");
    //Adding to scene
    scene.add.existing(this,0);
    //Enabling Physics
    scene.physics.world.enable([this]);

    this.rotation = 3.1415;
  }

  Move(){
    var speed = 150;
    this.body.setVelocityY(speed);

    if(this.position.x)
  }
}
