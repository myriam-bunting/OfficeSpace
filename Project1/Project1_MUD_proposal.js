const getDungeonById = (id) => {};

const logText = (text) => {
  // create a <p>
  // make p.innertext = text
  //append P to gamebox
};

const player = {
  currentLocation: 1,
  move: (direction) => {
    if (getDungeonById(this.currentLocation).direction !== null) {
      this.currentLocation = getDungeonById(this.currentLocation)[direction];
    } else {
    }
  },
};
