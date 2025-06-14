let portals = [
  {
    location: 55,
    destination: 38,
  },
  {
    location: 14,
    destination: 35,
  },
  {
    location: 91,
    destination: 48,
  },
  {
    location: 30,
    destination: 8,
  },
  {
    location: 31,
    destination: 70,
  },
  {
    location: 63,
    destination: 83,
  },
  {
    location: 3,
    destination: 39,
  },
  {
    location: 47,
    destination: 86,
  },
  {
    location: 71,
    destination: 93,
  },
  {
    location: 21,
    destination: 4,
  },
  {
    location: 44,
    destination: 65,
  },
  {
    location: 96,
    destination: 66,
  },
  {
    location: 79,
    destination: 42,
  },
  {
    location: 87,
    destination: 54,
  },
  {
    location: 90,
    destination: 119,
  },
  {
    location: 120,
    destination: 149,
  },
  {
    location: 150,
    destination: 179,
  },
  {
    location: 180,
    destination: 200,
  },
];
function quickestPath(portals) {
  let amountPath = 0;
  let currentPosition = 1;
  while (currentPosition < 200) {
    let maxPosition = currentPosition + 11;
    for (let i = 0; i < portals.length; ++i) {
      if (
        portals[i].location >= currentPosition + 1 &&
        portals[i].location <= currentPosition + 11
      ) {
        if (maxPosition < portals[i].destination) {
          maxPosition = portals[i].destination;
        }
      }
      console.log('maxPosition:', maxPosition);
      console.log('Portal Location:', portals[i]);
    }
    currentPosition = maxPosition;
    amountPath++;
    console.log('Current Position:', currentPosition);
  }

  return amountPath;
}
let result = quickestPath(portals);
console.log("Quickest Path: ", result);
