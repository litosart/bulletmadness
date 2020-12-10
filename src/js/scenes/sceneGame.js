class SceneGame extends Phaser.Scene {

  constructor() {
    super("SceneGame");
  }

  create(sceneData) {
    
    //Setup previous Scene Data
    this.sceneData = sceneData;

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
    this.enemyManager.setupSpawner(enemyShipsData.list[0], {
      spawnDelay: 1500,
      loop: true
    });
    this.enemyManager.setupSpawner(enemyShipsData.list[2], {
      spawnDelay: 500,
      loop: true
    });
    this.enemyManager.setupSpawner(enemyShipsData.list[3], {
      spawnDelay: 200,
      loop: true
    });

    //Score Manager Initialization
    this.scoreManager = new ScoreManager(this, this.playerManager.playersArray);

  }

  update() {
    this.playerManager.update();
    this.enemyManager.update();
  }
}
