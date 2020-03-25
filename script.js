// back end programming
var activePlayerBalls = [0,0];
var activePlayer = 0;
var activePlayerWicket = [0,0];
var activePlayerScore = [0,0];
var timeline = [];
var target = 0;
var winner = null;

var oneFirstWicket = 0;
var oneSecondWicket = 0;
var oneThirdWicket = 0;
var oneFourthWicket = 0;
var oneFifthWicket = 0;
var oneSixthWicket = 0;

function submit(){

    //front end programming

//between this
var playerOneHeader = document.getElementById("player-one-header");
var playerTwoHeader = document.getElementById("player-two-header");

//and this

//getting input values
var nameOne = document.getElementById("playerOne").value;
var nameTwo = document.getElementById("playerTwo").value;

//playerOneHeader.innerHTML = (nameOne);
//playerTwoHeader.innerHTML = (nameTwo);

var activePlayerStr = [nameOne,nameTwo];

//console.log(activePlayer);

//clearing boxes onclick
var form = document.getElementById("form");
form.innerHTML = ("");

//getting names onclick
 //console.log(nameOne);
//console.log(nameTwo);
 
    //defining who is playing
    var heading = document.getElementById("innings-header");
    heading.innerHTML = (activePlayerStr[activePlayer] + " is Playing");




    var oneRun = document.getElementById("one-run");
    oneRun.onclick  = function(){
        activePlayerBalls[activePlayer]++;
        activePlayerScore[activePlayer]++;
        console.log(activePlayerScore);
        console.log(activePlayerBalls);
        timeline.push(1);
        document.getElementById("player-one-score").innerHTML = (nameOne+"'s Score: "+activePlayerScore[0]);
        document.getElementById("player-two-score").innerHTML = (nameTwo+"'s Score: "+activePlayerScore[1]);
        document.getElementById("one-balls").innerHTML = (nameOne+"'s Balls: "+activePlayerBalls[0]);
        document.getElementById("two-balls").innerHTML = (nameTwo+"'s Balls: "+activePlayerBalls[1]);
        document.getElementById("one-wickets").innerHTML = (nameOne+"'s Wickets:"+activePlayerWicket[0]);
        document.getElementById("two-wickets").innerHTML = (nameTwo+"'s Wickets:"+activePlayerWicket[1]);
        if(activePlayerWicket[0]===10&&activePlayerScore[1]>=target){
            console.log("Player Two won!");
            document.getElementById("innings-header").innerHTML = (nameTwo+" wins the Game");
        }
    }

    var twoRun = document.getElementById("two-run");
    twoRun.onclick = function(){
        activePlayerBalls[activePlayer]++;
        activePlayerScore[activePlayer] += 2;
        console.log(activePlayerScore);
       //console.log(activePlayerBalls);
       timeline.push(2);
       document.getElementById("player-one-score").innerHTML = (nameOne+"'s Score: "+activePlayerScore[0]);
       document.getElementById("player-two-score").innerHTML = (nameTwo+"'s Score: "+activePlayerScore[1]);
       document.getElementById("one-balls").innerHTML = (nameOne+"'s Balls: "+activePlayerBalls[0]);
       document.getElementById("two-balls").innerHTML = (nameTwo+"'s Balls: "+activePlayerBalls[1]);
       document.getElementById("one-wickets").innerHTML = (nameOne+"'s Wickets:"+activePlayerWicket[0]);
       document.getElementById("two-wickets").innerHTML = (nameTwo+"'s Wickets:"+activePlayerWicket[1]);
       if(activePlayerWicket[0]===10&&activePlayerScore[1]>=target){
        console.log("Player Two won!");
        document.getElementById("innings-header").innerHTML = (nameTwo+" wins the Game");
    }
    }

    var threeRun = document.getElementById("three-run");
    threeRun.onclick = function(){
        activePlayerBalls[activePlayer]++;
        activePlayerScore[activePlayer] += 3;
        console.log(activePlayerScore);
        timeline.push(3);
        document.getElementById("player-one-score").innerHTML = (nameOne+"'s Score: "+activePlayerScore[0]);
        document.getElementById("player-two-score").innerHTML = (nameTwo+"'s Score: "+activePlayerScore[1]);
        document.getElementById("one-balls").innerHTML = (nameOne+"'s Balls: "+activePlayerBalls[0]);
        document.getElementById("two-balls").innerHTML = (nameTwo+"'s Balls: "+activePlayerBalls[1]);
        document.getElementById("one-wickets").innerHTML = (nameOne+"'s Wickets:"+activePlayerWicket[0]);
        document.getElementById("two-wickets").innerHTML = (nameTwo+"'s Wickets:"+activePlayerWicket[1]);
        if(activePlayerWicket[0]===10&&activePlayerScore[1]>=target){
            console.log("Player Two won!");
            document.getElementById("innings-header").innerHTML = (nameTwo+" wins the Game");
        }
    }

    var fourRun = document.getElementById("four-run");
    fourRun.onclick = function(){
        activePlayerBalls[activePlayer]++;
        activePlayerScore[activePlayer] += 4;
        console.log(activePlayerScore);
        console.log(activePlayerBalls);
        timeline.push(4);
        document.getElementById("player-one-score").innerHTML = (nameOne+"'s Score: "+activePlayerScore[0]);
        document.getElementById("player-two-score").innerHTML = (nameTwo+"'s Score: "+activePlayerScore[1]);
        document.getElementById("one-balls").innerHTML = (nameOne+"'s Balls: "+activePlayerBalls[0]);
        document.getElementById("two-balls").innerHTML = (nameTwo+"'s Balls: "+activePlayerBalls[1]);
        document.getElementById("one-wickets").innerHTML = (nameOne+"'s Wickets:"+activePlayerWicket[0]);
        document.getElementById("two-wickets").innerHTML = (nameTwo+"'s Wickets:"+activePlayerWicket[1]);
        if(activePlayerWicket[0]===10&&activePlayerScore[1]>=target){
            console.log("Player Two won!");
            document.getElementById("innings-header").innerHTML = (nameTwo+" wins the Game");
        }
    }

    var sixRun = document.getElementById("six-run");
    sixRun.onclick = function(){
        activePlayerBalls[activePlayer]++;
        activePlayerScore[activePlayer] += 6;
        console.log(activePlayerScore);
        timeline.push(6);
        console.log(timeline);
        document.getElementById("player-one-score").innerHTML = (nameOne+"'s Score: "+activePlayerScore[0]);
        document.getElementById("player-two-score").innerHTML = (nameTwo+"'s Score: "+activePlayerScore[1]);
        document.getElementById("one-balls").innerHTML = (nameOne+"'s Balls: "+activePlayerBalls[0]);
        document.getElementById("two-balls").innerHTML = (nameTwo+"'s Balls: "+activePlayerBalls[1]);
        document.getElementById("one-wickets").innerHTML = (nameOne+"'s Wickets:"+activePlayerWicket[0]);
        document.getElementById("two-wickets").innerHTML = (nameTwo+"'s Wickets:"+activePlayerWicket[1]);
        if(activePlayerWicket[0]===10&&activePlayerScore[1]>=target){
            console.log("Player Two won!");
            document.getElementById("innings-header").innerHTML = (nameTwo+" wins the Game");
        }
    }
    
    var wide = document.getElementById("wide");
    wide.onclick = function(){
        activePlayerScore[activePlayer]++;
        console.log(activePlayerBalls);
        console.log(activePlayerScore);
        timeline.push("Wd");
        console.log(timeline);
        document.getElementById("player-one-score").innerHTML = (nameOne+"'s Score: "+activePlayerScore[0]);
        document.getElementById("player-two-score").innerHTML = (nameTwo+"'s Score: "+activePlayerScore[1]);
        document.getElementById("one-balls").innerHTML = (nameOne+"'s Balls: "+activePlayerBalls[0]);
        document.getElementById("two-balls").innerHTML = (nameTwo+"'s Balls: "+activePlayerBalls[1]);
        document.getElementById("one-wickets").innerHTML = (nameOne+"'s Wickets:"+activePlayerWicket[0]);
        document.getElementById("two-wickets").innerHTML = (nameTwo+"'s Wickets:"+activePlayerWicket[1]);
        if(activePlayerWicket[0]===10&&activePlayerScore[1]>=target){
            console.log("Player Two won!");
            document.getElementById("innings-header").innerHTML = (nameTwo+" wins the Game");
        }
    }

    var noBall = document.getElementById("no-ball");
    noBall.onclick = function(){
        activePlayerScore[activePlayer]++;
        console.log(activePlayerBalls);
        console.log(activePlayerScore);
        timeline.push("Nb");
        document.getElementById("player-one-score").innerHTML = (nameOne+"'s Score: "+activePlayerScore[0]);
        document.getElementById("player-two-score").innerHTML = (nameTwo+"'s Score: "+activePlayerScore[1]);
        document.getElementById("one-balls").innerHTML = (nameOne+"'s Balls: "+activePlayerBalls[0]);
        document.getElementById("two-balls").innerHTML = (nameTwo+"'s Balls: "+activePlayerBalls[1]);
        document.getElementById("one-wickets").innerHTML = (nameOne+"'s Wickets:"+activePlayerWicket[0]);
        document.getElementById("two-wickets").innerHTML = (nameTwo+"'s Wickets:"+activePlayerWicket[1]);
        if(activePlayerWicket[0]===10&&activePlayerScore[1]>=target){
            console.log("Player Two won!");
            document.getElementById("innings-header").innerHTML = (nameTwo+" wins the Game");
        }
    }

    var wicket = document.getElementById("wicket");
    wicket.onclick = function(){

        activePlayerWicket[activePlayer]++;
       // console.log(activePlayer);
        console.log(activePlayerWicket);
        activePlayerBalls[activePlayer]++;
        timeline.push("W");
        timeline.push("|");
        //activePlayerBalls++;

        document.getElementById("player-one-score").innerHTML = (nameOne+"'s Score: "+activePlayerScore[0]);
        document.getElementById("player-two-score").innerHTML = (nameTwo+"'s Score: "+activePlayerScore[1]);
        document.getElementById("one-balls").innerHTML = (nameOne+"'s Balls: "+activePlayerBalls[0]);
        document.getElementById("two-balls").innerHTML = (nameTwo+"'s Balls: "+activePlayerBalls[1]);
        document.getElementById("one-wickets").innerHTML = (nameOne+"'s Wickets:"+activePlayerWicket[0]);
        document.getElementById("two-wickets").innerHTML = (nameTwo+"'s Wickets:"+activePlayerWicket[1]);
        if(activePlayerWicket[activePlayer] === 10){
            activePlayer++;
            //activePlayerWickets = 0;
            //activePlayerBalls = 0;
            heading.innerHTML = (+activePlayerStr[activePlayer] + " is Playing");

        }
        if(activePlayerWicket[0] === 10){
            target = activePlayerScore[0]+1;
            console.log(target); 
            document.getElementById("target").innerHTML = ("Target: "+target);
         }
         if(activePlayerWicket[0] === 10 &&
            activePlayerWicket[1] === 10 &&
            activePlayerScore[0]>activePlayerScore[1]){
             winner = nameOne;
             console.log(winner);
         }
         if(activePlayerWicket[0] === 10 &&
            activePlayerWicket[1] === 10 &&
             activePlayerScore[0]<activePlayerScore[1]){
             winner = nameTwo;
             console.log(winner);
         }
         if(activePlayerWicket[0]===10 && activePlayerWicket[1]===0){
            document.getElementById("inning-change").innerHTML = ("Second Innings");
         }
         if(activePlayer === 2){
            //result show
           heading.innerHTML = (winner +" wins this Game");
        }
        }
    }



