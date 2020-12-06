
class sceneGame extends Phaser.Scene {
  constructor(){
    super("bootGame");
  }

  preload(){
    this.load.image("background", "resources/img/backgrounds/Background_ClearSky.png");
    this.load.image("playerShip1", "resources/img/sprites/PlayerShip1.png");
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

    //Adding Player Ships
    var initialPlayerNumber = 2;

    var i = 0;
    this.players = [];
    for(i=0;i < initialPlayerNumber;i++){
      this.players[i] = new Player(this);
      this.players[i].setRandomPosition(1*config.width/10,8*config.height/10,8*config.width/10,1.5*config.height/10)
    }

    //Enemy Spawner
    this.enemySpawner = new EnemySpawner(this);
    this.enemySpawner.spawnEnemy();
    //Adding Enemy
    this.enemy = new Enemy(this);
    this.enemy.create();
    console.log(this.enemy.a);

    timer = game.time.create(false);
    timer.loop(2000, updateCounter, this);
    timer.start();
  }

  movePlayers(){
    this.players[0].Move(this.cursorKeys);
    this.players[1].Move(this.inputWASD);
  }

  update(){
    this.movePlayers();
  }
}
