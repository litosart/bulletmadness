class Ship extends Phaser.GameObjects.Sprite {

  //class fields
  movementSpeed = 300;
  shootCooldown = false;

  constructor(scene, ship_img, ship_anim) {

    super(scene, 0, 0, ship_img);

    this.scene = scene;
    this.img = ship_img;


    //Adding to scene
    scene.add.existing(this);

    this.play(ship_anim);


  }

  play_animation() {
    this.play(ship_anim);
  }
  print_sprite() {
    this.add.sprite(175, 300, ship_img).setScale(2);
  }
  delete(){
    this.destroy();
  }

}
