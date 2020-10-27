var dog, happyDog, dogImg, happyDogImg, database, foodStock,x,m, w,foodS, m1;

function preload()
{
  dogImg = loadImage("images/Dog.png");
  happyDogImg = loadImage("images/happydog.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250, 250);
  dog.addImage("doggy", dogImg);
  dog.scale = 0.25;

  var foodS = database.ref("Food");
  foodS.on("value", readFood);
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){

    writeStock("up",m);
    dog.addImage(happyDogImg);
  }

  if(keyWentDown(DOWN_ARROW)){

    writeStock("dn",w);
    dog.addImage(happyDogImg);
  }

 
  drawSprites();
}

function readFood(data){
  x = data.val();
  m = x.milk;
  w = x.water;
  console.log(x)}

function writeStock(updown,m){
  if(updown==="dn"){
    database.ref("Food").set({
      milk: m + 1,
      water: w,
    })

  if(updown==="up"){
    database.ref("Food").set({
      milk: m - 1,
      water:m - 1 ,
    })

  
    }
  }
}