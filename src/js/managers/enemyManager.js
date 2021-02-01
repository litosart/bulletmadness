class EnemyManager {

  /*
  The Enemy Manager its responsable of:
  -Setting up enemy spawners
  -Maintaining a list of all the enemies and spawners in the current level (scene)
  -Executing the Update Method of all the enemies in the list

  Dependecies:
  -Scene
  -EnemySpawner
  */

  spawnerArray = [];
  enemyArray = [];

  serverEnemies = [];
  enemiesIDInGame = [];

  constructor(scene) {
    this.scene = scene

    this.enemiesWebSocket = new WebSocket('ws://127.0.0.1:8080/enemies');

  }

  setupSpawner(spawnerData) {
    if (isHost) {
      var spawner = new EnemySpawner(this.scene, spawnerData, this.enemyArray, this.enemiesWebSocket);
    }
  }

  update() {
    //Updates all the enemies in the list and removes deleted enemies
    if (isHost) {
      var i = 0;
      for (var i = 0; i < this.enemyArray.length; i++) {
        if (this.enemyArray[i] == undefined) {
          this.enemyArray.splice(i, 1);
        } else {
          this.enemyArray[i].update();
        }
      }
    } else {
      this.enemiesWebSocket.onmessage = function(message) {
        var alreadyAdded = false;
        var objectMessage = JSON.parse(message.data);
        for (var i = 0; i < this.enemiesIDInGame.length; i++) {
          if (this.enemiesIDInGame[i] == objectMessage.enemyID) {
            alreadyAdded = true;
          }
        }
        if (!alreadyAdded) {
          var newDummyPlayer = new Phaser.GameObjects.Sprite(this.scene, 0, 0, enemyShipsDataContainer.list[objectMessage.shipID].spriteName)
          newDummyPlayer.setScale(2);
          newDummyPlayer.angle = 180;
          newDummyPlayer.play(enemyShipsDataContainer.list[objectMessage.shipID].idleAnimName);
          this.scene.add.existing(newDummyPlayer);
          this.serverEnemies.push(newDummyPlayer)
          this.enemiesIDInGame.push(objectMessage.enemyID);
        }

        for (var i = 0; i < this.enemiesIDInGame.length; i++) {
          if (this.enemiesIDInGame[i] == objectMessage.enemyID) {
            this.serverEnemies[i].x = objectMessage.shipXPosition;
            this.serverEnemies[i].y = objectMessage.shipYPosition;
          }
        }
      }.bind(this);
    }
  }
}
