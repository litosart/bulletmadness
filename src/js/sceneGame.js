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
    this.playerGroup = this.physics.add.group();

    //Score
    var score = 0;
    var scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '20px', fill: '#000' });

    //Player Ships Initialization
    var i = 0;
    this.players = [];
    for(i=0;i < playerNumber;i++){
      this.players[i] = new Player(this);
      this.players[i].setRandomPosition(1*config.width/10,8*config.height/10,8*config.width/10,1.5*config.height/10);
    }

    //Lives text
    this.livesText_1 = this.add.text(16, config.height - 30, 'Lives: ' + this.players[0].lives, { fontSize: '20px', fill: '#000' });
    if(playerNumber == 2)
    {
        this.livesText_2 = this.add.text(config.width - 200, config.height - 30, 'Lives: ' + this.players[1].lives, { fontSize: '20px', fill: '#000' });
    }

    //New Input
    this.keyboard = new keyboardManager(this);
  
    //Input Initialization
    this.players[0].setInputOrigin(this.keyboard.setWASDKeys(this));
    this.players[0].setShootKey(this.keyboard.setShootSpace(this));
    
    if(playerNumber == 2){
      this.players[1].setInputOrigin(this.keyboard.setCursorKeys(this));
      this.players[1].setShootKey(this.keyboard.setShootL(this));
    }
    
    //Enemy Manager Initialization
    this.enemyManager = new EnemyManager(this);
    this.enemyManager.create();

    //Destroying enemies with the player shoots
    this.physics.add.collider(this.projectiles1, this.enemies, function(projectile, enemy){
      projectile.destroy();
      enemy.destroy();
      score += 10;
      scoreText.setText('Score: ' + score);
    });

    //Collision player and enemy
    this.physics.add.collider(this.playerGroup, this.enemies, function(player, enemy){
      enemy.destroy();
      player.collideEnemy();
      
      this.updateTexts();

      if(player.lives == 0)
      {
        player.playerDie();
      }

      this.checkPlayersAlive();
    }, null, this);

  }

  updateTexts()
  {
      this.livesText_1.setText('Lives player 1: ' + this.players[0].lives);
      if(playerNumber == 2)
      {
        this.livesText_2.setText('Lives player 2: ' + this.players[1].lives);
      }
  }

  checkPlayersAlive()
  {
    var n = 0;
    var i=0;
    for(i=0;i < playerNumber;i++)
    {
        if(!this.players[i].alive)
        {
            n++;
        }
    }

    if(n == playerNumber)
    {
      this.scene.start("SceneTitleScreen")
    }
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
