class EnemySpawner{
    constructor(scene){
      this.scene = scene
      this.enemyArray = [];
    }

    spawnEnemy(){
      this.enemyArray.push(new Enemy(this.scene));
      this.enemyArray[0].create();
    }
}
