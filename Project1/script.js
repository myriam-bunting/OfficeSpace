const wholeDocument = async () => {
  const getRooms = async () => {
    try {
      const url = "./dungeon.json";
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err.message); //returns a promise
    }
  };
  const data = await getRooms();

  class Character {
    constructor(
      name,
      type,
      health,
      weapon,
      weaponDamage,
      moves,
      backpack,
      wallet,
      currentRoom
    ) {
      this.name = name;
      this.type = [engineer, tutor, manger];
      this.health = 100;
      this.weapon = [];
      this.weaponDamage = weaponDamage;
      this.moves = 0;
      this.backpack = [item];
      this.wallet = 0;
      this.currentRoom = currentRoom;
      this.item = item;
    }
    getName() {
      return this.name;
    }
    getType() {
      return this.type;
    }
    getWeapons() {
      return this.weapon;
    }
    getHeath() {
      this.health -= weaponDamage;
    }
    getCurrentRoom() {
      return this.currentRoom;
    }
    fight() {}
    pickUpItem(item) {
      this.backpack += item;
    }
  }

  class Player extends Character {
    constructor(name) {
      this.name = name;
      super();
    }
  }

  const logText = (text) => {
    const anyText = document.createElement("p");
    anyText.innerText = text;
    document.querySelector(".gameBox").appendChild(anyText);
  };

  const howToPlay = (text) => {
    document.querySelector("nav").addEventListener("click", function () {
      logText(text);
    });
  };
  howToPlay("test");

  // const controls = (text) => {
  //   document.querySelector("nav").addEventListener("click", logText(text));
  // };
  // controls(
  //   "Use North, South, East, West to change direction. Use 'Pick Up' to collect items. Attack will give you options for a weapon"
  // );

  // const player = {
  //   currentLocation: json.id,
  //   move: (direction) => {
  //     if (getDungeonById(this.currentLocation).direction !== null) {
  //       this.currentLocation = getDungeonById(this.currentLocation)[direction];
  //     } else {
  //     }
  //   },
  // };

  // const location = (text) => {
  //   document.querySelector("#insetbar").innerText = text;
  // };
  // location("Pantry");

  // const getCurrentRoom = () => {};
};
wholeDocument();
