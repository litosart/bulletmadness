class EnemyManager{

    enemyArray = [];

    constructor(scene){
      this.scene = scene
    }

    spawnEnemy(){
      this.enemyArray.push(new Enemy(this.scene));
      this.enemyArray[this.enemyArray.length-1].create();
    }

    create(){
      var timerEventConfig = {
        delay: 200,
        loop: true,
        callback: this.spawnEnemy,
        callbackScope: this
      }
      this.scene.timer = this.scene.time.addEvent(timerEventConfig);
    }

    update(){
      var i = 0;
      for (var i = 0; i < this.enemyArray.length; i++) {
        if(this.enemyArray[i] != undefined){
          this.enemyArray[i].update();
        }
      }
    }

    //Enemy Cleanup when out of screen
    /* var i = 0;
    for (var i = 0; i < this.enemyManager.enemyArray.length; i++) {
      if(this.enemyManager.enemyArray[i].y > config.height-200){
        this.enemyManager.enemyArray[i].destroy();
        this.enemyManager.enemyArray.slice(i,1);
      }
    }
    */
}
