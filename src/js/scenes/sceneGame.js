class SceneGame extends Phaser.Scene {

  constructor() {
    super("SceneGame");
  }

  setupSurvivalSpawners() {
    var spawnerData = new SpawnerData();
    spawnerData.ID = 0;
    spawnerData.enemyData = enemyShipsDataContainer.list[0];
    spawnerData.spawnDelay = 2500;
    spawnerData.loop = true;
    this.enemyManager.setupSpawner(spawnerData);

    var spawnerData = new SpawnerData();
    spawnerData.ID = 2;
    spawnerData.enemyData = enemyShipsDataContainer.list[2];
    spawnerData.spawnDelay = 3000;
    spawnerData.loop = true;
    this.enemyManager.setupSpawner(spawnerData);

    var spawnerData = new SpawnerData();
    spawnerData.ID = 3;
    spawnerData.enemyData = enemyShipsDataContainer.list[3];
    spawnerData.spawnDelay = 500;
    spawnerData.loop = true;
    this.enemyManager.setupSpawner(spawnerData);

    var spawnerData = new SpawnerData();
    spawnerData.ID = 4;
    spawnerData.enemyData = enemyShipsDataContainer.list[4];
    spawnerData.spawnDelay = 2000;
    spawnerData.loop = true;
    this.enemyManager.setupSpawner(spawnerData);
  }

  create(sceneData) {

    this.lastEnemyID = 0;
    //Setting Client Parameters
    clientParameters.playing = true;

    //Setup previous Scene Data
    this.sceneData = sceneData;

    //Level Enviorement Initialization
    //this.enviorementManager2 = new EnviorementManager(this, "background_earth", 0, 200);
    this.earth = this.add.image(300, 600, "background_earth");
    this.enviorementManager = new EnviorementManager(this, "background_2", 0, 0);

    //Input Initialization
    this.inputManager = new InputManager(this);

    //Physics Initialization
    this.physicsManager = new PhysicsManager(this);

    //Player Ships Initialization
    this.playerManager = new PlayerManager(this, this.inputManager);

    //Enemy Manager Initialization
    this.enemyManager = new EnemyManager(this);

    var spawnerData = new SpawnerData();
    spawnerData.ID = 0;
    spawnerData.enemyData = enemyShipsDataContainer.list[0];
    spawnerData.spawnDelay = 2500;
    spawnerData.loop = true;
    this.enemyManager.setupSpawner(spawnerData);

    var spawnerData = new SpawnerData();
    spawnerData.ID = 2;
    spawnerData.enemyData = enemyShipsDataContainer.list[2];
    spawnerData.spawnDelay = 3000;
    spawnerData.loop = true;
    this.enemyManager.setupSpawner(spawnerData);

    var spawnerData = new SpawnerData();
    spawnerData.ID = 3;
    spawnerData.enemyData = enemyShipsDataContainer.list[3];
    spawnerData.spawnDelay = 500;
    spawnerData.loop = true;
    this.enemyManager.setupSpawner(spawnerData);

    var spawnerData = new SpawnerData();
    spawnerData.ID = 4;
    spawnerData.enemyData = enemyShipsDataContainer.list[4];
    spawnerData.spawnDelay = 2000;
    spawnerData.loop = true;
    this.enemyManager.setupSpawner(spawnerData);

    //ADD MORE DIFFICULTY
    this.spawnerLoopConfig = {
      delay: 15250,
      loop: true,
      callback: this.setupSurvivalSpawners,
      callbackScope: this
    }
    this.timer = this.time.addEvent(this.spawnerLoopConfig);

    this.powerupManager = new PowerupManager(this);

    this.effectsManager = new EffectsManager(this);

    //Score Manager Initialization
    this.scoreManager = new ScoreManager(this, this.playerManager.clientPlayer);

    this.cameras.main.fadeIn(500);
  }

  update() {

    this.playerManager.update();
    this.enemyManager.update();
    this.enviorementManager.update(1);

  }
}
