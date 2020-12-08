class PhysicsManager{

  constructor(scene){

    this.beamsPhysicsGroup = scene.physics.add.group();
    this.enemyPhysicsGroup = scene.physics.add.group();

    scene.physics.add.collider(this.beamsPhysicsGroup, this.enemyPhysicsGroup, function(projectile, enemy) {
      projectile.destroy();
      enemy.destroy();
    });

  }
}
