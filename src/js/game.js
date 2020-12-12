const config = {
  width: 600,
  height: 800,
  type: Phaser.AUTO,
  backgroundColor: 0x000000,
  scene: [ScenePreBoot,SceneBoot, SceneTitleScreen, ScenePlayers, SceneGame,SceneLevelEndOverview],
  pixelArt: true,
  //create: this.create,
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  }
};

var playerNumber = 1;

//Event System Creation
const eventSystem = new Phaser.Events.EventEmitter();

const enemyShipsDataContainer = new EnemyShipsDataContainer();
const playerShipsData = new PlayerShipsDataContainer();
const powerUpDataContainer = new PowerUpDataContainer();
const beamDataContainer = new BeamDataContainer();

window.onload = function() {
  game = new Phaser.Game(config);
};

/*this.create = function(){
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
  game.scale.refresh();
}*/
