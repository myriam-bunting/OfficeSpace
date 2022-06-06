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
  const rooms = await getRooms();

  const getRoomById = (id) => {
    return rooms.find(function (room) {
      return room.id === id;
    });
  };
  const charTypes = ["engineer", "student", "tutor", "manger"];

  class Character {
    constructor(
      name = "Player1",
      type = 0,
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
      "HOW TO PLAY - Race through the HotDesk office to find your resume. Use the controls to navigate the obstacles"
    );
  });

  document.querySelector("#controls").addEventListener("click", function () {
    logText(
      "Use North, South, East, West to change direction. Use Pick Up to collect items. Attack will give you options for a weapon"
    );
  });
  const newPlayer = new Character();

  document.querySelector("#start-game").addEventListener("click", function () {
    const inputDiv = document.createElement("div");
    inputDiv.className = "inputDiv";
    inputDiv.innerText = `Enter your player name\n`;
    document.querySelector(".gameBox").append(inputDiv);

    const inputBar = document.createElement("input");
    inputBar.className = "inputBar";
    inputDiv.append(inputBar);

    const typeDiv = document.createElement("div");
    typeDiv.className = "typeDiv";
    typeDiv.innerText = `Choose your player type\n`;
    document.querySelector(".gameBox").append(typeDiv);
    const playerSelection = (playerType) => {
      let selectType = document.createElement("button");
      selectType.className = "playerTypeSelect";
      selectType.setAttribute("id", `${playerType}`);
      selectType.innerText = playerType;

      document.querySelector(".typeDiv").append(selectType);
    };
    playerSelection(charTypes[0]);
    playerSelection(charTypes[1]);
    playerSelection(charTypes[2]);
    playerSelection(charTypes[3]);

    inputBar.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        console.log(`Welcome ${e.target.value}`);
        console.log(e.target.value);
        newPlayer.setName(inputBar.value);
        console.log(newPlayer);
      }
    });
  });

  document.querySelector(".typeDiv").addEventListener("click", function (e) {
    e.preventDefault();
  });

  const move = (direction) => {
    const currentRoom = getRoomById(newPlayer.currentRoom);
    if (currentRoom[direction] === null) {
      console.log("Ouch");
    } else {
      newPlayer.currentRoom = currentRoom[direction];
      console.log(currentRoom);
      document.querySelector("#insetbar").innerText = getRoomById(
        newPlayer.currentRoom
      ).location;
    }
  };

  document.querySelector("#btn-north").addEventListener("click", function () {
    move("north");
  });

  document.querySelector("#btn-west").addEventListener("click", function () {
    move("west");
  });

  document.querySelector("#btn-east").addEventListener("click", function () {
    move("east");
  });
  document.querySelector("#btn-south").addEventListener("click", function () {
    move("south");
  });
};
wholeDocument();
