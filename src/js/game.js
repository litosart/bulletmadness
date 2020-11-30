var config = {
  width: 384,
  height: 512,
  backgroundColor: 0x000000,
  scene: [sceneGame],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade:{
      debug: false
    }
  }
}

window.onload = function(){
  var game = new Phaser.Game(config);
}
