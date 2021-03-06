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
    scene.physics.add.overlap(this.beamsPhysicsGroup, this.enemyPhysicsGroup, function(proyectile, enemy) {

      if(proyectile.team == 0)
      {
        proyectile.destroy();
        enemy.emit("EnemyHit",proyectile.damage);
        eventSystem.emit("PlayEffect_Explosion",enemy)
        eventSystem.emit("PlaySound_EnemyHit");
      }
    }, null, this);

    scene.physics.add.overlap(this.beamsPhysicsGroup, this.playerPhysicsGroup, function(projectile, player) {

      if(projectile.team == 1)
      {
        projectile.destroy();
        player.recieveDamage();
        eventSystem.emit("PlayEffect_Explosion",player);
        eventSystem.emit("PlayerHit_UpdateHealth");
        eventSystem.emit("PlaySound_PlayerHit");
      }
    }, null, this);

    scene.physics.add.overlap(this.playerPhysicsGroup, this.enemyPhysicsGroup, function(player, enemy) {
      enemy.destroy();
      player.recieveDamage();
      eventSystem.emit("PlayEffect_Explosion",player);
      eventSystem.emit("PlayEffect_Explosion",enemy);
      eventSystem.emit("PlayerHit_UpdateHealth");
      eventSystem.emit("PlaySound_PlayerHit");
    }, null, this);

    scene.physics.add.overlap(this.playerPhysicsGroup, this.powerupPhysicsGroup, function(player, powerup) {
      powerup.emit("PowerUp_Hit",player);
      eventSystem.emit("PlaySound_PowerUp");
    });

  }
}
