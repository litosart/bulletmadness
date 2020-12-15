class SpawnerData{

  /*
  SpawnerData contains all the information used by an EnemySpawner
  */

  constructor(){
    this.enemyData = enemyShipsDataContainer.list[0];
    this.spawnDelay = 100;
    this.loop = true;
  }
}
