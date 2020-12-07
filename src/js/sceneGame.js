class SceneGame extends Phaser.Scene {

  constructor() {
    super("SceneGame");
  }

  create() {

    //Level Enviorement Initialization
    this.enviorementManager = new EnviorementManager(this);

    //Input
    this.inputManager = new InputManager(this);

    //Player Ships Initialization
    this.playerManager = new PlayerManager(this, this.inputManager);

    //Enemy Manager Initialization
    this.enemyManager = new EnemyManager(this);

    this.eventSystem = new Phaser.Events.EventEmitter();
  }

  update() {
    //this.movePlayers();
    this.playerManager.update();
    this.enemyManager.update();

    if(playerManager.playersArray[0].x < 400){
      console.log("Event Raised");
    }
  }
}
