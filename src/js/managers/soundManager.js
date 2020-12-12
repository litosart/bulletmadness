class SoundManager {

  themes = [];
  i_theme = 0;

  sounds = [];
  i_sound = 0;

  constructor(scene) {

    this.mainTheme = undefined;
    this.beamSound = undefined;
    this.explosionSound = undefined;
    this.powerUpSound = undefined;
    this.scene = scene;

    this.sounds = {};
    this.sounds["Shoot_1"] = 2;

    eventSystem.on("PlaySound_Player_Shoot", this.playBeamSound, this);
    eventSystem.on("PlaySound_MainTheme", this.playTheme, this);
    eventSystem.on("PlaySound_EnemyHit", this.playExplosionSound, this);
  }

  addTheme(theme) {
    this.themes[this.i_theme] = theme;
    this.i_theme++;
  }

  playTheme() {
    var themeConfig = {
      volume: 0.05,
      loop: true
    }
    this.mainTheme = this.scene.sound.add("maintheme").play(themeConfig);
  }

  addSound(sound) {
    this.sounds[this.i_sound] = sound;
    this.i_sound++;
  }

  playBeamSound() {
    this.beamSoundConfig = {
      volume: 0.3
    }
    this.beamSound = this.scene.sound.add("beam_sound").play(this.beamSoundConfig);
  }

  playExplosionSound() {
    this.explosionSoundConfig = {
      volume: 0.5,
      rate: 1.5
    }
    this.explosionSound = this.scene.sound.add("explosion_sound").play(this.explosionSoundConfig);
  }

  playPowerUpSound() {
    // this.powerUpSoundConfig = {
    //     volume:
    // }
    this.powerUpSound = scene.sound.add("powerUp_sound").play();
  }

}
