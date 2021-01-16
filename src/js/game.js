const config = {
  width: 600,
  height: 800,
  type: Phaser.AUTO,
  backgroundColor: 0x000000,
  scene: [ScenePreBoot, SceneBoot, SceneTitleScreen, ScenePlayers, SceneGame, SceneLevelEndOverview, SceneCredits, SceneLevel1End, SceneStory1],
  pixelArt: true,
  //create: this.create,
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  }
};

//Event System Creation
const eventSystem = new Phaser.Events.EventEmitter();

const beamDataContainer = new BeamDataContainer();
const enemyShipsDataContainer = new EnemyShipsDataContainer();
const playerShipsData = new PlayerShipsDataContainer();
const powerUpDataContainer = new PowerUpDataContainer();

var game;
window.onload = function() {
  game = new Phaser.Game(config);
};

//Client Functions
clientParameters = {};

function DisconnectClient() {
  console.log("Disconecting");
  $.ajax({
    url: "http://127.0.0.1:8080/players/" + clientParameters.id,
    method: "DELETE",
  }).done(function(data) {
    console.log(data);
    close();
  });
}

//window.onbeforeunload = DisconnectClient;

/*this.create = function(){
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
  game.scale.refresh();
}*/
