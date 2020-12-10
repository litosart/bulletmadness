class PlayerManager {

  /*
  The Player Manager its responsable of:
  -Maintaining a list of all the players
  -Passing the input to each player

  Dependecies:
  -Scene (Must contain a sceneData array with the indexes of the player ships data)
  -PlayerDataList
  -PlayerNumber Global Variable
  */

  playersArray = [];

  spawnPlayers(scene, playerDataList) {
    var i = 0;
    for (i = 0; i < playerNumber; i++) {
      this.playersArray[i] = new Player(scene, playerDataList.list[scene.sceneData.playerData[i]]);
      this.playersArray[i].setRandomPosition(1 * config.width / 10, 8 * config.height / 10, 8 * config.width / 10, 1.5 * config.height / 10)
    }
  }

  setPlayersInput(inputManager) {
    this.playersArray[0].setInputOrigin(inputManager.getInput(0));
    if (playerNumber == 2) {
      this.playersArray[1].setInputOrigin(inputManager.getInput(1));
    }
  }

  constructor(scene, inputManager) {
    this.spawnPlayers(scene, playerShipsData);
    this.setPlayersInput(inputManager);
  }

  update() {
    var i = 0;
    for (i = 0; i < this.playersArray.length; i++) {
      this.playersArray[i].update();
    }
  }
}
