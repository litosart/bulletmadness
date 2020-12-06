const config = {
  width: 600,
  height: 800,
  backgroundColor: 0x000000,
  scene: [sceneTitleScreen],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade:{
      debug: false
    }
  }
}

window.onload = function(){
  const game = new Phaser.Game(config);
}
