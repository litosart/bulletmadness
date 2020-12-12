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
    this.powerupPhysicsGroup = scene.physics.add.group();

    scene.physics.world.setBounds(30, 0, config.width - 60, config.height);

    //Define all collisions and responses
    scene.physics.add.collider(this.beamsPhysicsGroup, this.enemyPhysicsGroup, function(projectile, enemy) {
      projectile.destroy();
      enemy.destroy();
      eventSystem.emit("EnemyHit_UpdateScore",enemy.enemyData.points);
      eventSystem.emit("PlaySound_EnemyHit");
    });

    scene.physics.add.collider(this.playerPhysicsGroup, this.enemyPhysicsGroup, function(player, enemy) {
      enemy.destroy();
      player.recieveDamage();
      if (player.lives == 0) {
        player.playerDeath();
      }
      eventSystem.emit("PlayerHit_UpdateHealth");
    }, null, this);

    scene.physics.add.collider(this.playerPhysicsGroup, this.powerupPhysicsGroup, function(player, powerup) {
      powerup.emit("PowerUp_Hit",player);
    });

  }
}
