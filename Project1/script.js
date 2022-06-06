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
  setName(playerName) {
    this.name = playerName;
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
  const inputDiv = document.createElement("div");
  inputDiv.className = "inputDiv";
  inputDiv.innerText = `Enter your player name\n`;
  document.querySelector(".gameBox").append(inputDiv);

  const inputBar = document.createElement("input");
  inputBar.className = "inputBar";
  inputBar.innerText = inputBar.value;
  inputDiv.append(inputBar);

  const inputDivButton = document.createElement("button");
  inputDivButton.className = "inputDivButton";
  inputDivButton.innerText = `Enter`;
  inputDiv.append(inputDivButton);

  inputBar.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  });

  const newPlayer = new Character((playerName = inputBar.innerText));
  console.log(newPlayer);
  const playerSelection = () => {
    const type1 = document.createElement("button");
    type1.className = "playerTypeSelect";
    type1.setAttribute("id", "engineer");
    type1.innerText = newPlayer.type[0];
    const type2 = document.createElement("button");
    type2.className = "playerTypeSelect";
    type2.setAttribute("id", "tutor");
    type2.innerText = newPlayer.type[1];
    const type3 = document.createElement("button");
    type3.className = "playerTypeSelect";
    type3.innerText = newPlayer.type[2];
    type3.setAttribute("id", "manager");

    const typeDiv = document.createElement("div");
    typeDiv.className = "typeDiv";
    typeDiv.innerText = `Choose your player type\n`;
    document.querySelector(".gameBox").append(typeDiv);

    document.querySelector(".typeDiv").append(type1, type2, type3);
  };
  playerSelection(newPlayer);
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
