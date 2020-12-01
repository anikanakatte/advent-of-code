const fs = require("fs");

fs.readFile("./data.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  const numArray = data.toString().replace(/\r/g, "").split("\n").map(Number);

  function partOne() {
    let answer;
    for (let i = 0; i < numArray.length - 1; i++) {
      for (let j = 1; j < numArray.length; j++) {
        if (numArray[i] + numArray[j] === 2020) {
          answer = numArray[i] * numArray[j];
        }
      }
    }
    console.log(answer);
  }
  partOne();

  function partTwo() {
    let solution;
    for (a of numArray) {
      for (b of numArray) {
        for (c of numArray) {
          d = a + b + c;
          if (d === 2020) {
            solution = a * b * c;
          }
        }
      }
    }
    console.log(solution);
  }
  partTwo();
});
