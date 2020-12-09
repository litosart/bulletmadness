class PlayerManager {

  playersArray = [];
  playerDataList;

  createPlayers(scene, playerDataList) {
    var i = 0;
    for (i = 0; i < playerNumber; i++) {
      this.playersArray[i] = new Player(scene, playerDataList.list[i]);
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
    this.playerDataList = new PlayerShipsData();
    this.createPlayers(scene, this.playerDataList);
    this.setPlayersInput(inputManager);
  }

  update() {
    //Updates all playersin playersArray
    var i = 0;
    for (i = 0; i < this.playersArray.length; i++) {
      this.playersArray[i].update();
    }
  }
}
