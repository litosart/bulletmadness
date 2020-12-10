class SceneGame extends Phaser.Scene {

  constructor() {
    super("SceneGame");
  }

  create(sceneData) {

    //Setup previous Scene Data
    this.sceneData = sceneData;

    //Level Enviorement Initialization
    //this.enviorementManager = new EnviorementManager(this, "background");
    this.bg_1 = this.add.tileSprite(0, 0, game.config.width, game.config.height, "background_2");
    this.bg_1.setOrigin(0,0);
    this.bg_1.setScrollFactor(0);

    //Input Initialization
    this.inputManager = new InputManager(this);

    //Physics Initialization
    this.physicsManager = new PhysicsManager(this);

    //Player Ships Initialization
    this.playerManager = new PlayerManager(this, this.inputManager);

    //Enemy Manager Initialization
    this.enemyManager = new EnemyManager(this);

    var spawnerData = new SpawnerData();
    spawnerData.enemyData = enemyShipsData.list[0];
    spawnerData.spawnDelay = 1500;
    spawnerData.loop = true;
    this.enemyManager.setupSpawner(spawnerData);

    var spawnerData = new SpawnerData();
    spawnerData.enemyData = enemyShipsData.list[2];
    spawnerData.spawnDelay = 500;
    spawnerData.loop = true;
    this.enemyManager.setupSpawner(spawnerData);

    var spawnerData = new SpawnerData();
    spawnerData.enemyData = enemyShipsData.list[3];
    spawnerData.spawnDelay = 200;
    spawnerData.loop = true;
    this.enemyManager.setupSpawner(spawnerData);

    //Score Manager Initialization
    this.scoreManager = new ScoreManager(this, this.playerManager.playersArray);

  }

  update() {
    this.playerManager.update();
    this.enemyManager.update();
    this.bg_1.tilePositionY -= 5;
  }
}
