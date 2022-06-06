// const wholeDocument = async () => {
//   const getRooms = async () => {
//     try {
//       const url = "./dungeon.json";
//       const res = await fetch(url);
//       const data = await res.json();
//       return data;
//     } catch (err) {
//       console.log(err.message); //returns a promise
//     }
//   };
//   const data = await getRooms();

// const charaterTypes = ;

class Character {
  constructor(
    name = "Player1",
    type = ["engineer", "tutor", "manger"],
    health = 100,
    weapon = [],
    weaponDamage = 10,
    moves = 0,
    backpack = [],
    wallet = 0,
    currentRoom = 0,
    item = []
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

  pickUpItem() {
    this.backpack += this.item;
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
  const newPlayer = new Character("Bob");

  const playerSelection = (player) => {
    const type1 = document.createElement("button");
    type1.className = "playerTypeSelect";
    type1.setAttribute("id", "engineer");
    type1.innerText = player.type[0];
    const type2 = document.createElement("button");
    type2.className = "playerTypeSelect";
    type2.setAttribute("id", "tutor");
    type2.innerText = player.type[1];
    const type3 = document.createElement("button");
    type3.className = "playerTypeSelect";
    type3.innerText = player.type[2];
    type3.setAttribute("id", "manager");

    logText(type1, type2, type3);
  };
  playerSelection(newPlayer);
  console.log(newPlayer);
});

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
// };
// wholeDocument();
