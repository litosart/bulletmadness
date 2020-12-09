class SceneGame extends Phaser.Scene {

  constructor() {
    super("SceneGame");
  }

  create() {
    //Level Enviorement Initialization
    this.enviorementManager = new EnviorementManager(this, "background");

    //Input Initialization
    this.inputManager = new InputManager(this);

    //Physics Initialization
    this.physicsManager = new PhysicsManager(this);

    //Player Ships Initialization
    this.playerManager = new PlayerManager(this, this.inputManager);

    //Enemy Manager Initialization
    this.enemyManager = new EnemyManager(this);

    //Score Manager Initialization
    this.scoreManager = new ScoreManager(this, this.playerManager.playersArray);

  }

  update() {
    this.playerManager.update();
    this.enemyManager.update();
  }
}
