class Beam extends Phaser.GameObjects.Sprite {

    constructor(scene, playerX, playerY){

        super(scene, playerX, playerY, "beam");

        this.play("beam_anim");
        this.setScale(1.5);

        scene.add.existing(this);
        scene.physics.world.enableBody(this);
        this.body.velocity.y = -250;

        //Adding to beam group
        scene.projectiles1.add(this);
    }

    update(){
        if (this.y < 20){
            this.destroy();
        }
    }
}