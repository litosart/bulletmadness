class SoundManager {

    themes = [];
    i_theme = 0;

    sounds = [];
    i_sound = 0;

    constructor(){

        this.mainTheme = undefined;
        this.beamSound = undefined;
        this.explosionSound = undefined;
        this.powerUpSound = undefined;

        eventSystem.on("Player_Shoot",this.playBeamSound);
        eventSystem.on("Play_MainTheme",this.playTheme);
        eventSystem.on("Enemy_Hit",this.playExplosionSound);
    }

    addTheme(theme){
        this.themes[this.i_theme] = theme;
        this.i_theme++;
    }

    playTheme(scene){
        var themeConfig = {
            loop: true
        }
        this.mainTheme = scene.sound.add("maintheme").play(themeConfig);
    }

    addSound(sound){
        this.sounds[this.i_sound] = sound;
        this.i_sound++;
    }

    playBeamSound(scene){
        this.beamSoundConfig = {
            volume: 0.6
        }
        this.beamSound = scene.sound.add("beam_sound").play(this.beamSoundConfig);
    }

    playExplosionSound(scene){
        this.explosionSoundConfig = {
            volume: 0.7,
            rate: 1.5
        }
        this.explosionSound = scene.scene.sound.add("explosion_sound").play(this.explosionSoundConfig);
    }

    playPowerUpSound(){
        // this.powerUpSoundConfig = {
        //     volume:
        // }
        this.powerUpSound = scene.sound.add("powerUp_sound").play();
    }

}
