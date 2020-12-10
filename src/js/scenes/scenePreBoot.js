class ScenePreBoot extends Phaser.Scene {
  constructor() {
    super("ScenePreBoot");
  }

  preload() {
    this.load.bitmapFont("font_default", "resources/img/font/font.png", "resources/img/font/font.fnt");
  }

  create() {
    this.scene.start("SceneBoot");
  }
}
