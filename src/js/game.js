var config = {
  width: 384,
  height: 512,
  backgroundColor: 0x000000,
  scene: [sceneGame]
}

window.onload = function(){
  var game = new Phaser.Game(config);
}
