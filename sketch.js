var form,game,player
var database
var playerCountTeamA=0,playerCountTeamB=0
var bex,bexImg
var gameState=0
var allPlayerInfoTeamA,allPlayerInfoTeamB
var teams=["teamA","teamB"]
var previousTeam=null
var questionAnswers=[["What is your age ?","15"],["What is your fulll name ?","Anisha Hasolkar"]]
var start=0
var selectTeam
function preload(){
  bexImg=loadImage("images/Bex.3.5.png")
 
}
function setup() {
  database=firebase.database();
  createCanvas(displayWidth,displayHeight);

  bex=createSprite(600,400,10,10)
  bex.addImage(bexImg)
  bex.scale=0.2

  
  game=new Game();
  game.getState();
  game.start();
  
  
}

function draw() {
  background(255,255,255);  
    if(playerCountTeamA===2 && playerCountTeamB===2){
      game.updateState(1);
    }
    if(gameState===1){
      game.play();
      form.playbox.show(); 
    }

  }
