var config = {
  width: 600,
  height: 800,
  type: Phaser.AUTO,
  backgroundColor: 0x000000,
  scene: [sceneTitleScreen, scenePlayers, sceneGame],
  pixelArt: true,
  //create: this.create,
  physics: {
    default: "arcade",
    arcade:{
      debug: false
    }
  }
};

window.onload = function(){
 game = new Phaser.Game(config);
};

/*this.create = function(){
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
  game.scale.refresh();
}*/
