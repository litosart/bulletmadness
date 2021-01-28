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

  spawnPlayers(scene, playerDataList) {
    //Create Client Player
    this.clientPlayer = new Player(scene, playerDataList.list[scene.sceneData.playerData[0]]);
    this.clientPlayer.setRandomPosition(1 * config.width / 10, 8 * config.height / 10, 8 * config.width / 10, 1.5 * config.height / 10)

    //Create Server Players
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
