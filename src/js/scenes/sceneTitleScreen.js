class SceneTitleScreen extends Phaser.Scene {
  constructor() {
    super("SceneTitleScreen");
  }

  create() {

    this.add.sprite(300, 200, 'game_logo').setScale(2).play('game_logo_anim');
    this.playb = this.add.image(300, 480, 'play_button').setScale(4);
    this.playb.setInteractive();
    this.playb.on('pointerdown', () => this.scene.start("SceneStory1"));

    this.creditsb = this.add.image(300, 580, 'credits_button').setScale(4);
    this.creditsb.setInteractive();
    this.creditsb.on('pointerdown', () => this.scene.start("SceneCredits"));

    this.exitb = this.add.image(300, 680, 'credits_button').setScale(4);
    this.exitb.setInteractive();
    this.exitb.on('pointerdown', () => DisconnectClient());

    //Scene Fade In
    this.cameras.main.fadeIn(500);
  }

  update() {}

}
