const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 20;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}


var student
var gameState = 'class'
var office
var time = 0
function preload() {

boyAni = loadAnimation("images/boy1.png", "images/boy2.png", "images/boy3.png", "images/boy4.png", "images/boy5.png");
lockImg = loadImage("images/key1.png")
  lock2Img = loadImage("images/key2.png")

door1 = loadImage("images/door1.png")
door2 = loadImage("images/door2.png")

classImg = loadImage("images/classrom.jpg")
  officeImg = loadImage("images/off.jpg")
  libraryImg = loadImage("images/library.png")
  storeImg = loadImage("images/storeroom.png")
hammerImg = loadImage("images/hammer.png")
maskImg = loadImage("images/mask.png")
  gateImg = loadImage("images/gate.png")
  groundImg = loadImage("images/ground.jpg")
  roadImg = loadImage("images/road.jpg")
  houseImg = loadImage("images/house.png")

}

function setup() {
  createCanvas(displayWidth-20, displayHeight-20);

  edges = createEdgeSprites();

  ground1 = createSprite(150,750,5000,20)
  ground1.visible = false



door = createSprite(1250,460,20,20)
door.addImage("dooring",door1)
door.addImage("doorimg",door2)
door.scale = 1.5




  student = createSprite(100,100,30,50)
  //student.debug = true
  student.addAnimation("study", boyAni);
  student.scale = 1.4
  lock = createSprite(280,520,50,50)
   ///lock.debug = true
 lock.addImage(lockImg)
  lock.scale = 0.2
  




  mask = createSprite(200, 400, 50, 50)
  mask.addImage(maskImg)
  mask.scale = 0.3
  //mask.debug = true
  mask.visible = false

  lock2 = createSprite(700, 600, 20, 20)
  lock2.addImage(lock2Img)
  lock2.scale = 0.5
  //lock2.debug = true
  lock2.visible = false

  hammer = createSprite(700, 400, 20, 50)
  hammer.addImage(hammerImg)
  hammer.scale = 0.4
  //hammer.debug = true
  hammer.visible = false

  gate = createSprite(1100, 600, 20, 20)
  gate.addImage(gateImg)
  gate.visible = false

  house = createSprite(1000, 400, 20, 20)
  house.addImage(houseImg)
  house.visible = false

}

function draw() {


student.collide(edges)
student.collide(ground1)



  if (keyDown("space") && student.y >= 100) {
    student.velocityY = -12;
  }

  student.velocityY = student.velocityY + 0.8
  if (keyDown("up")) {
    student.y = student.y - 10

  }
  if (keyDown("down")) {
    student.y = student.y + 10

  }
  if (keyDown("left")) {
    student.x = student.x - 10

  }
  if (keyDown("right")) {
    student.x = student.x + 10

  }

 fill("BLACK")

//text("Time" + time,200,100)
//fill ("BLACK")







if(gameState === 'class'){

  background(classImg)

//time= time++
  textSize(50)
  text(" TAKE THE KEY AND GO TO THE DOOR ", 200, 50)
  text ("BOY HAD GOT LOCKED IN SCHOOL ",200,150)
  text(" TOMORROW ONWARDS LOCKDOWN", 200, 250)

  ground2 = createSprite(270, 550, 250, 20)
  ground2.visible = false

  ground3 = createSprite(650, 550, 250, 20)
  ground3.visible = false
  ground4 = createSprite(1100,550,250,20)
  ground4.visible = false



student.collide(ground2)
student.collide(ground3)
student.collide(ground4)

if (student.isTouching(lock)){
  lock.visible = false
console.log(lock.x)
}

}


if (student.isTouching(door) && gameState === 'class'){
  door.changeImage("dooring",door2);
  //door.delay(1000);
  gameState = 'office';

} 

if(gameState === 'office'){ 
  
  background(officeImg) 
  textSize(50)
  text(" TAKE THE KEY AND GO TO THE DOOR ", 200, 200)
//time = time ++
 student.scale = 1.5 

 door.changeImage("dooring",door1)
 door.x = 100
 
 ground5 = createSprite(280,480,400,20)
 ground5.visible = false
lock.visible = true

lock.x = 920
lock.y = 450

  door.y = 600
door.scale = 1.8
  student.collide(ground5)

  if (student.isTouching(lock)) {
    lock.destroy()
    console.log(lock.x)
  }

}





  if (student.isTouching(door) && gameState === 'office') {
    door.changeImage("dooring", door2);
    //door.delay(1000);
    gameState = 'library';
  }






  if (gameState === 'library') {
 
 background(libraryImg)
    textSize(50)
    text(" TAKE THE KEY AND GO TO THE DOOR ", 200, 200)

 lock2.visible = true
door.x = 1000
mask.visible = true

//time = time++

   if (student.isTouching(lock2)) {
     lock2.destroy()
     //console.log(lock2.x)
   }

    if (student.isTouching(mask)) {
      mask.destroy()
      //console.log(mask.x)
    }


  }






  if (student.isTouching(door) && gameState === 'library') {
    door.changeImage("dooring", door2);
    //door.delay(1000);
    gameState = 'storeroom';

  }

if(gameState === 'storeroom'){
background(storeImg)
  textSize(50)
  text(" TAKE THE HAMMER AND GO TO THE DOOR ", 200, 200)
// time = time++
hammer.visible = true
  door.x = 100
  door.y = 600
  if (student.isTouching(hammer)) {
    hammer.destroy();
    //console.log(mask.x)
  }

}



  if (student.isTouching(door) && gameState === 'storeroom') {
    door.changeImage("dooring", door2);
    //door.delay(1000);
    gameState = 'schoolout';

  }



  if (gameState === 'schoolout') {
  background(groundImg)
   
    textSize(50)

    text(" GO TO THE GATE ", 500, 200)

  door.destroy()
  gate.visible = true
  door.x = 500
  door.y = 500
  
  
  }





 if (student.isTouching(gate) && gameState === 'schoolout') {
  
   gate.destroy()
   gameState = 'home';

 }



  if (gameState === 'home') {
  background(roadImg)

  house.visible = true


  }

  if (student.isTouching(house) && gameState === 'home') {

    //gate.destroy()
    gameState = 'end';

  }


  if (gameState === 'end') {

    student.x = 1000000000000000000000000000
    student.y = 1000000000000000000000000000
    textSize(50)
    text(" VICTORY YOU REACHED HOME SAFELY ", 200, 200)
//time =   0

  }



 drawSprites();
}
