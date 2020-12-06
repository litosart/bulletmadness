class EnemyManager{

    enemyArray = [];

    constructor(scene){
      this.scene = scene
    }

    spawnEnemy(){
      this.enemyArray.push(new Enemy(this.scene));
      this.enemyArray[this.enemyArray.length-1].create();
    }
}
