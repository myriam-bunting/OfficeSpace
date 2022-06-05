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

  const charaterTypes = ["engineer", "tutor", "manger"];

  class Character {
    constructor(
      name,
      type,
      health = 100,
      weapon = [],
      weaponDamage,
      moves = 0,
      backpack = [],
      wallet = 0,
      currentRoom
    ) {
      this.name = name;
      this.type = type;
      this.health = health;
      this.weapon = weapon;
      this.weaponDamage = weaponDamage;
      this.moves = moves;
      this.backpack = backpack;
      this.wallet = wallet;
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
    setCurentRoom() {
      this.currentRoom = currentRoom;
    }
    setType() {
      this.type = type;
    }
    fight() {}
    pickUpItem(item) {
      this.backpack += item;
    }
  }

  const logText = (text) => {
    const anyText = document.createElement("p");
    anyText.innerText = text;
    document.querySelector(".gameBox").appendChild(anyText);
  };

  document.querySelector("#how-to-play").addEventListener("click", function () {
    logText(
      "HOW TO PLAY: Race through the HotDesk office to find your resume. Use the controls to navigate the obstacles"
    );
  });

  document.querySelector("#controls").addEventListener("click", function () {
    logText(
      "Use North, South, East, West to change direction. Use 'Pick Up' to collect items. Attack will give you options for a weapon"
    );
  });

  document.querySelector("#start-game").addEventListener("click", function () {
    playerSelection();
  });

  const playerSelection = () => {
    const type1 = document.createElement("button");
    type1.className = playerTypeSelection;
    type1.setAttribute("id", "engineer");
    type1.innerText = Character.type[0];
    const type2 = document.createElement("button");
    type2.className = playerTypeSelection;
    type2.setAttribute("id", "tutor");
    type2.innerText = Character.type[1];
    const type3 = document.createElement("button");
    type3.className = playerTypeSelection;
    type3.innerText = Character.type[2];
    type3.setAttribute("id", "manager");

    logText(type1, type2, type3);
  };

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
