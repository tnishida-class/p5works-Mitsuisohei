// 最終課題を制作しよう
let balls = [];

let a1, a2;

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    noStroke();
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }
  snow();
  star(a1,a2,5)
}

function snow(){
  let dx = random(-5,20)
  let dy = random(2,4)
  if( dy < 2){
    dy = 3
  }
    const b = { x: random(windowWidth), y: 0, size:random(0, 15), vx: dx, vy: dy };
    balls.push(b);
}

function star(cx, cy, r){
  push();
  fill(255,255,0,100);
  noStroke();
  beginShape();
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI;
    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
  pop();
  a1 -= 8
  a2+= 8
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
