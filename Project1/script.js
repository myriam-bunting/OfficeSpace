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

  const charTypes = ["engineer", "student", "tutor", "manager"];

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
    setCurrentRoom() {
      this.currentRoom = currentRoom;
    }
    setType(type) {
      this.type = type;
    }
    fight() {}

    pickUpItem() {
      this.backpack += this.item;
    }
  }

  const scrollToBottom = (id) => {
    const gameBoxDiv = document.getElementById(id);
    gameBoxDiv.scrollTop = gameBoxDiv.scrollHeight;
  };

  const logText = (text) => {
    const anyText = document.createElement("p");
    anyText.innerText = text;
    document.querySelector(".gameBox").appendChild(anyText);
    scrollToBottom("gameBoxDiv");
  };

  logText(`Start game to begin`);

  const howToPlay = () => {
    logText(
      "HOW TO PLAY - Race through the HotDesk office to find your resume. Use the controls to navigate the obstacles"
    );
  };
  document.querySelector("#how-to-play").addEventListener("click", howToPlay);

  const controls = () => {
    logText(
      "Use North, South, East, West to change direction. Use Pick Up to collect items. Attack will give you options for a weapon"
    );
  };
  document.querySelector("#controls").addEventListener("click", controls);

  const newPlayer = new Character();

  const startGame = () => {
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
      const addName = (e) => {
        if (e.key === "Enter") {
          newPlayer.setName(inputBar.value);
        }
      };

      inputBar.addEventListener("keydown", addName);

      charTypes.forEach((type) => {
        let selectType = document.createElement("button");
        selectType.className = "playerTypeSelect";
        selectType.setAttribute("id", `${type}`);
        selectType.innerText = type;

        document.querySelector(".typeDiv").append(selectType);

        selectType.addEventListener("click", function () {
          newPlayer.setType(type);
          newPlayer.setName(inputBar.value);
          console.log(type);
          if (newPlayer.name && newPlayer.type !== null) {
            logText(
              `Welcome ${newPlayer.name} the ${newPlayer.type}! You have left your resume at HotDesk... the most popular shared workspace in all the land... Now in order to reach your interview in time, you must wade through the chaos that is the HotDesk and return a victor with resume in hand lest you.. well lest you face the repercussions of appearing unprepared to your potential future employer... GET A MOVE ON THEN!`
            );
          } else {
            alert("Please enter a name");
          }
        });
      });
    };
    playerSelection();
  };

  document.querySelector("#start-game").addEventListener("click", startGame);

  const ouch = [
    "Ouch! That's the table. Head for the door",
    "Watch the chairs",
    "No way through here",
    "Ouch! There's a wall",
    "Pivot! Pivot!",
    "Nothing to see here",
  ];
  let ouchTimes = 0;

  const move = (direction) => {
    const currentRoom = getRoomById(newPlayer.currentRoom);
    console.log(currentRoom);
    console.log(newPlayer.currentRoom);
    console.log(direction);
    console.log(currentRoom[direction]);

    if (currentRoom[direction] === null) {
      logText(ouch[Math.floor(Math.random() * ouch.length)]);
    } else {
      document.querySelector("#insetbar").innerText = getRoomById(
        newPlayer.currentRoom
      ).location;

      newPlayer.currentRoom = currentRoom[direction];
    }
    console.log(currentRoom.id);
  };

  const displayDescription = () => {
    const currentRoom = getRoomById(newPlayer.currentRoom);
    if (currentRoom.description === "null") {
      logText(
        "Opps.. need to add my description.. Have a sandwich while you wait "
      );
    } else {
      logText(getRoomById(newPlayer.currentRoom).description);

      document.querySelector("#insetbar").innerText = getRoomById(
        newPlayer.currentRoom
      ).location;
    }
  };

  document.querySelector("#btn-north").addEventListener("click", function () {
    move("north");
    displayDescription();
  });

  document.querySelector("#btn-west").addEventListener("click", function () {
    move("west");
    displayDescription();
  });

  document.querySelector("#btn-east").addEventListener("click", function () {
    move("east");
    displayDescription();
  });
  document.querySelector("#btn-south").addEventListener("click", function () {
    move("south");
    displayDescription();
  });

  scrollToBottom("gameBoxDiv");
};
wholeDocument();
