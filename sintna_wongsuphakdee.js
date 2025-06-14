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
function quickesetPath(portals) {
  let amountPath = 0;
  let currentPosition = 1;
  while (currentPosition < 200) {
    for (let i = 0; i < portals.length; ++i) {
      if (
        portals[i].location >= currentPosition + 1 &&
        portals[i].location <= currentPosition + 11
      ) {
        if (portals[i].destination <= portals[i].location) {
          currentPosition += 11;
        } else {
          currentPosition = portals[i].destination;
        }
        amountPath++;
        break;
      } else {
        currentPosition += 11;
        amountPath++;
        break;
      }
    }
    console.log(
      "Current Position:", currentPosition, "Amount of Path:", amountPath
    );
  }

  return amountPath;
}
let result = quickesetPath(portals);
console.log("Quickest Path: ".concat(result));
