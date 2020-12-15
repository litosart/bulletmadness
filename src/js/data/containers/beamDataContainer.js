class BeamDataContainer {

    /*
    PlayerShipsData contains all the Player Ships Information in the game
    */

    list = []

    constructor() {

      var data = new BeamData();
      data.spriteName = "proyectile_beam_1";
      data.idleAnimName = "proyectile_beam_1_anim";
      data.velocity = 800;
      this.list.push(data);

      var data = new BeamData();
      data.spriteName = "proyectile_beam_2";
      data.idleAnimName = "proyectile_beam_2_anim";
      data.velocity = 325;
      this.list.push(data);

    }

  }
