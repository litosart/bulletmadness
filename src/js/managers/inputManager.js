class InputManager {

  /*
  The Enemy Manager its responsable of:
  -Giving input to playerManager

  Dependecies:
  -Scene
  */

  input = [];
  constructor(scene) {

    this.input[1] = scene.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.UP,
      down: Phaser.Input.Keyboard.KeyCodes.DOWN,
      left: Phaser.Input.Keyboard.KeyCodes.LEFT,
      right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
      shoot: Phaser.Input.Keyboard.KeyCodes.L
    });
    this.input[0] = scene.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      shoot: Phaser.Input.Keyboard.KeyCodes.V
    });
  }

  getInput(index) {
    return this.input[index];
  }

}
