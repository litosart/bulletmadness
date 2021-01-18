class SceneRecords extends Phaser.Scene {
    constructor() {
        super("SceneRecords");
    }

    create() {

        this.gobackb = this.add.image(300, 700, 'goback_button').setScale(4);
        this.gobackb.setInteractive();
        this.gobackb.on('pointerdown', () => this.scene.start("SceneTitleScreen"));

        var aux = 0;
        var pos = 1;
        var leaderboard = [];

        $.ajax({
            url: "http://127.0.0.1:8080/leaderboard",
            method: "GET",
            contentType: "application/json; charset=utf-8",
            context: this,
    
          }).done(function(data) {
            for(var i = 0; i < 10; i++){
                scoreRecords[i] = data[i];
                if (scoreRecords[i] == undefined){
                    leaderboard[i] = this.add.bitmapText(80, 120 + aux, "font_default",  pos + ".???: " + 0).setFontSize(40);
                } else {
                    leaderboard[i] = this.add.bitmapText(80, 120 + aux, "font_default",  pos + "." + scoreRecords[i].playerName + ": " + scoreRecords[i].scoreNumber).setFontSize(40);
                  }
                  aux += 50;
                  pos++;
            }
        });

        //Scene Fade In
        this.cameras.main.fadeIn(500);
    }
}