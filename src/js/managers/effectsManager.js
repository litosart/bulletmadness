class EffectsManager {

  constructor(scene) {
    this.scene = scene;

    eventSystem.on("PlayEffect_Explosion",this.addExplosionEffect,this);
  }

  addExplosionEffect(position) {
    var effect = this.scene.add.sprite(position.x, position.y, "explosion_1");
    effect.play("explosion_1_anim");
    effect.on("animationcomplete",effect.destroy,effect);
  }

}
