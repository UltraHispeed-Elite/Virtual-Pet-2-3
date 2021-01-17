//Create variables here
var dog,dogImg,dogImg1;
var database,foodS,foodStock
function preload()
{
  //load images here
  dogImg =loadImage("images/dogImg.png");
  dogImg1 =loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog = createSprite(250,250,150,150);
  dog.addImage(dogImg);
  dog.scale=0.1

  foodStock = database.ref('Food')
  foodStock.on("value", readStock)
}


function draw() {  
  background("green");
if(keyDown("up_arrow")){
  writeStock(foodS);
  dog.addImage(dogImg1);
}
  drawSprites();
  //add styles here
fill ("black")
text ("food Remaining"+foodS, 170, 200);
textSize=15;
text("note:press up arrow key to feed milk", 130,10,300,20);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x>=0){
    x=0
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  });
}

