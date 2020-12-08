class keyboardManager{
    constructor(scene){
        this.scene = scene.keyboard;
    }

    setCursorKeys(scene){
        return this.cursorKeys = scene.input.keyboard.createCursorKeys();
    }
    
    setWASDKeys(scene){
        return this.inputWASD = scene.input.keyboard.addKeys(
            {   up:    Phaser.Input.Keyboard.KeyCodes.W,
                down:  Phaser.Input.Keyboard.KeyCodes.S,
                left:  Phaser.Input.Keyboard.KeyCodes.A,
                right: Phaser.Input.Keyboard.KeyCodes.D
            });
    }

    setShootSpace(scene){
        return this.spacebar = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    setShootL(scene){
        return this.shootL = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);
    }
}