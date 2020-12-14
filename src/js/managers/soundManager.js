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
    eventSystem.on("PlaySound_PowerUp", this.playPowerUpSound, this);
    eventSystem.on("PlaySound_PlayerHit", this.playPlayerHitSound, this);

    this.mainTheme = this.scene.sound.add("maintheme")
    this.beamSound = this.scene.sound.add("beam_sound")
    this.explosionSound = this.scene.sound.add("explosion_sound")
    this.powerUpSound = scene.sound.add("powerUp_sound")
    this.playerHitSound = scene.sound.add("playerHit_sound")
  }

  playTheme() {
    var themeConfig = {
      volume: 0.05,
      loop: true
    }
    this.mainTheme.play(themeConfig);
  }

  playBeamSound() {
    var beamSoundConfig = {
      volume: 0.1
    }
    this.beamSound.play(this.beamSoundConfig);
  }

  playExplosionSound() {
    var explosionSoundConfig = {
      volume: 0.08,
      rate: 1
    }
    this.explosionSound.play(this.explosionSoundConfig);
  }

  playPowerUpSound() {
    var soundConfig = {
      volume: 0.5,
    }
    this.powerUpSound.play(soundConfig);
  }

  playPlayerHitSound() {
    var soundConfig = {
      volume: 0.5,
    }
    this.playerHitSound.play(soundConfig);
  }

}
