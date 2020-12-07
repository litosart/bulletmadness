
class SceneGame extends Phaser.Scene {

  constructor(){
    super("SceneGame");
  }

  create() {

    this.background = this.add.image(0,0,"background");
    this.background.setOrigin(0,0);

    //Input Initialization
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.inputWASD = this.input.keyboard.addKeys(
      {up:Phaser.Input.Keyboard.KeyCodes.W,
        down:Phaser.Input.Keyboard.KeyCodes.S,
        left:Phaser.Input.Keyboard.KeyCodes.A,
        right:Phaser.Input.Keyboard.KeyCodes.D});

    //Player Ships Initialization
    var initialPlayerNumber = 2;

    var i = 0;
    this.players = [];
    for(i=0;i < initialPlayerNumber;i++){
      this.players[i] = new Player(this);
      this.players[i].setRandomPosition(1*config.width/10,8*config.height/10,8*config.width/10,1.5*config.height/10)
    }

    this.players[0].setInputOrigin(this.cursorKeys);
    this.players[1].setInputOrigin(this.inputWASD);

    //Enemy Manager Initialization
    this.enemyManager = new EnemyManager(this);
    var timerEventConfig = {
      delay: 200,
      loop: true,
      callback: this.enemyManager.spawnEnemy,
      callbackScope: this.enemyManager
    }
    this.timer = this.time.addEvent(timerEventConfig);
  }

  movePlayers(){
    var i = 0;
    for(i=0; i < this.players.length;i++){
      this.players[i].move();
    }
  }

  update(){
    this.movePlayers();
    this.enemyManager.update();
  }
}
