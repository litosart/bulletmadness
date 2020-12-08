class PhysicsManager {

  constructor(scene) {

    this.playerPhysicsGroup = scene.physics.add.group();
    this.beamsPhysicsGroup = scene.physics.add.group();
    this.enemyPhysicsGroup = scene.physics.add.group();

    scene.physics.add.collider(this.beamsPhysicsGroup, this.enemyPhysicsGroup, function(projectile, enemy) {
      projectile.destroy();
      enemy.destroy();
      eventSystem.emit("enemyHit", 10);
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
