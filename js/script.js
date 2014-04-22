var moveBoard = 360; // sets the initial position of board
var turnNum = 0; // sets variable to determine if X or O gets placed
var mark; //sets global variable for use in placing X or O to html


var altTurn = function() {
  if (turnNum % 2 ===0) {
    mark = 1;
  }
  else {
    mark = -1;
  }
    turnNum += 1;
  };
// var exclusiveNum = function () {

// }
function TicTacController($scope) {
  $scope.rows = [['a','b','c','d','e','f','g','h'],['j','k','l','m','n','o','p','q'],['s','t','u','v','w','x','y','z']];
  gameTimer(40);

// checkForScore uses a loop that will check each possible score
  var checkForScore = function() {
    baseBox = $scope.rows;

    
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
      if (baseBox[r1][c1] + baseBox[r1][c2] + baseBox[r1][c3] == 3) {
        console.log(p1s);
      }
      else if (baseBox[r1][c1] + baseBox[r1][c2] + baseBox[r1][c3] == -3) {
        console.log(p2s);
      }
      c1 += 1; c2 += 1; c3 += 1; x += 1; p1s += 1; p2s -= 1;
    }
    for (s = 0; s < 12; s++) {
      if (baseBox[r2][c4] + baseBox[r2][c5] + baseBox[r2][c6] == 3) {
        console.log(p1s);
      }
      else if (baseBox[r2][c4] + baseBox[r2][c5] + baseBox[r2][c6] == -3) {
        console.log(p2s);
      }
      c4 += 1; c5 += 1; c6 += 1; s += 1; p1s += 1; p2s -= 1;
    }
    for (t = 0; t < 12; t++) {
      if (baseBox[r3][c7] + baseBox[r3][c8] + baseBox[r3][c9] == 3) {
        console.log(p1s);
      }
      else if (baseBox[r3][c7] + baseBox[r3][c8] + baseBox[r3][c9] == -3) {
        console.log(p2s);
      }
      c7 += 1; c8 += 1; c9 += 1; t += 1; p1s += 1; p2s -= 1;
    }
    //--------------------------------------
    // beginning of vertical score checking
    for (w = 0; w < 18; w++) {
      if (baseBox[r1][c10] + baseBox[r2][c10] + baseBox[r3][c10] == 3) {
        console.log(p1s);
      }
      else if (baseBox[r1][c10] + baseBox[r2][c10] + baseBox[r3][c10] == -3) {
        console.log(p2s);
      }
      c10 += 1; w += 1; p1s += 1; p2s -= 1;
    }
    //--------------------------------------
    // beginning of diagonal-down score checking
    for (q = 0; q < 18; q++) {
      if (baseBox[dr1][dc1] + baseBox[dr2][dc2] + baseBox[dr3][dc3] == 3) {
        console.log(p1s);
      }
      else if (baseBox[dr1][dc1] + baseBox[dr2][dc2] + baseBox[dr3][dc3] == -3) {
        console.log(p2s);
      }
      dc1 += 1; dc2 += 1; dc3 += 1; q += 1; p1s += 1; p2s -= 1;
    }
    //-----------------------------------------
    // beginning of diagonal-up score checking
    for (u = 0; u < 18; u++) {
      if (baseBox[dr3][dc4] + baseBox[dr2][dc5] + baseBox[dr1][dc6] == 3) {
        console.log(p1s);
      }
      else if (baseBox[dr3][dc4] + baseBox[dr2][dc5] + baseBox[dr1][dc6] == -3) {
        console.log(p2s);
      }
      dc4 += 1; dc5 += 1; dc6 += 1; u += 1; p1s += 1; p2s -= 1;
    }
    //-----------------------------------------

   
};




  $scope.makeMove = function(r, c){
    console.log($scope);
    console.log("box later: " + $scope.rows);
    
    cell = $scope.rows[r][c];
    console.log($scope.rows[c]);
    if (cell != 1 && cell != -1) {
      altTurn();
      $scope.rows[r][c] = mark;
    }
    else {
      alert('Hey!');
      
    }
    checkForScore();
  };
}
var endGame = 0;

function gameTimer(num) {

var counter = 0;
for (i=num;i>-1;i--) {

(function(i) {
    window.setTimeout(function(counter)
    {
      var therows = document.getElementsByClassName("row2");
          if (i < 31 && i % 5 === 0) {
            for (var y = 0; y < therows.length; y++) {
              
              therows[y].style.marginLeft=moveBoard +"px";
              console.log(y);
            }
            moveBoard = moveBoard - 120;
    }
    
    else
    {
      console.log(i);
      document.getElementById("counter_text").innerHTML = i.toString();
      }
      }, counter*1000);

    counter += 1;
    }(i));
}
}
