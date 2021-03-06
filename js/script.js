var moveBoard = 360; // sets the initial position of board
var moveBoard2 = -144; // sets the board on start of round 2
var moveBoard3 = 486; // sets the board for switchback in round 2
var turnNum = 0; // sets variable to determine if X or O gets placed
var mark; //sets global variable for use in placing X or O to html
// scoring and array sets for score tracking
var p1scoreId = 0;
var p2scoreId = 0;
var p1scoring = [];
var p2scoring = [];
var p1scoreChange = 0;

var gameRound = 1; // counter for halftime/end game screens
var counter = 0; // counter used for main game timer
// while (gameCount === 0) {
setTimeout(function() {openningScreen();}, 2000);

var waveTwo = function () {
  var elements = document.getElementsByClassName('col');
  for(var mm=0; mm<elements.length; mm++) {
    elements[mm].style.border='5px solid red';
    elements[mm].style['-webkit-box-shadow'] = "4px 4px 15px red";
  }
};

var altTurn = function() {
  if (turnNum % 2 ===0) {
    mark = "X";
  }
  else {
    mark = "O";
  }
    turnNum += 1;

  };

function TicTacController($scope, $timeout) {
  $scope.rows = [['','','','','','','',''],['','','','','','','',''],['','','','','','','','']];
  gameTimer(44);
  timerBlockStart();

  // var lastGame;
  //     // Ask for all existing game info from firebase
  //     ticTacRef.once('value', function(gamesSnapshot) {
  //       // get the actual games data
  //       var games = gamesSnapshot.val();
  //       if(games == null)
  //       {
  //         // No games at all, so make a new game -- As if we're Areg
  //         lastGame = ticTacRef.push( {waiting: true} );
  //         playerNum = 1;
  //       }
  //       else  // I do have at least one game out there...
  //       {
  //         var keys = Object.keys(games);
  //         var lastGameKey = keys[ keys.length - 1 ];
  //         var lastGame = games[ lastGameKey ];
  //         console.log("This person's game: " + lastGameKey);
  //         if(lastGame.waiting)
  //         {
  //           // Currently someone is waiting -- Areg is there and we're Rocky
  //           // Grab from Firebase its last game object
  //           lastGame = ticTacRef.child(lastGameKey);
  //           // Set a new game on this
  //           lastGame.set( {waiting:false, playerTurn: 0, won: false, board: [0,0,0,0,0,0,0,0,0]} );
  //           playerNum = 2;
  //         }
  //         else
  //         {
  //           // Make a new game -- As if we're Areg
  //           lastGame = ticTacRef.push( {waiting: true} );
  //           playerNum = 1;
  //         }
  //       }
  //       // Attach the last game to what we're up to
  //       $scope.game = $firebase(lastGame);

  

  var gameOver = function() {
    var box = $scope.rows;
      if ((box[0][5] == "X" || box[0][5] == "O") && (box[0][6] == "X" || box[0][6] == "O") && (box[0][7] == "X" || box[0][7] == "O") && (box[1][5] == "X" || box[1][5] == "O") && (box[1][6] == "X" || box[1][6] == "O") && (box[1][7] == "X" || box[1][7] == "O") && (box[2][5] == "X" || box[2][5] == "O") && (box[2][6] == "X" || box[2][6] == "O") && (box[2][7] == "X" || box[2][7] == "O")) {
        console.log("gameover");
        if (gameRound === 1) {
          $timeout(gameReset, 5000);
          setTimeout(function() {halftimeSummary();}, 2000);
          gameRound += 1;
        }
        else {
          setTimeout(function() {determineWinner();}, 2000);
          
        }

        // setTimeout(function() {boardClear();}, 2000);
        // setTimeout(function() {boardClear();}, 2000);
        
        

      }
  
};
  

// checkForScore uses a loop that will check each possible score
  var checkForScore = function() {
    baseBox = $scope.rows;
    gameOver();

    
    var r1 = 0; var r2 = 1; var r3 = 2;
    var c1 = 0; var c2 = 1; var c3 = 2;
    var c4 = 0; var c5 = 1; var c6 = 2;
    var c7 = 0; var c8 = 1; var c9 = 2;
    var c10 = 0;
    var dr1 = 0; var dr2 = 1; var dr3 = 2;
    var dc1 = 0; var dc2 = 1; var dc3 = 2;
    var dc4 = 0; var dc5 = 1; var dc6 = 2;
    var p1s = 100; var p2s = -100;

    // first chunk of code checks all possible horizontal scores
    for (x = 0; x < 12; x++) {
      if (baseBox[r1][c1] + baseBox[r1][c2] + baseBox[r1][c3] == "XXX") {
        console.log(p1s);
        p1scoreId = p1s;
        fairScoreTracker1(p1scoreId);
      }
      else if (baseBox[r1][c1] + baseBox[r1][c2] + baseBox[r1][c3] == "OOO") {
        console.log(p2s);
        p2scoreId = p2s;
        fairScoreTracker2(p2scoreId);
      }
      c1 += 1; c2 += 1; c3 += 1; x += 1; p1s += 1; p2s -= 1;
    }
    for (s = 0; s < 12; s++) {
      if (baseBox[r2][c4] + baseBox[r2][c5] + baseBox[r2][c6] == "XXX") {
        console.log(p1s);
        p1scoreId = p1s;
        fairScoreTracker1(p1scoreId);
      }
      else if (baseBox[r2][c4] + baseBox[r2][c5] + baseBox[r2][c6] == "OOO") {
        console.log(p2s);
        p2scoreId = p2s;
        fairScoreTracker2(p2scoreId);

      }
      c4 += 1; c5 += 1; c6 += 1; s += 1; p1s += 1; p2s -= 1;
    }
    for (t = 0; t < 12; t++) {
      if (baseBox[r3][c7] + baseBox[r3][c8] + baseBox[r3][c9] == "XXX") {
        console.log(p1s);
        p1scoreId = p1s;
        fairScoreTracker1(p1scoreId);
      }
      else if (baseBox[r3][c7] + baseBox[r3][c8] + baseBox[r3][c9] == "OOO") {
        console.log(p2s);
        p2scoreId = p2s;
        fairScoreTracker2(p2scoreId);
      }
      c7 += 1; c8 += 1; c9 += 1; t += 1; p1s += 1; p2s -= 1;
    }
    //--------------------------------------
    // beginning of vertical score checking
    for (w = 0; w < 16; w++) {
      if (baseBox[r1][c10] + baseBox[r2][c10] + baseBox[r3][c10] == "XXX") {
        console.log(p1s);
        p1scoreId = p1s;
        fairScoreTracker1(p1scoreId);
      }
      else if (baseBox[r1][c10] + baseBox[r2][c10] + baseBox[r3][c10] == "OOO") {
        console.log(p2s);
        p2scoreId = p2s;
        fairScoreTracker2(p2scoreId);
      }
      c10 += 1; w += 1; p1s += 1; p2s -= 1;
    }
    //--------------------------------------
    // beginning of diagonal-down score checking
    for (q = 0; q < 12; q++) {
      if (baseBox[dr1][dc1] + baseBox[dr2][dc2] + baseBox[dr3][dc3] == "XXX") {
        console.log(p1s);
        p1scoreId = p1s;
        fairScoreTracker1(p1scoreId);
      }
      else if (baseBox[dr1][dc1] + baseBox[dr2][dc2] + baseBox[dr3][dc3] == "OOO") {
        console.log(p2s);
        p2scoreId = p2s;
        fairScoreTracker2(p2scoreId);
      }
      dc1 += 1; dc2 += 1; dc3 += 1; q += 1; p1s += 1; p2s -= 1;
    }
    //-----------------------------------------
    // beginning of diagonal-up score checking
    for (u = 0; u < 12; u++) {
      if (baseBox[dr3][dc4] + baseBox[dr2][dc5] + baseBox[dr1][dc6] == "XXX") {
        console.log(p1s);
        p1scoreId = p1s;
        fairScoreTracker1(p1scoreId);
      }
      else if (baseBox[dr3][dc4] + baseBox[dr2][dc5] + baseBox[dr1][dc6] == "OOO") {
        console.log(p2s);
        p2scoreId = p2s;
        fairScoreTracker2(p2scoreId);
      }
      dc4 += 1; dc5 += 1; dc6 += 1; u += 1; p1s += 1; p2s -= 1;
    }
    //-----------------------------------------
    console.log(p1scoreId.length);
    $scope.p1Score = p1scoring.length;
    $scope.p2Score = p2scoring.length;

   
};
  var gameReset = function() {
    $scope.rows = [['','','','','','','',''],['','','','','','','',''],['','','','','','','','']];
   
  };



  $scope.makeMove = function(r, c){
 
    
    cell = $scope.rows[r][c];
    
    if (cell != "X" && cell != "O") {
      altTurn();
      $scope.rows[r][c] = mark;
    }
    checkForScore();
  };
}


function gameTimer(num) {


for (i=num;i>-1;i--) {

(function(i) {
    window.setTimeout(function(counter)
    {
      var therows = document.getElementsByClassName("row2");
          if (i < 31 && i > 9 && i % 5 === 0) {
            for (var y = 0; y < therows.length; y++) {
              
              therows[y].style.marginLeft=moveBoard +"px";
              console.log(y);
            }
            moveBoard -= 126;
          }
          document.getElementById("counter_text").innerHTML = i.toString();
    }, counter*1000);
    counter += 1;
    }(i));
}
}

function gameTimerSecondHalf(num) {

var counter = 0;
for (i=num;i>-1;i--) {

(function(i) {
    window.setTimeout(function(counter)
    {
      var therows = document.getElementsByClassName("row2");
          if (i < 17 && i > 0 && i % 3 === 0) {
            for (var y = 0; y < therows.length; y++) {
              
              therows[y].style.marginLeft=moveBoard2 +"px";
              console.log(y);
            }
            moveBoard2 += 126;
          }
          document.getElementById("counter_text").innerHTML = i.toString();
    }, counter*1000);
    counter += 1;
    }(i));
}
}
function gameTimerSecondHalfPt2(num) {

var counter = 0;
for (w=num;w>-1;w--) {

(function(w) {
    window.setTimeout(function(counter)
    {
      var therows = document.getElementsByClassName("row2");
          if (w < 19 && w > 0 && w % 3 === 0) {
            for (var e = 0; e < therows.length; e++) {
              
              therows[e].style.marginLeft=moveBoard3 +"px";
              console.log(e);
            }
            moveBoard3 -= 126;
          }
          document.getElementById("counter_text").innerHTML = w.toString();
    }, counter*1000);
    counter += 1;
    }(w));
}
}




function fairScoreTracker1(scoreId) {
  isThere = false;
  for (item = 0; item < p1scoring.length; item++) {
    if (scoreId == p1scoring[item]) {

      isThere=true;
      break;
    }
  }
  if(!isThere) {
    p1scoring.push(p1scoreId);
    scorePopup('pointp1');
    popupReset('pointp1');
    p1scoreBoxPop('ScorePlayer1');
    blinkId('ScorePlayer1');
    p1BoxPopReset('ScorePlayer1');
    p1boardScore('boardContainer');
  }

}
function fairScoreTracker2(scoreId) {
  isThere = false;
  for (item = 0; item < p2scoring.length; item++) {
    if (scoreId == p2scoring[item]) {
      isThere=true;
      break;
    }
  }
  if(!isThere) {
    p2scoring.push(p2scoreId);
    scorePopup('pointp2');
    popupReset('pointp2');
    blinkId('ScorePlayer1');
    p2scoreBoxPop('ScorePlayer2');
    p2BoxPopReset('ScorePlayer2');
    p2boardScore('boardContainer');
  }
}
function scorePopup (elementId) {
  document.getElementById(elementId).style.display="block";
}
function popupReset(elementId) {
    setTimeout(function() {document.getElementById(elementId).style.display="none";}, 2000);
}
function p1scoreBoxPop (elementId) {
  document.getElementById(elementId).style.background="rgba(97,37,106,.6)";
}
function p1BoxPopReset (elementId) {
    setTimeout(function() {document.getElementById(elementId).style.background="black";}, 1000);
}
function p2scoreBoxPop (elementId) {
  document.getElementById(elementId).style.background="rgba(0,165,204,.6)";
}
function p2BoxPopReset (elementId) {
    setTimeout(function() {document.getElementById(elementId).style.background="black";}, 1000);
}
function p1boardScore (elementId) {
  document.getElementById(elementId).style.backgroundColor="rgba(97, 21, 106, .5)";
  setTimeout(function() {document.getElementById(elementId).style.backgroundColor="black";}, 200);
}
function p2boardScore (elementId) {
  document.getElementById(elementId).style.backgroundColor="rgba(0, 165, 204, .5)";
  setTimeout(function() {document.getElementById(elementId).style.backgroundColor="black";}, 200);
}
var cnt = 0;
function blinkId(id) {
  while (cnt < 8) {
    var eye = document.getElementById(id);
    if(eye.style.visibility=='hidden') {
      eye.style.visibility='visible';
    } else {
      eye.style.visibility='hidden';
    }
      setTimeout("blinkId('"+id+"')",100);
      cnt += 1;
    return true;
  }
}
var halftimeSummary = function () {
  halftimeScreen();
  setTimeout(function() {waveTwoText();}, 6000);
  timerBlock();
  gameTimerSecondHalf(24);
  setTimeout(function() {gameTimerSecondHalfPt2(18);}, 24000);
  
  setTimeout(function() {waveTwo();}, 6000);
  if(p1scoring.length > p2scoring.length) {
    setTimeout(function() {p1HalftimeLeadScreen();}, 3000);
  }
  else if(p2scoring.length > p1scoring.length) {
    setTimeout(function() {p2HalftimeLeadScreen();}, 3000);
  }
  else {
    setTimeout(function() {halftimeTieScreen();}, 3000);
  }
  

};
var determineWinner = function () {
  if(p1scoring.length > p2scoring.length) {
    setTimeout(function() {winningScreen1();}, 1200);
  }
  else if(p2scoring.length > p1scoring.length) {
    setTimeout(function() {winningScreen2();}, 1200);
  }
  else {
    setTimeout(function() {tieScreen();}, 1200);
  }
  
};
  var winningScreen1 = function () {
    document.getElementById("winScreen1").style.display="block";
    document.getElementById("winText1").style.display="inline-block";
  };
  var winningScreen2 = function () {
    document.getElementById("winScreen2").style.display="block";
    document.getElementById("winText2").style.display="inline-block";
  };
  var tieScreen = function () {
    document.getElementById("tieScreen").style.display="block";
    document.getElementById("tieText").style.display="inline-block";

  };
  var openningScreen = function () {
    setTimeout(function() {document.getElementById("startScreen").style.display="none";}, 2000);
    document.getElementById("startText").style.display="none";
    document.getElementById("startRnd1Text").style.display="inline-block";
    setTimeout(function() {document.getElementById("startRnd1Text").style.display="none";}, 2000);

  };
  var halftimeScreen = function () {
    document.getElementById("halftimeScreen").style.display="inline-block";
    document.getElementById("halftimeText").style.display="inline-block";
    setTimeout(function() {document.getElementById("halftimeText").style.display="none";}, 3000);
    setTimeout(function() {document.getElementById("halftimeScreen").style.display="none";}, 3000);
  };
  var halftimeReset = function () {
    setTimeout(function() {halftimeScreen();}, 2000);
 };
  var p1HalftimeLeadScreen = function () {
    document.getElementById("p1HalfLead").style.display="block";
    document.getElementById("p1HalfLeadText").style.display="inline-block";
    setTimeout(function() {document.getElementById("p1HalfLead").style.display="none";}, 3000);
    setTimeout(function() {document.getElementById("p1HalfLeadText").style.display="none";}, 3000);
  };
  var p2HalftimeLeadScreen = function () {
    document.getElementById("p2HalfLead").style.display="block";
    document.getElementById("p2HalfLeadText").style.display="inline-block";
    setTimeout(function() {document.getElementById("p2HalfLead").style.display="none";}, 3000);
    setTimeout(function() {document.getElementById("p2HalfLeadText").style.display="none";}, 3000);
  };
  var halftimeTieScreen = function () {
    document.getElementById("halfTie").style.display="block";
    document.getElementById("halfTieText").style.display="inline-block";
    setTimeout(function() {document.getElementById("halfTie").style.display="none";}, 3000);
    setTimeout(function() {document.getElementById("halfTieText").style.display="none";}, 3000);
  };
  var timerBlock = function () {
    document.getElementById("blockTimer").style.display="block";
    setTimeout(function() {document.getElementById("blockTimer").style.display="none";}, 9000);
  };
  var timerBlockStart = function () {
    document.getElementById("blockTimer").style.display="block";
    setTimeout(function() {document.getElementById("blockTimer").style.display="none";}, 4000);
  };
  var waveTwoText = function () {
    document.getElementById("halftimeScreen2").style.display="inline-block";
    document.getElementById("waveTwoText").style.display="block";
    setTimeout(function() {document.getElementById("waveTwoText").style.display="none";}, 2000);
    setTimeout(function() {document.getElementById("halftimeScreen2").style.display="none";}, 2000);
  };
  // var secondHalf = function () {
  //   gameTimerRound2(45);
  // }



  // var boardPulse = function ()
  // document.getElementById("startScreen").style.display="none";

// var clearGame = function () {

// }