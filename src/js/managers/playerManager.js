class PlayerManager {

  /*
  The Player Manager its responsable of:
  -Maintaining a list of all the players
  -Passing the input to each player

  Dependecies:
  -Scene (Must contain a sceneData array with the indexes of the player ships data)
  -PlayerDataList
  -PlayerNumber Global Variable
  -InputManager
  */

  clientPlayer;
  serverPlayers = [];
  serverPlayersIDInGame = [];

  spawnPlayers(scene, playerDataList) {
    //Open connection to server to send beam info
    this.beamWebSocket = new WebSocket('ws://127.0.0.1:8080/beam');

    //Create Client Player
    this.clientPlayer = new Player(scene, playerDataList.list[scene.sceneData.playerData[0]], this.beamWebSocket);
    this.clientPlayer.setRandomPosition(1 * config.width / 10, 8 * config.height / 10, 8 * config.width / 10, 1.5 * config.height / 10);
    this.scene = scene;

    this.gameplayWebSocket = new WebSocket('ws://127.0.0.1:8080/gameplay');
    scene.gameplayWebSocket = this.gameplayWebSocket;
    this.gameplayWebSocket.onopen = function() {
      this.gameplayWebSocket.send(JSON.stringify({
        playerID: clientParameters.id,
        shipID: scene.sceneData.playerData[0],
        shipXPosition: this.clientPlayer.x,
        shipYPosition: this.clientPlayer.y
      }));

      this.sendShipPositionToServerLoop = scene.time.addEvent({
        delay: 0.01,
        loop: true,
        callback: function() {
          this.gameplayWebSocket.send(JSON.stringify({
            playerID: clientParameters.id,
            shipID: scene.sceneData.playerData[0],
            shipXPosition: this.clientPlayer.x,
            shipYPosition: this.clientPlayer.y
          }));
        },
        callbackScope: this
      });
    }.bind(this);

    //Create Server Players

    this.gameplayWebSocket.onmessage = function(message) {
      var alreadyAdded = false;
      var objectMessage = JSON.parse(message.data);
      for (var i = 0; i < this.serverPlayersIDInGame.length; i++) {
        if (this.serverPlayersIDInGame[i] == objectMessage.playerID) {
          alreadyAdded = true;
        }
      }
      if (!alreadyAdded) {
        //this.serverPlayers.push(new Player(scene, playerDataList.list[objectMessage.shipID]))
        console.log("WORKS");
        var newDummyPlayer = new Phaser.GameObjects.Sprite(this.scene,0,0, playerDataList.list[objectMessage.shipID].spriteName)
        newDummyPlayer.setScale(1.5);
        newDummyPlayer.play(playerDataList.list[objectMessage.shipID].idleAnimName);
        scene.add.existing(newDummyPlayer);
        this.serverPlayers.push(newDummyPlayer)
        this.serverPlayersIDInGame.push(objectMessage.playerID);
      }

      for (var i = 0; i < this.serverPlayersIDInGame.length; i++) {
        if(this.serverPlayersIDInGame[i] == objectMessage.playerID){
          this.serverPlayers[i].x = objectMessage.shipXPosition;
          this.serverPlayers[i].y = objectMessage.shipYPosition;
        }
      }
    }.bind(this);

    this.beamWebSocket.onmessage = function(message){
      //var alreadyAdded = false;
      console.log("pew pew");
      var beamMessage = JSON.parse(message.data);
      var beam = new Beam(this.scene, beamMessage.ship, beamMessage.beamData, beamMessage.team);
    }.bind(this);
  }

  setPlayersInput(inputManager) {
    this.clientPlayer.setInputOrigin(inputManager.getInput(0));
  }

  constructor(scene, inputManager) {
    this.spawnPlayers(scene, playerShipsData);
    this.setPlayersInput(inputManager);
  }

  update() {
    this.clientPlayer.update();
  }
}
