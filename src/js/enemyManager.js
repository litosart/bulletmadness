class EnemyManager{

    enemyArray = [];

    constructor(scene){
      this.scene = scene
    }

    spawnEnemy(){
      this.enemyArray.push(new Enemy(this.scene));
      this.enemyArray[this.enemyArray.length-1].create();
    }

    update(){
      var i = 0;
      for (var i = 0; i < this.enemyArray.length; i++) {
        this.enemyArray[i].checkOutOfBounds();
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
