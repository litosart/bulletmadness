class PhysicsManager {

  /*
  The Physics Manager its responsable of:
  -Maintaining the physics groups
  -Processing object collisions

  Dependecies:
  -Scene
  */

  constructor(scene) {

    //All Physics Groups Definitions
    this.playerPhysicsGroup = scene.physics.add.group();
    this.beamsPhysicsGroup = scene.physics.add.group();
    this.enemyPhysicsGroup = scene.physics.add.group();


    //Define all collisions and responses
    scene.physics.add.collider(this.beamsPhysicsGroup, this.enemyPhysicsGroup, function(projectile, enemy) {
      projectile.destroy();
      enemy.destroy();
      eventSystem.emit("enemyHit", enemy.enemyData.points);
      soundManager.playExplosionSound(scene);
    });

    scene.physics.add.collider(this.playerPhysicsGroup, this.enemyPhysicsGroup, function(player, enemy) {
      enemy.destroy();
      player.recieveDamage();
      if (player.lives == 0) {
        player.playerDeath();
      }
      eventSystem.emit("playerHit");
    }, null, this);

  }
}
