class WeaponCreator {
  constructor() {}

  static getWeapon(weaponID,bulletData) {
    switch (weaponID) {
      case 0:
        return new BasicWeapon(bulletData)
        break;
      case 1:
        return new ShotgunWeapon(bulletData)
        break;
      default:
        return new BasicWeapon(beamDataContainer.list[0])
    }
  }
}
