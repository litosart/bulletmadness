class PlayerShipsData {

    list = []
  
    constructor() {
  
      var data = new PlayerData();
      data.movementSpeed = 300;
      data.spriteName = "ship_player_1";
      data.idleAnimName = "ship_player_1_idle";
      data.lives = 3;
      this.list.push(data);
  
      data = new PlayerData();
      data.movementSpeed = 300;
      data.spriteName = "ship_player_1";
      data.idleAnimName = "ship_player_1_idle";
      data.lives = 3;
      this.list.push(data);
  
    }
  }