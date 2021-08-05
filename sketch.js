//Create variables here
var dogImage
var dogSprite
var database
var food
var button1
var button2
var milkImage
function preload()
{
	dogImage=loadImage("images/dogImg1.png")
  milkImage=loadImage("images/newmilk.png")
}

function setup() {
	createCanvas(800, 700);
 dogSprite=createSprite(400,350,50,50) 
 dogSprite.addImage(dogImage)
database=firebase.database()
 var foodref=database.ref("foodcount")
foodref.on("value",function(data){
food=data.val()
console.log(food)
})
button1=createButton("feed the dog")
button2=createButton("add the food")
}


function draw() {
background("orange")
displaymilkbottles()
textSize(23)
text("food remaing "+food,100,100)
  drawSprites();
  //add styles here
button1.mousePressed(()=>{
database.ref("/").update({
foodcount:food-1
})
})
button2.mousePressed(()=>{
  database.ref("/").update({
  foodcount:food+1
  })
  })
}
function displaymilkbottles()
{
var h=20
for(var i=1;i<=food;i=i+1)
{
image (milkImage,h,620,90,90)
h=h+65
}
}



