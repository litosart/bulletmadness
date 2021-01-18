class SceneRecords extends Phaser.Scene {
    constructor() {
        super("SceneRecords");
    }

    create() {

        this.gobackb = this.add.image(300, 700, 'goback_button').setScale(4);
        this.gobackb.setInteractive();
        this.gobackb.on('pointerdown', () => this.scene.start("SceneTitleScreen"));

        //var score = [];
        //var name = "";
        //var leaderboard = [];

        this.scene = this.add.bitmapText(80, 120 + aux, "font_default", pos + "." + name).setFontSize(40);

        $.ajax({
            url: "http://127.0.0.1:8080/leaderboard",
            method: "GET",
            contentType: "application/json; charset=utf-8",
    
          }).done(function(data) {
            //scoreRecords = data;
            for(var i = 0; i < data.length; i++){
                //score[i] = data[i];
                //console.log(pos + "." + score[i].playerName + ", score: " + score[i].scoreNumber);
                scoreRecords[i] = data[i];
                console.log(pos + "." + scoreRecords[i].playerName + ", score: " + scoreRecords[i].scoreNumber);
                //leaderboard[i] = scoreRecords[i].playerName;
            }
        });

        this.score1  = this.add.bitmapText(80, 120, "font_default", "1." + scoreRecords[0].playerName).setFontSize(40);
        this.score2  = this.add.bitmapText(80, 170, "font_default", "2." + leaderboard[1]).setFontSize(40);
        this.score3  = this.add.bitmapText(80, 220, "font_default", "3." + leaderboard[2]).setFontSize(40);
        this.score4  = this.add.bitmapText(80, 270, "font_default", "4." + leaderboard[3]).setFontSize(40);
        this.score5  = this.add.bitmapText(80, 320, "font_default", "5." + leaderboard[4]).setFontSize(40);
        this.score6  = this.add.bitmapText(80, 370, "font_default", "6." + leaderboard[5]).setFontSize(40);
        this.score7  = this.add.bitmapText(80, 420, "font_default", "7." + leaderboard[6]).setFontSize(40);
        this.score8  = this.add.bitmapText(80, 470, "font_default", "8." + leaderboard[7]).setFontSize(40);
        this.score9  = this.add.bitmapText(80, 520, "font_default", "9." + leaderboard[8]).setFontSize(40);
        this.score10 = this.add.bitmapText(80, 570, "font_default", "10." + leaderboard[9]).setFontSize(40);

        //Scene Fade In
        this.cameras.main.fadeIn(500);
    }
}