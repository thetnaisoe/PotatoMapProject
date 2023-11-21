function createGridAndMatrix(size) {
  let grid = document.querySelector("#grid");
  let matrix = [];

  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.backgroundImage = 'url("MapMakerPhotos/tiles/base_tile.png")';
      grid.appendChild(cell);
      row.push(cell);
    }
    matrix.push(row);
  }

  return matrix;
}

let matrix = createGridAndMatrix(11);

let mountainImageUrl = 'url("MapMakerPhotos/tiles/mountain_tile.png")';
let baseImageUrl = 'url("MapMakerPhotos/tiles/base_tile.png")';

matrix[1][1].style.backgroundImage = mountainImageUrl;
matrix[3][8].style.backgroundImage = mountainImageUrl;
matrix[5][3].style.backgroundImage = mountainImageUrl;
matrix[8][9].style.backgroundImage = mountainImageUrl;
matrix[9][5].style.backgroundImage = mountainImageUrl;

console.log(matrix);

const elements = [
  {
    time: 2,
    type: "water",
    shape: [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "town",
    shape: [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 1,
    type: "forest",
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "farm",
    shape: [
      [1, 1, 1],
      [0, 0, 1],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "forest",
    shape: [
      [1, 1, 1],
      [0, 0, 1],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "town",
    shape: [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "farm",
    shape: [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 1,
    type: "town",
    shape: [
      [1, 1, 0],
      [1, 0, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 1,
    type: "town",
    shape: [
      [1, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 1,
    type: "farm",
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 1,
    type: "farm",
    shape: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "water",
    shape: [
      [1, 1, 1],
      [1, 0, 0],
      [1, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "water",
    shape: [
      [1, 0, 0],
      [1, 1, 1],
      [1, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "forest",
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 1],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "forest",
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "water",
    shape: [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
];


let randomElement = elements[Math.floor(Math.random() * elements.length)];
let time = document.querySelector(".time");
time.innerHTML = randomElement.time;

let currentElementArray = Array.from(document.querySelectorAll(".randomCol"));
console.log(currentElementArray);

function clear(){
  let currentElementArray = Array.from(document.querySelectorAll(".randomCol"));
  currentElementArray.forEach((cell) => (cell.style.backgroundImage = ""));
}

let newShape = [[]];

function createRandomShape(randomElement) {
  let shape = rotateAndMirrorShape(
    randomElement.shape,
    randomElement.rotation,
    randomElement.mirrored
  );

  for (let i = 0; i < shape.length; i++) {
    for (let j = 0; j < shape[i].length; j++) {
      if (shape[i][j] === 1) {
        let cell = currentElementArray[i * 3 + j];
        switch (randomElement.type) {
          case "water":
            imageUrl = 'url("MapMakerPhotos/tiles/water_tile.png")';
            cell.style.backgroundImage = imageUrl;
            break;
          case "town":
            imageUrl = 'url("MapMakerPhotos/tiles/village_tile.png")';
            cell.style.backgroundImage = imageUrl;
            break;
          case "farm":
            imageUrl = 'url("MapMakerPhotos/tiles/plains_tile.png")';
            cell.style.backgroundImage = imageUrl;
            break;
          case "forest":
            imageUrl = 'url("MapMakerPhotos/tiles/forest_tile.png")';
            cell.style.backgroundImage = imageUrl;
            break;
        }
      }
    }
  }
}

createRandomShape(randomElement);

function rotateAndMirrorShape(shape, rotation, mirrored) {
  newShape = shape.map((row) => [...row]);

  if (mirrored) {
    newShape = newShape.map((row) => row.reverse());
  }

  for (let i = 0; i < rotation; i++) {
    newShape = newShape
      .reverse()
      .map((row, index) => newShape.map((val) => val[index]));
  }

  return newShape;
}

let rotateButton = document.querySelector("#rotate-button");
let flipButton = document.querySelector("#flip-button");
let restartButton = document.querySelector("#restart-button");

rotateButton.addEventListener("click", () => {
  randomElement.rotation = (randomElement.rotation + 1) % 4;

  currentElementArray.forEach((cell) => (cell.style.backgroundImage = ""));

  createRandomShape(randomElement);

  console.log(randomElement.rotation);
});

flipButton.addEventListener("click", () => {
  randomElement.mirrored = !randomElement.mirrored;

  currentElementArray.forEach((cell) => (cell.style.backgroundImage = ""));

  createRandomShape(randomElement);
  console.log(currentElementArray);
  console.log(newShape);
});

restartButton.addEventListener("click", () => {
  location.reload();
});

// Add a mousemove event listener to each cell in the grid

matrix.forEach((row, y) => {
  row.forEach((cell, x) => {
    
    cell.addEventListener("mousemove", () => {
      
      // Clear the previous outline
      matrix.forEach((row) => row.forEach((cell) => (cell.style.outline = "")));
      let canPlace = true;

      let rowOffset, colOffset;
      for (let i = 0; i < newShape.length; i++) {
        for (let j = 0; j < newShape[i].length; j++) {
          if (newShape[i][j] === 1) {
            rowOffset = i;
            colOffset = j;
            break;
          }
        }
        if (rowOffset !== undefined) break;
      }

      // Draw the outline of the shape at the cell's position
      newShape.forEach((shapeRow, i) => {
        shapeRow.forEach((value, j) => {
          if (value === 1) {
            let outlineCell = matrix[y + i -rowOffset] && matrix[y + i - rowOffset][x + j - colOffset];
            if (
              outlineCell &&
              outlineCell.style.backgroundImage === baseImageUrl
            ) {
              outlineCell.style.outline = "1px solid";
            } else {
              canPlace = false;
            }
          }
        });
      });

      // If the shape can be placed, make the outline green. If the shape cannot be placed, make the outline red.
      matrix.forEach((row, i) => {
        row.forEach((cell, j) => {
          if (cell.style.outline) {
            cell.style.outlineColor = canPlace ? "green" : "red";
          }
        });
      });
    });
  });
});

let elapsedTime = document.querySelector("#time-left");
let currentSeasonElement = document.querySelector("#current-season");

let totalTime = 28;
let seasonTime = 0;
let currentSeason = 0;
let missionScores = { A: 0, B: 0, C: 0, D: 0 };
let seasons =["Spring(AB)", "Summer(BC)", "Autumn(CD)", "Winter(DA)"];

function scoreMissionA() {
  let score = 0;

  // Check the first and last row
  for (let x = 0; x < matrix[0].length; x++) {
    if (matrix[0][x].style.backgroundImage.includes("forest_tile.png")) {
      score++;
    }
    if (matrix[matrix.length - 1][x].style.backgroundImage.includes("forest_tile.png")) {
      score++;
    }
  }

  // Check the first and last column, skipping first and last cells
  for (let y = 1; y < matrix.length - 1; y++) {
    if (matrix[y][0].style.backgroundImage.includes("forest_tile.png")) {
      score++;
    }
    if (matrix[y][matrix[0].length - 1].style.backgroundImage.includes("forest_tile.png")) {
      score++;
    }
  }

  return score;
}

function scoreMissionB() {
  let score = 0;
  
  for(let y = 0; y < matrix.length; y++){
    let forestCount = 0;
    for(let x = 0; x < matrix[y].length; x++){
      if(matrix[y][x].style.backgroundImage.includes("forest_tile.png")){
        forestCount++;
      }
    }
    if(forestCount == 3){
      score += 4;
    }
  }

  
  return score;
}

function scoreMissionC() {
  let score = 0;

  // Check each cell
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      // If the cell is a farm field
      if (matrix[row][col].style.backgroundImage.includes("plains_tile.png")) {
        // Check the adjacent cells
        for (let offset = -1; offset <= 1; offset += 2) {
          // Check the cell above/below
          if (row + offset >= 0 && row + offset < matrix.length && matrix[row + offset][col].style.backgroundImage.includes("water_tile.png")) {
            score += 2;
          }
          // Check the cell to the left/right
          if (col + offset >= 0 && col + offset < matrix[row].length && matrix[row][col + offset].style.backgroundImage.includes("water_tile.png")) {
            score += 2;
          }
        }
      }
    }
  }
  return score;
}

function scoreMissionD() {
  let score = 0;

  // Check each row
  for (let row = 0; row < matrix.length; row++) {
    let isRowFull = true;
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col].style.backgroundImage.includes(baseImageUrl) || matrix[row][col].style.backgroundImage.includes(mountainImageUrl)) {
        isRowFull = false;
        break;
      }
    }
    if (isRowFull) {
      score += 6;
    }
  }

  // Check each column
  for (let col = 0; col < matrix[0].length; col++) {
    let isColumnFull = true;
    for (let row = 0; row < matrix.length; row++) {
      if (matrix[row][col].style.backgroundImage.includes(baseImageUrl) || matrix[row][col].style.backgroundImage.includes(mountainImageUrl)) {
        isColumnFull = false;
        break;
      }
    }
    if (isColumnFull) {
      score += 6;
    }
  }
  return score;

}

function checkEncirclement() {
  let mountains = [[1, 1], [3, 8], [5, 3], [8, 9], [9, 5]];
  let encircledMountains = 0;

  for (let mountain of mountains) {
    if (isMountainEncircled(mountain[0], mountain[1])) {
      encircledMountains += 1;
    }
  }

  return encircledMountains;
}

function isMountainEncircled(i, j) {
  let directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  for (let dir of directions) {
    let ni = i + dir[0];
    let nj = j + dir[1];

    // Check if the cell is within the grid
    if (ni >= 0 && ni < matrix.length && nj >= 0 && nj < matrix[0].length) {
      // Check if the cell is not a base cell
      if (matrix[ni][nj].style.backgroundImage === baseImageUrl) {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
}


let missionAScore = document.querySelector("#mission-A-points");
let missionBScore = document.querySelector("#mission-B-points");
let missionCScore = document.querySelector("#mission-C-points");
let missionDScore = document.querySelector("#mission-D-points");


let LetterA = document.querySelector("#letter-A");
let LetterB = document.querySelector("#letter-B");
let LetterC = document.querySelector("#letter-C");
let LetterD = document.querySelector("#letter-D");

let springScore = document.querySelector("#spring-points");
let summerScore = document.querySelector("#summer-points");
let autumnScore = document.querySelector("#autumn-points");
let winterScore = document.querySelector("#winter-points");

let scoreA = document.querySelector("#AScore");
let scoreB = document.querySelector("#BScore");
let scoreC = document.querySelector("#CScore");
let scoreD = document.querySelector("#DScore");

let totalScores = document.querySelector("#total-points");

let winterMissionDScore;
let winterMissionAScore;
let summerMissionBScore;
let autumnMissionCScore;

let timeLeft = document.querySelector("#time-units-left");

function updateTimeAndScore(randomElement){

  console.log('Before update: ', 'totalTime:', totalTime, 'seasonTime:', seasonTime, 'randomElement.time:', randomElement.time);
  totalTime -= randomElement.time;
  seasonTime += randomElement.time;
  console.log('After update: ', 'totalTime:', totalTime, 'seasonTime:', seasonTime);
  elapsedTime.innerHTML = seasonTime;
  timeLeft.innerHTML = totalTime;

  if (seasonTime >= 7) {

      switch (currentSeason) {
        case 0: // Spring
          missionScores.A = scoreMissionA();
          missionScores.B = scoreMissionB();
          console.log('mission A score: ' + missionScores.A);
          console.log('mission B score: ' + missionScores.B);
          missionAScore.innerHTML = missionScores.A + ' points [A]';
          missionBScore.innerHTML = missionScores.B + ' points [B]';
          springScore.innerHTML = missionScores.A + missionScores.B + ' points';
          summerMissionBScore = 0; // Reset the summer score for mission B at the end of the spring season
          break;
        case 1: // Summer
          summerMissionBScore = scoreMissionB(); 
          missionScores.B += summerMissionBScore; 
          missionScores.C = scoreMissionC();
          console.log('mission B score: ' + missionScores.B);
          console.log('mission C score: ' + missionScores.C);
          missionBScore.innerHTML = missionScores.B + ' points [B]';
          missionCScore.innerHTML = missionScores.C + ' points [C]';
          summerScore.innerHTML = summerMissionBScore + missionScores.C + ' points'; 
          autumnMissionCScore = 0;
          break;
        case 2: // Autumn
          autumnMissionCScore = scoreMissionC(); 
          missionScores.C += autumnMissionCScore; 
          missionScores.D = scoreMissionD();
          console.log('mission C score: ' + missionScores.C);
          console.log('mission D score: ' + missionScores.D);
          missionCScore.innerHTML = missionScores.C + ' points [C]';
          missionDScore.innerHTML = missionScores.D + ' points [D]';
          autumnScore.innerHTML = autumnMissionCScore + missionScores.D + ' points'; 
          winterMissionDScore = 0;
          winterMissionAScore = 0;
          break;
        case 3: // Winter
          winterMissionDScore = scoreMissionD(); 
          missionScores.D += winterMissionDScore; 
          winterMissionAScore = scoreMissionA();
          missionScores.A += winterMissionAScore;
          console.log('mission D score: ' + missionScores.D);
          console.log('mission A score: ' + missionScores.A);
          missionDScore.innerHTML = missionScores.D + ' points [D]';
          missionAScore.innerHTML = missionScores.A + ' points [A]';
          winterScore.innerHTML = winterMissionDScore + winterMissionAScore + ' points'; 
          break;
      }

      if (totalTime <= 0) {

        let gameOver = document.querySelector(".game-over");
        let endPoints = document.querySelector("#end-points");
        let body = document.querySelector(".full-container");
        let extraPoints = document.querySelector("#extra-points");

        missionDScore.innerHTML = missionScores.D + ' points [D]';
        missionAScore.innerHTML = missionScores.A + ' points [A]';
        winterScore.innerHTML = winterMissionDScore + winterMissionAScore + ' points'; 
        
        let encirclePoints = checkEncirclement();
        console.log('encirclePoints: ' + encirclePoints);

        let totalPoints = missionScores.A + missionScores.B + missionScores.C + missionScores.D + encirclePoints;
        totalScores.innerHTML = totalPoints + ' points';

        scoreA.innerHTML = missionScores.A;
        scoreB.innerHTML = missionScores.B;
        scoreC.innerHTML = missionScores.C;
        scoreD.innerHTML = missionScores.D;

        gameOver.style.display = "flex";
        endPoints.innerHTML = totalPoints;
        body.style.display = "block";
        extraPoints.innerHTML = encirclePoints;
        
        return;
      }

      currentSeason = (currentSeason + 1) % 4;
      seasonTime = seasonTime - 7; // Reset the season time
    
      elapsedTime.innerHTML = seasonTime;
      currentSeasonElement.innerHTML = seasons[currentSeason];

  }
  
  switch(currentSeason){
    case 0:
      missionAScore.style.color = "green";
      missionBScore.style.color = "green";
      missionCScore.style.color = "white";
      missionDScore.style.color = "white";
      break;
    case 1:
      missionAScore.style.color = "white";
      missionBScore.style.color = "green";
      missionCScore.style.color = "green";
      missionDScore.style.color = "white";
      break;
    case 2:
      missionAScore.style.color = "white";
      missionBScore.style.color = "white";
      missionCScore.style.color = "green";
      missionDScore.style.color = "green";
      break;
    case 3:
      missionAScore.style.color = "green";
      missionBScore.style.color = "white";
      missionCScore.style.color = "white";
      missionDScore.style.color = "green";
      break;
  }
  
  
}

matrix.forEach((row, y) => {
  row.forEach((cell, x) => {
    cell.addEventListener("click", () => {
      let canPlace = true;
      // finding first row and first column which has 1 from the left
      let rowOffset, colOffset;
      for (let i = 0; i < newShape.length; i++) {
        for (let j = 0; j < newShape[i].length; j++) {
          if (newShape[i][j] === 1) {
            rowOffset = i;
            colOffset = j;
            break;
          }
        }
        if (rowOffset !== undefined) break;
      }

      // First, check if we can place the new shape
      newShape.forEach((shapeRow, i) => {
        shapeRow.forEach((value, j) => {
          if (value === 1) {
            let placedCell = matrix[y + i - rowOffset] && matrix[y + i - rowOffset][x + j - colOffset];
            if (!placedCell || placedCell.style.backgroundImage !== baseImageUrl) {
              canPlace = false;
            }
          }
        });
      });

      // If we can place the new shape, then place it
      if (canPlace) {
        newShape.forEach((shapeRow, i) => {
          shapeRow.forEach((value, j) => {
            if (value === 1) {
              let placedCell = matrix[y + i - rowOffset][x + j - colOffset];
              let imageUrl;
              switch (randomElement.type) {
                case "water":
                  imageUrl = 'url("MapMakerPhotos/tiles/water_tile.png")';
                  break;
                case "town":
                  imageUrl = 'url("MapMakerPhotos/tiles/village_tile.png")';
                  break;
                case "farm":
                  imageUrl = 'url("MapMakerPhotos/tiles/plains_tile.png")';
                  break;
                case "forest":
                  imageUrl = 'url("MapMakerPhotos/tiles/forest_tile.png")';
                  break;
              }
              placedCell.style.backgroundImage = imageUrl;
            }
          });
        });
        // Update the time
        updateTimeAndScore(randomElement);

        if (totalTime > 0) {
          randomElement = elements[Math.floor(Math.random() * elements.length)];
          time.innerHTML = randomElement.time;
          clear();
          createRandomShape(randomElement);

        }

        console.log(totalTime);
        console.log(seasonTime);

      }
    });
  });
});

