class EnemyManager {

  /*
  The Enemy Manager its responsable of:
  -Setting up enemy spawners
  -Maintaining a list of all the enemies and spawners in the current level (scene)
  -Executing the Update Method of all the enemies in the list

  Dependecies:
  -Scene
  -EnemySpawner
  */

  spawnerArray = [];
  enemyArray = [];

  constructor(scene) {
    this.scene = scene
  }

  setupSpawner(spawnerData){
    var spawner = new EnemySpawner(this.scene,spawnerData,this.enemyArray);
  }

  update() {

    //Updates all the enemies in the list and removes deleted enemies
    var i = 0;
    for (var i = 0; i < this.enemyArray.length; i++) {
      if (this.enemyArray[i] == undefined) {
        this.enemyArray.splice(i, 1);
      } else {
        this.enemyArray[i].update();
      }
    }

  }
}
