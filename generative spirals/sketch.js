var spin = 0.09;
var grow1 = spin * Math.floor(Math.random()* 2);
var grow2 = spin * Math.floor(Math.random()* 10);
var r = 1;

var grow = 0.09;



//const rando = random(100)
//c/onsole.log(rando);

//function place(){
  // for(i=1;i<5;i++){
  //   let picker;
  //   let myArray = [picker(i)]
  //     }

  
  let picker1 = Math.floor(Math.random() * 401);
  let picker2 = Math.floor(Math.random() * 401);
  let picker3 = Math.floor(Math.random() * 201);
  let picker4 = Math.floor(Math.random() * 201);
  let picker5 = Math.floor(Math.random() * 401);
  let picker6 = Math.floor(Math.random() * 401);
  let picker7 = Math.floor(Math.random() * 401);
  let picker8 = Math.floor(Math.random() * 401);
  let picker9 = Math.floor(Math.random() * 401);
  let picker10 = Math.floor(Math.random() * 401);


  let random_angle = Math.floor(Math.random()* 180);
  console.log(random_angle);
  console.log("picker1", picker1)
  console.log("picker2", picker2)


  //onsole.log(picker);
  var angle = random_angle;
//}



function setup() {
  createCanvas(400, 400);
  background(220);
  noFill();
  


}


function draw() {



  spiral(picker1, picker2, grow);
  spiral(picker3, picker4, grow);
   spiral(picker5, picker6, grow);
   spiral(picker7, picker8, grow);
   spiral(picker9, picker10, grow);
   //spiral(picker5, picker6, grow);
  //spiral(picker1, picker2, grow);
  //spiral(picker1, picker2, grow);

  //spiral(picker3, picker4, grow2);
  
}

function spiral(i,j, z){

  
  // i = picker1;
  // j = picker2;
  push();
  angle += spin;
  r = r + z;
  console.log(z);
  //r = noise(angle) * 100;
  // Polar to Cartesian Transformation
  var x = cos(angle)*r;
  var y = sin(angle)*r;
    translate(i, j);
    //line(0, 0, x, y);
    ellipse(x, y, 1, 1);
  pop();
}



