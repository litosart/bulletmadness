class SceneGame extends Phaser.Scene {

  constructor() {
    super("SceneGame");
  }

  create(sceneData) {

    //Setup previous Scene Data
    this.sceneData = sceneData;

    //Level Enviorement Initialization
    this.enviorementManager = new EnviorementManager(this, "background_2");

    //Input Initialization
    this.inputManager = new InputManager(this);

    //Physics Initialization
    this.physicsManager = new PhysicsManager(this);

    //Player Ships Initialization
    this.playerManager = new PlayerManager(this, this.inputManager);

    //Enemy Manager Initialization
    this.enemyManager = new EnemyManager(this);

    var spawnerData = new SpawnerData();
    spawnerData.enemyData = enemyShipsDataContainer.list[0];
    spawnerData.spawnDelay = 1000;
    spawnerData.loop = true;
    this.enemyManager.setupSpawner(spawnerData);

    var spawnerData = new SpawnerData();
    spawnerData.enemyData = enemyShipsDataContainer.list[2];
    spawnerData.spawnDelay = 1000;
    spawnerData.loop = true;
    this.enemyManager.setupSpawner(spawnerData);

    var spawnerData = new SpawnerData();
    spawnerData.enemyData = enemyShipsDataContainer.list[3];
    spawnerData.spawnDelay = 750;
    spawnerData.loop = true;
    this.enemyManager.setupSpawner(spawnerData);

    this.powerupManager = new PowerupManager(this);

    //Score Manager Initialization
    this.scoreManager = new ScoreManager(this, this.playerManager.playersArray);

    this.cameras.main.fadeIn(500);
  }

  update() {
    this.playerManager.update();
    this.enemyManager.update();
    this.enviorementManager.update();
  }
}
