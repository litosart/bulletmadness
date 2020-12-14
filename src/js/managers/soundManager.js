class SoundManager {

  constructor(scene) {

    this.mainTheme = undefined;
    this.beamSound = undefined;
    this.explosionSound = undefined;
    this.powerUpSound = undefined;
    this.scene = scene;

    eventSystem.on("PlaySound_Player_Shoot", this.playBeamSound, this);
    eventSystem.on("PlaySound_MainTheme", this.playTheme, this);
    eventSystem.on("PlaySound_EnemyHit", this.playExplosionSound, this);

    this.mainTheme = this.scene.sound.add("maintheme")
    this.beamSound = this.scene.sound.add("beam_sound")
    this.explosionSound = this.scene.sound.add("explosion_sound")
    //this.powerUpSound = scene.sound.add("powerUp_sound")
  }

  playTheme() {
    var themeConfig = {
      volume: 0.05,
      loop: true
    }
    this.mainTheme.play(themeConfig);
  }

  playBeamSound() {
    this.beamSoundConfig = {
      volume: 0.1
    }
    this.beamSound.play(this.beamSoundConfig);
  }

  playExplosionSound() {
    this.explosionSoundConfig = {
      volume: 0.08,
      rate: 1
    }
    this.explosionSound.play(this.explosionSoundConfig);
  }

  playPowerUpSound() {
    // this.powerUpSoundConfig = {
    //     volume:
    // }
    this.powerUpSound.play();
  }

}
