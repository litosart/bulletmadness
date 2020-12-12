class BeamData {

    /*
    BeamData contains all the necesary information to define a beam
    */
  
    constructor() {
      //Set Default Values
      this.spriteName = "proyectile_beam_1";
      this.idleAnimName = "proyectile_beam_1_anim";
      //0 bala del jugador, 1 bala del enemigo
      this.beamType = 0;
      this.velocity = -800;
    }
  
  }