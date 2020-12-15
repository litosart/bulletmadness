class SceneCredits extends Phaser.Scene {
  constructor() {
    super("SceneCredits");
  }

  create() {

    this.gobackb = this.add.image(300, 600, 'goback_button').setScale(4);
    this.gobackb.setInteractive();
    this.gobackb.on('pointerdown', () => this.scene.start("SceneTitleScreen"));

    this.creditsText = this.add.bitmapText(80, 120, "font_default", "Carlos Rodriguez Sanchez-Roldan").setFontSize(40);
    this.creditsText = this.add.bitmapText(80, 170, "font_default", "Jose Fernando Medina Talavera").setFontSize(40);
    this.creditsText = this.add.bitmapText(80, 220, "font_default", "Antonio Arian Silaghi").setFontSize(40);
    this.creditsText = this.add.bitmapText(80, 270, "font_default", "Norman Peter Stankewitz").setFontSize(40);
    this.creditsText = this.add.bitmapText(80, 320, "font_default", "Music by: David Aguilar Guerra").setFontSize(40);

    //Scene Fade In
    this.cameras.main.fadeIn(500);
  }

  update() {}

}
