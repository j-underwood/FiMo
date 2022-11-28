// Jacob Underwood
// Malia Nishimoto
// Jenna Sanchez
// Ethan Louisne

// Filled with FiMo title screen pictures during preload.
let homeImages;
// Filled with FiMo game selection pictures during preload.
let gameSelectionImages;
// Filled with maze-related images during preload.
let mazeImages;
// Filled with images used in flying fish during preload.
let fishImages;

// The five bubble locations [x, y, radius] on the home screen.
let topMainCirc = [415, 98, 73];
let midMainCirc = [556, 232, 76];
let botMainCirc = [374, 312, 73];
let supportMainCirc = [140, 295, 51];
let aboutMainCirc = [49, 355, 33];

// Used in all 3 games.
let backCirc = [50, 47, 39];

// The four bubble locations on the game selection screen. The first three are rectangles under the form [x1, y1, x2, y2].
let startMazeRect = [48, 81, 213, 228];
let startPianoRect = [248, 184, 418, 335];
let startFishRect = [442, 77, 606, 224];
let menuCirc = [83, 323, 57];

// The top left menu button used on many screens.
let menuOtherCirc = [50, 45, 37];

// The settings difficulty buttons.
let setEasyRect = [82, 322, 198, 357];
let setMedRect = [250, 322, 406, 357];
let setHardRect = [451, 322, 564, 357];

// Fonts
let mainFont;
let sharkFont;

// Sounds
let winSound;
let loseSound;

// Music
let menuMusic;
let gameMusic;

// Maze variables.

// Current crab location. Also can be used as a circle for mouse detection.
let crabLoc;
// Curent maze map.
let mazeMap;

// List of starting locations for each respective maze map. The additional entry of 30 is only used to detect when the mouse is over the crab.
let mazeStart = [
  [101, 153, 30],
  [41, 103, 30],
  [136, 291, 30],
];
// List of end locations. The additional entry is only used to detect when the crab location is over the treasure.
let mazeEnd = [
  [522, 243, 40],
  [526, 150, 40],
  [514, 151, 40],
];

// If crab has been clicked.
let crabSelected;
// Before crab has been selected for the first time.
let beforeCrabSelected = true;

// Frame that timer was started.
let timerStarted;
// Frame that timer should end.
let timerEnds;

// Boundaries for mazes.

// Applies to all of them; prevents user from going around the maze.
let outOfBounds = [
  [142, 0, 464, 39],
  [162, 365, 538, 400],
];

// Maze 0
let r00 = [139, 39, 464, 81];
let r01 = [138, 85, 183, 125];
let r02 = [321, 85, 368, 128];
let r03 = [415, 83, 462, 222];
let r04 = [465, 132, 533, 175];

let r05 = [137, 177, 187, 319];
let r06 = [230, 148, 279, 319];
let r07 = [324, 181, 373, 319];
let r08 = [418, 273, 460, 319];
let r09 = [136, 318, 460, 363];

let maze0 = [
  r00,
  r01,
  r02,
  r03,
  r04,
  r05,
  r06,
  r07,
  r08,
  r09,
  outOfBounds[0],
  outOfBounds[1],
];

// Maze 1
let r10 = [163, 37, 540, 80];
let r11 = [328, 84, 374, 222];
let r12 = [423, 83, 468, 127];
let r13 = [70, 131, 282, 174];
let r14 = [144, 247, 190, 317];
let r15 = [234, 177, 284, 316];
let r16 = [329, 271, 377, 314];
let r17 = [423, 177, 469, 310];
let r18 = [143, 317, 468, 361];

let maze1 = [
  r10,
  r11,
  r12,
  r13,
  r14,
  r15,
  r16,
  r17,
  r18,
  outOfBounds[0],
  outOfBounds[1],
];

// Maze 2
let r20 = [136, 39, 465, 83];
let r21 = [136, 85, 184, 131];
let r22 = [324, 86, 370, 222];
let r23 = [417, 85, 464, 129];
let r24 = [135, 133, 277, 178];
let r25 = [228, 179, 278, 218];
let r26 = [160, 225, 276, 266];
let r27 = [325, 273, 371, 315];
let r28 = [418, 177, 468, 314];
let r29 = [160, 320, 538, 361];

let maze2 = [
  r20,
  r21,
  r22,
  r23,
  r24,
  r25,
  r26,
  r27,
  r28,
  r29,
  outOfBounds[0],
  outOfBounds[1],
];

let mazeLayouts = [maze0, maze1, maze2];

// For all three games. Easy is 0, medium is 1, hard is 2.
let difficulty = 0;

// Current menu/game screen the program is on.
let currScreen;

// Current menu item a mouse is hovering over.
let currMenuItem;

// Declare sliders for setting screen.
let sfxSlider;
let musicSlider;

// Declare support inputs.
let problemInput;
let descInput;

// Shark Tunes variables.

// Total number of piano keys.
let numKeys;

// List representing each rectangle in the form [x1, y1, x2, y2, color].
let r1;
let r2;
let r3;
let r4;
let r5;
let r6;
let r7;

// List of all of the keys [r1, r2, etc.].
let keys;

// Currently colorized key.
let selected;
let selectedIndex;

// Sound
let song1;
let song2;
let song3;
let song4;
let song5;
let song6;
let song7;

// Compilation of all songs.
let songList;

// holds images for back button to game selection screen
let backToSelection;

//image of button
let img;

// Location adjustment.
let adj = 70;

let changeRect = [469, 110, 619, 219];

// Flying Fish variables.

let fishes = [];

let stopAdd = false;

// Fish and Piano Games

// Successful clicks.
let points;
// Goal of successful clicks.
let pointsGoal;

// Fish games

let beforeFishClicked = true;

function setup() {
  createCanvas(650, 400);

  currScreen = "main";
  setBackground(homeImages.noPop);

  // Set up sliders for settings.
  sfxSlider = createSlider(0, 100, 50, 5);
  sfxSlider.position(42, 231);
  sfxSlider.style("width", "566px");
  sfxSlider.hide();

  musicSlider = createSlider(0, 100, 50, 5);
  musicSlider.position(42, 131);
  musicSlider.style("width", "566px");
  musicSlider.hide();

  // Set up inputs for support.
  problemInput = createInput("");
  problemInput.position(23, 107);
  problemInput.size(593, 54);
  problemInput.style("background", "transparent");
  problemInput.style("border", "none");
  problemInput.hide();

  descInput = createInput("");
  descInput.position(23, 203);
  descInput.size(593, 157);
  descInput.style("background", "transparent");
  descInput.style("border", "none");
  descInput.hide();
}

function draw() {
  // print(mouseX, mouseY);

  // Music player

  if (
    [
      "main",
      "support",
      "gameSelection",
      "rewards",
      "about",
      "settings",
    ].includes(currScreen)
  ) {
    gameMusic.stop();
    menuMusic.loop();
  } else if (["maze", "fish"].includes(currScreen)) {
    menuMusic.stop();
    gameMusic.loop();
  } else if (currScreen == "piano") {
    gameMusic.stop();
    menuMusic.stop();
  }

  // This if statement checks when the mouse is within a designated shape and changes CurrMenuItem to reflect the current state.

  if (currScreen == "main") {
    if (inCircle(topMainCirc)) {
      currMenuItem = "topMain";
    } else if (inCircle(midMainCirc)) {
      currMenuItem = "midMain";
    } else if (inCircle(botMainCirc)) {
      currMenuItem = "botMain";
    } else if (inCircle(supportMainCirc)) {
      currMenuItem = "supportMain";
    } else if (inCircle(aboutMainCirc)) {
      currMenuItem = "aboutMain";
    } else {
      currMenuItem = "";
    }
  } else if (currScreen == "gameSelection") {
    if (inRect(startMazeRect)) {
      currMenuItem = "leftGame";
    } else if (inRect(startPianoRect)) {
      currMenuItem = "midGame";
    } else if (inRect(startFishRect)) {
      currMenuItem = "rightGame";
    } else if (inCircle(menuCirc)) {
      currMenuItem = "menuGame";
    } else {
      currMenuItem = "";
    }

    // Deal with menu button check for rewards, support, and about screen.
  } else if (["rewards", "support", "about"].includes(currScreen)) {
    if (inCircle(menuOtherCirc)) {
      currMenuItem = "menuOther";
    } else {
      currMenuItem = "";
    }
  } else if (currScreen == "settings") {
    updateVol();
    if (inCircle(menuOtherCirc)) {
      currMenuItem = "menuOther";
    } else if (inRect(setEasyRect)) {
      currMenuItem = "setEasy";
    } else if (inRect(setMedRect)) {
      currMenuItem = "setMed";
    } else if (inRect(setHardRect)) {
      currMenuItem = "setHard";
    } else {
      currMenuItem = "";
    }
  } else if (currScreen == "maze") {
    currMenuItem = "";
    if (inCircle(crabLoc) && mouseIsPressed) {
      crabSelected = true;
      beforeCrabSelected = false;
    }

    mazeBackground(mazeMap);
    // Draw cave at start.
    image(
      mazeImages.cave,
      mazeStart[mazeMap][0] - 95,
      mazeStart[mazeMap][1] - 150,
      200,
      200
    );
    // Draw treasure at end.
    image(
      mazeImages.treasure,
      mazeEnd[mazeMap][0] - 50,
      mazeEnd[mazeMap][1] - 100,
      200,
      200
    );
    // print(mazeMap);

    // Draw crab at current location.
    image(mazeImages.crab, crabLoc[0] - 45, crabLoc[1] - 45, 90, 90);
    if (crabSelected) {
      for (let i = 0; i < mazeLayouts[mazeMap].length; i++) {
        if (inRect(mazeLayouts[mazeMap][i])) {
          // print(i);
          // noFill();
          // stroke(5);
          // rectFromList(mazeLayouts[mazeMap][i]);
          timerEnds -= 60 / (4 - difficulty + 3);
          crabSelected = false;
        }
      }
    }
    if (crabSelected) {
      if (mouseIsPressed) {
        crabLoc = [mouseX, mouseY, 30];
      } else {
        crabSelected = false;
      }
    }
    if (inCircle(mazeEnd[mazeMap], crabLoc)) {
      // Redraw crab to make sure it is on the treasure, and also the treasure and cave themselves.
      mazeBackground(mazeMap);
      image(
        mazeImages.treasure,
        mazeEnd[mazeMap][0] - 50,
        mazeEnd[mazeMap][1] - 100,
        200,
        200
      );
      image(
        mazeImages.cave,
        mazeStart[mazeMap][0] - 95,
        mazeStart[mazeMap][1] - 150,
        200,
        200
      );
      crabLoc = mazeEnd[mazeMap];
      image(mazeImages.crab, crabLoc[0] - 45, crabLoc[1] - 45, 90, 90);
      endGame(true);
    }
    if (frameCount >= timerEnds) {
      endGame(false);
    } else {
      textAlign(LEFT);
      textFont(mainFont);
      textSize(50);
      fill(50);
      noStroke();
      text(floor((timerEnds - frameCount) / 60), 580, 50);
    }
    // Give directions on how to move crab
    if (beforeCrabSelected) {
      textAlign(LEFT);
      textFont(mainFont);
      textSize(25);
      fill(50, 50, 200);
      noStroke();
      text(
        "Drag crab",
        mazeStart[mazeMap][0] - 30,
        mazeStart[mazeMap][1] + 50,
        50
      );
    }

    image(backToSelection.noPop, 0, 0, 650, 400);
  } else if (currScreen == "piano") {
    // Display points and current time
    currMenuItem = "";
    fill(151, 199, 219);
    noStroke();
    rectFromList(changeRect);
    fill("white");
    textAlign(LEFT);
    textFont(sharkFont);
    textSize(25);
    text(
      "Time: " + floor((timerEnds - frameCount) / 60),
      changeRect[0],
      changeRect[1] + 20
    );
    text("Points: " + points, changeRect[0], changeRect[3] - 55);
    text("Goal: " + pointsGoal, changeRect[0], changeRect[3] - 20);
    if (frameCount >= timerEnds) {
      endGame(points >= pointsGoal);
    }
  } else if (currScreen == "fish") {
    currMenuItem = "";

    displayFish();
    if (frameCount >= timerEnds) {
      endGame(points >= pointsGoal);
    }

    image(backToSelection.noPop, 0, 0, 650, 400);
  }
}

function displayFish() {
  background(fishImages.ocean);
  image(fishImages.sun, 193, 5, 100, 100);

  for (let i = 0; i < fishes.length; i++) {
    image(fishImages.flyingFish, fishes[i].x, fishes[i].y, 80, 80);
    fishes[i].x += fishes[i].xVel;
    fishes[i].y += fishes[i].yVel;
    fishes[i].xVel += fishes[i].xAccel;
    fishes[i].yVel += fishes[i].yAccel;
    if (beforeFishClicked) {
      fill("white");
      stroke("black");
      textAlign(LEFT);
      textFont(sharkFont);
      textSize(20);
      text("Click fish", fishes[i].x + 15, fishes[i].y + 85, 50);
    }
    if (fishes[i].y > 400) {
      fishes.splice(i, 1);
      points--;
      i--;
    }
  }
  image(fishImages.overlayOcean, 0, 190, 650, 250);

  fill("white");
  stroke("black");
  textAlign(LEFT);
  textFont(sharkFont);
  textSize(20);
  text("Time: " + floor((timerEnds - frameCount) / 60), 510, 30);
  text("Points: " + points, 510, 49);
  text("Goal: " + pointsGoal, 510, 69);
}

function endGame(win) {
  currScreen = "";
  textAlign(CENTER);
  textFont(mainFont);
  textSize(80);
  noStroke();
  if (win) {
    fill(50, 200, 50);
    text("You won!", 0, 160, 650, 80);
    winSound.play();
  } else {
    fill(200, 50, 50);
    text("You lost!", 0, 160, 650, 80);
    loseSound.play();
  }
  setTimeout(function () {
    currScreen = "gameSelection";
    setBackground(gameSelectionImages.noPop);
  }, 4000);
}

function updateVol() {
  // SFX
  winSound.volume(sfxSlider.value() / 100);
  loseSound.volume(sfxSlider.value() / 100);

  for (let i = 0; i < songList.length; i++) {
    songList[i].volume(sfxSlider.value() / 100);
  }

  // Music
  gameMusic.volume(musicSlider.value() / 100);
  menuMusic.volume(musicSlider.value() / 100);
}

function startTimer(duration) {
  timerStarted = frameCount;
  timerEnds = frameCount + 60 * duration;
}

function mouseClicked() {
  // print(currScreen, currMenuItem);

  // This if statement changes screens when currMenuItem is not empty and the mouse is clicked.
  if (currMenuItem == "topMain") {
    setBackground(homeImages.startPop);

    // Delay to allow for bubble pop animation.
    setTimeout(function () {
      currScreen = "gameSelection";
      setBackground(gameSelectionImages.noPop);
    }, 500);
  } else if (currMenuItem == "midMain") {
    setBackground(homeImages.rewardPop);
    setTimeout(function () {
      currScreen = "rewards";
      setBackground(otherGUIImages.rewardNoPop);
    }, 500);
  } else if (currMenuItem == "botMain") {
    setBackground(homeImages.settingsPop);
    setTimeout(function () {
      currScreen = "settings";
      setupSettings();
    }, 500);
  } else if (currMenuItem == "supportMain") {
    setBackground(homeImages.supportPop);
    setTimeout(function () {
      currScreen = "support";
      setBackground(otherGUIImages.supportNoPop);
      problemInput.show();
      descInput.show();
    }, 500);
  } else if (currMenuItem == "aboutMain") {
    setBackground(homeImages.aboutPop);
    setTimeout(function () {
      currScreen = "about";
      setBackground(otherGUIImages.aboutNoPop);
    }, 500);
  } else if (currMenuItem == "menuGame") {
    setBackground(gameSelectionImages.menuPop);
    setTimeout(function () {
      currScreen = "main";
      setBackground(homeImages.noPop);
    }, 500);
  } else if (currMenuItem == "leftGame") {
    setBackground(gameSelectionImages.mazePop);
    setTimeout(function () {
      currScreen = "maze";
      setupMaze();
    }, 500);
  } else if (currMenuItem == "midGame") {
    setBackground(gameSelectionImages.pianoPop);
    setTimeout(function () {
      currScreen = "piano";
      setupPiano();
    }, 500);
  } else if (currMenuItem == "rightGame") {
    setBackground(gameSelectionImages.fishPop);
    setTimeout(function () {
      currScreen = "fish";
      setupFish();
    }, 500);
  } else if (currMenuItem == "menuOther") {
    if (currScreen == "rewards") {
      setBackground(otherGUIImages.rewardPop);
    } else if (currScreen == "settings") {
      setBackground(otherGUIImages.settingsPop);
      setupSettings(false);
    } else if (currScreen == "support") {
      setBackground(otherGUIImages.supportPop);
    } else if (currScreen == "about") {
      setBackground(otherGUIImages.aboutPop);
    }
    setTimeout(function () {
      if (currScreen == "settings") {
        sfxSlider.hide();
        musicSlider.hide();
      } else if (currScreen == "support") {
        problemInput.hide();
        descInput.hide();
      }
      currScreen = "main";
      setBackground(homeImages.noPop);
    }, 500);
  } else if (currMenuItem == "setEasy") {
    difficulty = 0;
    setupSettings();
  } else if (currMenuItem == "setMed") {
    difficulty = 1;
    setupSettings();
  } else if (currMenuItem == "setHard") {
    difficulty = 2;
    setupSettings();
  }

  // Piano mouse watch
  if (currScreen == "piano") {
    // When user clicks the currently selected key, select a new one.
    if (inRect(selected)) {
      points++;
      //once mouse clicked sound plays
      if (r1 === selected) {
        song1.play();
      }
      if (r2 === selected) {
        song2.play();
      }
      if (r3 === selected) {
        song3.play();
      }
      if (r4 === selected) {
        song4.play();
      }
      if (r5 === selected) {
        song5.play();
      }
      if (r6 === selected) {
        song6.play();
      }
      if (r7 === selected) {
        song7.play();
      }

      //once mouse clicked randomize again
      randomizeSelected();
    }
    if (inCircle(backCirc)) {
      fill(151, 199, 219);
      noStroke();
      backCirc[2] += 10;
      circleFromList(backCirc);
      image(backToSelection.startPop, 0, 0, 650, 400);

      currScreen = "";

      // Delay to allow for bubble pop animation.
      setTimeout(function () {
        currScreen = "gameSelection";
        setBackground(gameSelectionImages.noPop);
      }, 500);
    }
  } else if (currScreen == "fish") {
    for (let i = 0; i < fishes.length; i++) {
      if (inCircle([fishes[i].x + 30, fishes[i].y + 30, 30])) {
        fishes.splice(i, 1);
        points++;
        i--;
        beforeFishClicked = false;
      }
    }

    if (inCircle(backCirc)) {
      displayFish();

      image(backToSelection.startPop, 0, 0, 650, 400);

      currScreen = "";

      // Delay to allow for bubble pop animation.
      setTimeout(function () {
        currScreen = "gameSelection";
        setBackground(gameSelectionImages.noPop);
      }, 500);
    }
  } else if (currScreen == "maze") {
    if (inCircle(backCirc)) {
      // Redraw
      mazeBackground(mazeMap);
      image(
        mazeImages.treasure,
        mazeEnd[mazeMap][0] - 50,
        mazeEnd[mazeMap][1] - 100,
        200,
        200
      );
      image(
        mazeImages.cave,
        mazeStart[mazeMap][0] - 95,
        mazeStart[mazeMap][1] - 150,
        200,
        200
      );
      image(mazeImages.crab, crabLoc[0] - 45, crabLoc[1] - 45, 90, 90);
      textAlign(LEFT);
      textFont(mainFont);
      textSize(50);
      fill(50);
      noStroke();
      text(floor((timerEnds - frameCount) / 60), 580, 50);
      image(backToSelection.startPop, 0, 0, 650, 400);

      currScreen = "";

      // Delay to allow for bubble pop animation.
      setTimeout(function () {
        currScreen = "gameSelection";
        setBackground(gameSelectionImages.noPop);
      }, 500);
    }
  }
}

/**
  Add a randomized fish to the fishes array list.
  */
function addFish() {
  let fish = {
    x: floor(random(1, 200)),
    y: 350,
    xVel: floor(random(1, 3)),
    yVel: -8,
    xAccel: 0,
    yAccel: 0.1,
  };
  fishes.push(fish);
}

/**
  Waits a little bit then calls the addFish function. If the global variable stopAdd is true, it stops calling itself.
  */
function timedAddFish() {
  let minInterval = 2 * (difficulty + 1) - 3 * difficulty;
  let maxInterval = minInterval + 2;

  setTimeout(function () {
    addFish();
    if (!stopAdd) {
      timedAddFish();
    }
  }, floor(random(minInterval, 5)) * 1000);
}

/**
  Gets a random key and puts it in selected and draws it in color. Then, draws the rest of the rectangles without color.
  */
function randomizeSelected() {
  // Random rectangle
  let razzle;
  do {
    razzle = floor(random(1, numKeys + 1));
  } while (razzle == selectedIndex);
  selected = keys[razzle - 1];
  selectedIndex = razzle;

  fill(selected[4]);

  // Draw colorized rectangle.
  rectFromList(selected, 20);
  fill("white");

  // Draw rest of rectangles.
  for (let i = 0; i < numKeys; i++) {
    if (i != razzle - 1) {
      rectFromList(keys[i], 20);
    }
  }
}

function setupFish() {
  // Reset fish array
  fishes = [];

  // Generate fish.
  timedAddFish();

  // Reset points
  points = 0;

  // Set up difficutly specific info
  startTimer(30);

  if (difficulty == 0) {
    pointsGoal = 6;
  } else if (difficulty == 1) {
    pointsGoal = 9;
  } else {
    pointsGoal = 12;
  }
}

function setupMaze() {
  mazeMap = floor(random(0, 3));
  mazeBackground();

  if (mazeMap == 0) {
    crabLoc = mazeStart[0];
    image(mazeImages.cave, crabLoc[0], crabLoc[1]);
  } else if (mazeMap == 1) {
    crabLoc = mazeStart[1];
  } else {
    crabLoc = mazeStart[2];
  }

  if (difficulty == 0) {
    startTimer(30);
  } else if (difficulty == 1) {
    startTimer(15);
  } else {
    startTimer(8);
  }
}

function setupPiano(menuPop = false) {
  background("rgb(151,199,219)");

  if (!menuPop) {
    image(backToSelection.noPop, 0, 0, 650, 400);
  } else {
    image(backToSelection.startPop, 0, 0, 650, 400);
  }

  // Reset points.
  points = 0;

  //piano base
  noStroke();
  fill("gray");
  ellipse(195 + adj, 155, 350, 320);
  fill("gray");
  rect(20 + adj, 170, 350, 300);

  //eyes
  fill("black");
  ellipse(56 + adj, 46, 55, 55);
  fill("white");
  ellipse(60 + adj, 46, 50, 50);
  fill("black");
  ellipse(320 + adj, 46, 55, 55);
  fill("white");
  ellipse(315 + adj, 46, 50, 50);
  fill("#5CB0D6");
  ellipse(60 + adj, 46, 40, 40);
  fill("#5CB0D6");
  ellipse(315 + adj, 46, 40, 40);
  fill("black");
  ellipse(65 + adj, 48, 30, 30);
  fill("black");
  ellipse(310 + adj, 48, 30, 30);

  //nose
  fill("black");
  ellipse(210 + adj, 30, 5, 5);
  fill("black");
  ellipse(190 + adj, 30, 5, 5);

  //mouth
  fill("rgb(218,173,173)");
  ellipse(195 + adj, 235, 320, 320);
  fill("rgb(156,105,105)");
  ellipse(195 + adj, 235, 300, 300);

  //tongue
  fill("rgb(190,74,74)");
  ellipse(195 + adj, 295, 240, 180);

  //shark tunes title + instructions
  textAlign(LEFT);
  fill("white");
  textFont(sharkFont);
  textSize(30);
  text("Shark Tunes", 385 + adj - 30, 37);
  textSize(15);
  text("Click highlighted key", 420 + adj - 30, 70);
  text("Until time runs out", 430 + adj - 30, 95);

  //background fish
  strokeWeight(1);
  stroke("black");
  fill("orange");
  triangle(500 + adj, 330, 500 + adj, 270, 470 + adj, 300);
  ellipse(450 + adj, 300, 60, 40);
  triangle(600 + adj, 150, 550 + adj, 110, 550 + adj, 190);
  ellipse(600 + adj, 150, 60, 50);
  fill("black");
  ellipse(430 + adj, 300, 8, 8);
  ellipse(445 + adj, 300, 8, 8);
  ellipse(600 + adj, 150, 8, 8);
  ellipse(615 + adj, 150, 8, 8);
  fill("white");
  ellipse(430 + adj, 300, 5, 5);
  ellipse(445 + adj, 300, 5, 5);
  ellipse(600 + adj, 150, 5, 5);
  ellipse(615 + adj, 150, 5, 5);

  //fins
  noStroke();
  fill("gray");
  triangle(369 + adj, 195, 369 + adj, 342, 456 + adj, 274);
  triangle(20 + adj, 195, 20 + adj, 342, -67 + adj, 274);
  strokeWeight(1);
  stroke("black");

  // Set up rectangles. [x1, y1, x2, y2]
  r1 = [85 + adj, 120, 130 + adj, 215, color("red")];
  r2 = [145 + adj, 90, 190 + adj, 185, color("orange")];
  r3 = [205 + adj, 88, 250 + adj, 183, color("yellow")];
  r4 = [260 + adj, 120, 305 + adj, 210, color("green")];
  r5 = [110 + adj, 278, 155 + adj, 368, color("blue")];
  r6 = [170 + adj, 295, 215 + adj, 385, color("indigo")];
  r7 = [230 + adj, 280, 275 + adj, 370, color("violet")];

  // Establish keys list.
  keys = [r1, r2, r3, r4, r5, r6, r7];

  // Get number of keys.
  numKeys = keys.length;

  // Draw rectangles.

  for (let i = 0; i < numKeys; i++) {
    rectFromList(keys[i], 20);
  }

  // gum
  noFill();
  strokeWeight(5);
  stroke("rgb(128,80,80)");
  ellipse(195 + adj, 235, 300, 300);
  strokeWeight(1);
  stroke("black");

  // Colorizes the first rectangle randomly.
  if (!menuPop) {
    randomizeSelected();
  } else {
    fill(selected[4]);

    // Draw colorized rectangle.
    rectFromList(selected, 20);
  }

  // Timer and points goal.
  if (!menuPop) {
    if (difficulty == 0) {
      startTimer(30);
      pointsGoal = 10;
    } else if (difficulty == 1) {
      startTimer(15);
      pointsGoal = 12;
    } else {
      startTimer(8);
      pointsGoal = 8;
    }
  }
}

function mazeBackground() {
  if (mazeMap == 0) {
    setBackground(mazeImages.maze0);
  } else if (mazeMap == 1) {
    setBackground(mazeImages.maze1);
  } else {
    setBackground(mazeImages.maze2);
  }
}

function setupSettings(redisplayImg = true) {
  if (redisplayImg) {
    setBackground(otherGUIImages.settingsNoPop);
  }

  sfxSlider.show();
  musicSlider.show();

  noFill();
  stroke(255, 0, 0);
  strokeWeight(3);
  if (difficulty == 0) {
    rectFromList(setEasyRect);
  } else if (difficulty == 1) {
    rectFromList(setMedRect);
  } else if (difficulty == 2) {
    rectFromList(setHardRect);
  }
}

function preload() {
  // Set up fonts.

  mainFont = loadFont("assets/font.ttf");
  sharkFont = loadFont("assets/mclaren.ttf");

  // Set up an object to keep images organized.

  homeImages = {
    noPop: loadImage("assets/menuNoPop.PNG"),
    startPop: loadImage("assets/menuStartPop.PNG"),
    rewardPop: loadImage("assets/menuRewardPop.PNG"),
    settingsPop: loadImage("assets/menuSettingsPop.PNG"),
    supportPop: loadImage("assets/menuSupportPop.PNG"),
    aboutPop: loadImage("assets/menuAboutPop.PNG"),
  };
  gameSelectionImages = {
    noPop: loadImage("assets/gameNoPop.PNG"),
    mazePop: loadImage("assets/gameMazePop.PNG"),
    pianoPop: loadImage("assets/gamePianoPop.PNG"),
    fishPop: loadImage("assets/gameFishPop.PNG"),
    menuPop: loadImage("assets/gameMenuPop.PNG"),
  };
  otherGUIImages = {
    supportPop: loadImage("assets/supportPop.PNG"),
    supportNoPop: loadImage("assets/supportNoPop.PNG"),
    settingsPop: loadImage("assets/settingsPop.PNG"),
    settingsNoPop: loadImage("assets/settingsNoPop.PNG"),
    rewardPop: loadImage("assets/rewardPop.PNG"),
    rewardNoPop: loadImage("assets/rewardNoPop.PNG"),
    aboutPop: loadImage("assets/aboutPop.PNG"),
    aboutNoPop: loadImage("assets/aboutNoPop.PNG"),
  };
  mazeImages = {
    maze0: loadImage("assets/maze0.jpg"),
    maze1: loadImage("assets/maze1.jpg"),
    maze2: loadImage("assets/maze2.jpg"),
    crab: loadImage("assets/crab.PNG"),
    treasure: loadImage("assets/treasure.PNG"),
    cave: loadImage("assets/cave.PNG"),
  };
  fishImages = {
    flyingFish: loadImage("assets/flyingFish.gif"),
    sun: loadImage("assets/sun.gif"),
    ocean: loadImage("assets/ocean.jpg"),
    overlayOcean: loadImage("assets/overlayOcean.PNG"),
  };

  winSound = createAudio("assets/winSound.wav");
  loseSound = createAudio("assets/loseSound.wav");

  // Music

  gameMusic = createAudio("assets/gameMusic.mp3");
  menuMusic = createAudio("assets/menuMusic.mp3");

  // Piano

  song1 = createAudio("assets/key1.mp3");
  song2 = createAudio("assets/key2.mp3");
  song3 = createAudio("assets/key3.mp3");
  song4 = createAudio("assets/key4.mp3");
  song5 = createAudio("assets/key5.mp3");
  song6 = createAudio("assets/key6.mp3");
  song7 = createAudio("assets/key7.mp3");

  songList = [song1, song2, song3, song4, song5, song6, song7];

  //image to go back to selection screen
  backToSelection = {
    noPop: loadImage("assets/menuButton.PNG"),
    startPop: loadImage("assets/menuPop.PNG"),
  };
}

/**
  @param list List in the form [x1, y1, x2, y2]
  @param curve Curves the rectangle
  Creates a rectangle using the inputted list.
  */
function rectFromList(list, curve = 0) {
  let w = list[2] - list[0];
  let h = list[3] - list[1];
  rect(list[0], list[1], w, h, curve);
}

/**
  @param list List in the form [x, y, r]
  Creates a circle using the inputted list.
  */
function circleFromList(list) {
  circle(list[0], list[1], 2 * list[2]);
}

/**
  @param img Object that contains a loaded image
  Sets the background to an image with the correct width and height.
  */
function setBackground(img) {
  if (typeof img == "object") {
    image(img, 0, 0, 650, 400);
  } else {
    // When img is a string, this is used for testing purposes.
    background("black");
    fill("white");
    text(img, 100, 100);
  }
}

/**
  @param x, y, a, b Should be ints
  Find distance between points but more efficiently than dist because there is no square root required.
  */
function distSq(x, y, a, b) {
  return sq(x - a) + sq(y - b);
}

/**
  @param c Array with circle values.
  @param loc Optional parameter for [x, y].
  @return True if mouse in circle.
  */
function inCircle(c, loc = [mouseX, mouseY]) {
  return distSq(loc[0], loc[1], c[0], c[1]) <= sq(c[2]);
}

/**
  @param r Array with rectangle values.
  @return True if mouse in rectangle.
  */
function inRect(r) {
  return mouseX >= r[0] && mouseX <= r[2] && mouseY >= r[1] && mouseY <= r[3];
}
