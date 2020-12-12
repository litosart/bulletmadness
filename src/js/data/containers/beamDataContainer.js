class BeamDataContainer {

    /*
    PlayerShipsData contains all the Player Ships Information in the game
    */
  
    list = []
  
    constructor() {
  
      var data = new BeamData();
      data.spriteName = "proyectile_beam_1";
      data.idleAnimName = "proyectile_beam_1_anim";
      data.beamType = 0;
      data.velocity = -800;
      this.list.push(data);
  
      data = new BeamData();
      data.spriteName = "proyectile_beam_1";
      data.idleAnimName = "proyectile_beam_1_anim";
      data.beamType = 1;
      data.velocity = -700;
      this.list.push(data);
    }
  
  }