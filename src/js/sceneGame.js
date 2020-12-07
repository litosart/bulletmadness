class SceneGame extends Phaser.Scene {

  constructor() {
    super("SceneGame");
  }

  create() {

    this.background = this.add.image(0, 0, "background").setScale(2);
    this.background.setOrigin(0, 0);

    //Input
    this.inputManager = new InputManager(this);

    //Player Ships Initialization
    this.playerManager = new PlayerManager(this, this.inputManager);

    //Enemy Manager Initialization
    this.enemyManager = new EnemyManager(this);
  }

  update() {
    //this.movePlayers();
    this.playerManager.update();
    this.enemyManager.update();
  }
}
