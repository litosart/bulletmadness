class SceneGame extends Phaser.Scene {

  constructor(){
    super("SceneGame");
  }

  create() {

    this.background = this.add.image(0,0,"background").setScale(2);
    this.background.setOrigin(0,0);

    //Physics groups initialization
    this.projectiles1 = this.add.group();
    this.enemies = this.physics.add.group();

    //Player Ships Initialization
    var i = 0;
    this.players = [];
    for(i=0;i < playerNumber;i++){
      this.players[i] = new Player(this);
      this.players[i].setRandomPosition(1*config.width/10,8*config.height/10,8*config.width/10,1.5*config.height/10);
    }

    //New Input
    this.keyboard = new keyboardManager(this);
  
    //Input Initialization
    this.players[0].setInputOrigin(this.keyboard.setCursorKeys(this));
    this.players[0].setShootKey(this.keyboard.setShootL(this));
    if(playerNumber == 2){
      this.players[1].setInputOrigin(this.keyboard.setWASDKeys(this));
      this.players[1].setShootKey(this.keyboard.setShootSpace(this));
    }
    
    //Enemy Manager Initialization
    this.enemyManager = new EnemyManager(this);
    this.enemyManager.create();

    //Destroying enemies with the player shoots
    this.physics.add.collider(this.projectiles1, this.enemies, function(projectile, enemy){
      projectile.destroy();
      enemy.destroy();
    });
  }

  //Moving and shooting
  controlPlayers(){
    var i = 0;
    for(i=0; i < this.players.length;i++){
      this.players[i].update(this);
    }
  }

  update(){
    this.controlPlayers();
    this.enemyManager.update();
  }
}
