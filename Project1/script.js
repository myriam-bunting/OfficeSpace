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
      moves = 30,
      backpack = [],
      wallet = 0,
      currentRoom = 0
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
    }
    getName() {
      return this.name;
    }
    getType() {
      return this.type;
    }
    getWeapons() {
      // this.weapon.push(weapon);
      // if (weapon[newPlayer.type] === "cookie" || item.type === "milo") {
      //   this.moves += item.amount;
      //   logText(`The ${item.type} has revived you`);
      // } else if (item.type === "resume") {
      //   logText(`Game over, your score is ${this.moves}`);
      // }
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
    useMove() {
      this.moves--;
      console.log(this.moves);
    }
    setType(type) {
      this.type = type;
    }
    fight() {}

    pickUpItem(item) {
      this.backpack.push(item);
      if (item.type === "cookie" || item.type === "milo") {
        this.moves += item.amount;
        logText(`The ${item.type} has revived you`);
      } else if (item.type === "resume") {
        logText(`Game over, your score is ${this.moves}`);
      }
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
      "HOW TO PLAY - Race through the HotDesk office rooms to find your resume. Use the controls to navigate the obstacles in the minimum number of moves. Picked up items will give you more moves."
    );
  };
  document.querySelector("#how-to-play").addEventListener("click", howToPlay);

  const controls = () => {
    logText(
      "Use North, South, East, West buttons to change direction. Use Pick Up to collect items. Attack will give you options to choose a weapon"
    );
  };
  document.querySelector("#controls").addEventListener("click", controls);

  let newPlayer = new Character();

  const startGame = () => {
    newPlayer = new Character();
    document.querySelector(".gameBox").innerHTML = "";
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
        selectType.setAttribute("id", `${type}`);
        selectType.innerText = type;

        document.querySelector(".typeDiv").append(selectType);

        selectType.addEventListener("click", function () {
          newPlayer.setType(type);
          newPlayer.setName(inputBar.value);
          console.log(type);
          if (newPlayer.name && newPlayer.type !== null) {
            logText(
              `Welcome ${newPlayer.name} the ${newPlayer.type}! You have left your resume at HotDesk... the most popular shared workspace in all the land... Now in order to reach your interview in time, you must wade through the chaos that is the HotDesk and return with resume in hand lest you.. well lest you face the repercussions of appearing unprepared to your potential future employer... What's your move?`
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

  const move = (direction) => {
    if (newPlayer.moves <= 0) {
      logText("Game over, Press start game to try again");
      return;
    }
    const currentRoom = getRoomById(newPlayer.currentRoom);
    newPlayer.useMove();
    if (currentRoom[direction] === null) {
      logText(ouch[Math.floor(Math.random() * ouch.length)]);
    } else {
      document.querySelector("#insetbar").innerText = getRoomById(
        newPlayer.currentRoom
      ).location;

      newPlayer.currentRoom = currentRoom[direction];
      displayDescription();
    }
  };

  const displayDescription = () => {
    const currentRoom = getRoomById(newPlayer.currentRoom);
    if (currentRoom.description === "") {
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

  document.querySelector("#btn-pickUp").addEventListener("click", function () {
    if (getRoomById(newPlayer.currentRoom).treasure !== null) {
      logText(
        `You picked up a ${getRoomById(newPlayer.currentRoom).treasure.type}`
      );
      newPlayer.pickUpItem(getRoomById(newPlayer.currentRoom).treasure);
      getRoomById(newPlayer.currentRoom).treasure = null;
    } else {
      logText("There is no treasure in this room");
    }
    newPlayer.useMove();
  });

  document.querySelector("#btn-repond").addEventListener("click", function () {
    let motivationText = getRoomById(newPlayer.currentRoom).weapon[
      newPlayer.type
    ].motivation;
    console.log(
      getRoomById(newPlayer.currentRoom).weapon[newPlayer.type].motivation
    );

    motivationText.forEach((line) => {
      let lineButton = document.createElement("button");
      lineButton.setAttribute("id", "lineButton");
      lineButton.innerText = line;
      document.querySelector(".gameBox").appendChild(lineButton);

      // document.querySelector(".typeDiv").append(lineButton)
    });

    // if (getRoomById(newPlayer.currentRoom).weapon == null) {
    //   logText(`No weapons here`);
    //   console.log(`No weapons here`);
    // } else if (
    // for(lines of motivationText){
    //   let
    // }
    // logText((document.createElement("button").innerText = motivationText));
    // ) {
    //   logText(`Choose a response:`);
    //   getRoomById(newPlayer.currentRoom).weapon[
    //     newPlayer.type
    //   ].motivation.forEach(logText);
    //   console.log(
    //     getRoomById(newPlayer.currentRoom).weapon[newPlayer.type].motivation
    //   );
    // } else {
    //   logText(`Choose a weapon:`);
    //   getRoomById(newPlayer.currentRoom).weapon[newPlayer.type].forEach(
    //     logText
    //   );
    //   console.log(
    //     `this is my type specific weapons ${
    //       getRoomById(newPlayer.currentRoom).weapon[newPlayer.type].objects
    //     }`
    //   );
    // }
  });

  scrollToBottom("gameBoxDiv");
};
wholeDocument();
