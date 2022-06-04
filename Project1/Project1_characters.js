class Player {
  constructor(
    name,
    type,
    health,
    weapon,
    weaponDamage,
    moves,
    backpack,
    wallet,
    coordinates
  ) {
    this.name = name;
    this.type = [Morty, Jerry, Summer];
    this.health = 100;
    this.weapon = [];
    this.weaponDamage = weaponDamage;
    this.moves = 0;
    this.backpack = [item];
    this.wallet = 0;
    this.coordinates = [x, y];
  }
  getName() {
    return this.name;
  }
  getType() {
    return this.type;
  }
  getHeath() {
    this.health -= damage;
  }
  getWeapons() {
    return this.weapon;
  }
  getHeath() {
    this.health -= weaponDamage;
  }
  fight() {}
  pickUpItem() {
    this.backpack += item;
  }
}
