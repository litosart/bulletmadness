class InputManager{

  input = [];
  constructor(scene){
    this.input[0] = scene.input.keyboard.createCursorKeys();
    this.input[1] = scene.input.keyboard.addKeys(
      {up:Phaser.Input.Keyboard.KeyCodes.W,
        down:Phaser.Input.Keyboard.KeyCodes.S,
        left:Phaser.Input.Keyboard.KeyCodes.A,
        right:Phaser.Input.Keyboard.KeyCodes.D});
  }

  getInput(i){
    return this.input[i];
  }
}
