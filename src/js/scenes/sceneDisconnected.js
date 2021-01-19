class SceneDisconnected extends Phaser.Scene {
  constructor() {
    super("SceneDisconnected");
  }

  create() {
    this.add.image(config.width/4, config.height/8, 'disconnected_warning').setScale(2);
  }

  update() {}

}
