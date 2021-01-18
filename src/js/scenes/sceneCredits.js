class SceneCredits extends Phaser.Scene {
  constructor() {
    super("SceneCredits");
  }

  create() {

    this.gobackb = this.add.image(300, 600, 'goback_button').setScale(4);
    this.gobackb.setInteractive();
    this.gobackb.on('pointerdown', () => this.scene.start("SceneTitleScreen"));

    // this.creditsText = this.add.bitmapText(80, 120, "font_default", "Carlos Rodríguez Sanchez-Roldán").setFontSize(40);
    // this.creditsText = this.add.bitmapText(80, 170, "font_default", "José Fernando Medina Talavera").setFontSize(40);
    // this.creditsText = this.add.bitmapText(80, 220, "font_default", "Antonio Arian Silaghi").setFontSize(40);
    // this.creditsText = this.add.bitmapText(80, 270, "font_default", "Norman Peter Stankewitz").setFontSize(40);
    // this.creditsText = this.add.bitmapText(80, 320, "font_default", "Music by: David Aguilar Guerra").setFontSize(40);

    this.creditsText = this.add.text(80, 120, 'Carlos Rodríguez Sanchez-Roldán', {color:"#C70039"}).setFontSize(25);
    this.creditsText = this.add.text(80, 170, 'José Fernando Medina Talavera', {color:"#C70039"}).setFontSize(25);
    this.creditsText = this.add.text(80, 220, 'Antonio Arian Silaghi', {color:"#C70039"}).setFontSize(25);
    this.creditsText = this.add.text(80, 270, 'Norman Peter Stankewitz', {color:"#C70039"}).setFontSize(25);
    this.creditsText = this.add.text(80, 320, 'Music by: David Aguilar Guerra', {color:"#C70039"}).setFontSize(25);

    //Scene Fade In
    this.cameras.main.fadeIn(500);
  }

  update() {}

}
