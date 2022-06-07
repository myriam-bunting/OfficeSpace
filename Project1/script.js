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

  // const attachElementToGameBox = (elem, attribute, attName, text) => {
  //   const newElem = document.createElement(elem);
  //   newElem.setAttribute(attribute, attName);
  //   newElem.innerText = text;
  //   document.querySelector(".gameBox").append(newElem);
  // };
  //Refactoring attempt

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
    document.querySelector(".gameBox").append(typeDiv); // make 'create div' function

    const playerSelection = () => {
      for (type of charTypes) {
        let selectType = document.createElement("button");
        selectType.className = "playerTypeSelect";
        selectType.setAttribute("id", `${type}`);
        selectType.innerText = type;

        document.querySelector(".typeDiv").append(selectType);
      }
    };
    playerSelection();

    inputBar.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        console.log(`Welcome ${e.target.value}`);
        newPlayer.setName(inputBar.value);
      }
    });
    const getCharTypes = () => {
      document
        .getElementById(charTypes[0])
        .addEventListener("click", function () {
          newPlayer.setType(charTypes[0]);
          console.log(`${charTypes[0]} is clicked`);
        });

      document
        .getElementById(charTypes[1])
        .addEventListener("click", function () {
          newPlayer.setType(charTypes[1]);
          console.log(`${charTypes[1]} is clicked`);
        });
      document
        .getElementById(charTypes[2])
        .addEventListener("click", function () {
          newPlayer.setType(charTypes[2]);
          console.log(`${charTypes[2]} is clicked`);
        });
      document
        .getElementById(charTypes[3])
        .addEventListener("click", function () {
          newPlayer.setType(charTypes[3]);
          console.log(`${charTypes[3]} is clicked`);
        });
    };
    getCharTypes();

    console.log(newPlayer.type);
    // document.querySelector("#start-game").addEventListener("click", function () {
    // const roomDiv = document.createElement("div");
    // roomDiv.className = "roomDesc";
    // roomDiv.innerText = `Enter your player name\n`;
    // document.querySelector(".gameBox").append(roomDiv);
  });

  //   const getCharTypes = () => {
  //     document.getElementById(charTypes);
  //     for (type of charTypes) {
  //       getCharTypes.type().addEventListener("click", function () {
  //         console.log(`${type} is clicked`);
  //       });
  //     }
  //   };
  //   getCharTypes();
  // });

  //refactoring attempt

  const ouch = [
    "Ouch! That's the table. Head for the door",
    "Watch the chairs",
    "No way through here",
    "Ouch! There's a wall",
    "Pivot! Pivot!",
    "Try another way",
  ];

  const move = (direction) => {
    const currentRoom = getRoomById(newPlayer.currentRoom);
    if (currentRoom[direction] === null) {
      logText(ouch[Math.floor(Math.random() * ouch.length)]);
    } else {
      newPlayer.currentRoom = currentRoom[direction];
      console.log(currentRoom);
      document.querySelector("#insetbar").innerText = getRoomById(
        newPlayer.currentRoom
      ).location;
    }
  };

  // const description = (description) => {
  //   logText(getRoomById(newPlayer.currentRoom).description);
  //   const currentRoom = getRoomById(newPlayer.currentRoom);
  //   if (currentRoom[direction] === null) {
  //     logText(ouch[Math.floor(Math.random() * ouch.length)]);
  //   } else {
  //     newPlayer.currentRoom = currentRoom[direction];
  //     console.log(currentRoom);
  //     document.querySelector("#insetbar").innerText = getRoomById(
  //       newPlayer.currentRoom
  //     ).location;
  //   }
  // };

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
