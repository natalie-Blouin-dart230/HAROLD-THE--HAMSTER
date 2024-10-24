let stars = [];
let planets = [];
let astronautY = 300; 
let astronautSpeed = 1; 
let astronautDirection = 1;  

function setup() {
  createCanvas(500, 600);
  
  //  stars
  for (let i = 0; i < 200; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(1, 4);
    let speed = random(0.5, 2);
    stars.push(new Star(x, y, size, speed));
  }

  //  planets
  planets.push(new Planet(190, 500, 80, color(100, 0, 200))); // Purple 
  planets.push(new Planet(350, 110, 120, color(0, 150, 255))); // Blue 
  planets.push(new Planet(50, 100, 85, color(255, 100, 0))); // Orange 
}

function draw() {
  background(14, 14, 46); //  background

  // stars
  for (let i = 0; i < stars.length; i++) {
    stars[i].move();
    stars[i].display();
  }

  for (let i = 0; i < planets.length; i++) {
    planets[i].display();
  }

 
  astronautY += astronautSpeed * astronautDirection;

  if (astronautY > 310 || astronautY < 290) {
    astronautDirection *= -1;
  }

  //  astronaut
  drawAstronaut();
}

//   stars
class Star {
  constructor(x, y, size, speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed; 
  }

  move() {
    this.y += this.speed; 

    if (this.y > height) {
      this.y = 0;
      this.x = random(width); 
    }
  }

  
  display() {
    fill(255); 
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }
}


class Planet {
  constructor(x, y, size, planetColor) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.planetColor = planetColor;
  }

  display() {
    fill(this.planetColor);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size); 

    fill(0, 100); 
    ellipse(this.x - this.size / 4, this.y - this.size / 4, this.size, this.size);}
}

// astronaut
function drawAstronaut() {
  let x = width / 2;  
  let y = astronautY;  
  strokeWeight(1)
  
  // Helmet
  fill(50, 65, 122);
  ellipse(x, y - 170, 150, 150);

  // Tail
  fill(255, 204, 153);
  ellipse(x, y + 40, 10, 15); // tail

  // Body
  fill(255, 204, 153);
  ellipse(x, y - 50, 150, 180); // Main body

  // Belly
  fill(255);
  ellipse(x, y - 30, 100, 120); // Belly

  // Head
  fill(255, 204, 153);
  ellipse(x, y - 160, 120, 100);
  strokeWeight(1)

  // Ears
  fill(255, 204, 153);
  ellipse(x - 40, y - 200, 40, 40); // Left ear
  ellipse(x + 40, y - 200, 40, 40); // Right ear

  // Inner ears
  fill(255, 182, 193);
  ellipse(x - 40, y - 200, 25, 25); // Left ear
  ellipse(x + 40, y - 200, 25, 25); // Right ear

  // Eyes
  fill(0);
  ellipse(x - 20, y - 165, 20, 30); // Left eye
  
  strokeWeight(0);
  fill(255, 204, 153);
  ellipse(x - 20, y - 159, 25, 20);
  
  fill(0);
  ellipse(x + 20, y - 165, 20, 30); // Right eye
  
  strokeWeight(0);
  fill(255, 204, 153);
  ellipse(x + 20, y - 158, 25, 20); // Right eye

  // Eye highlights
  fill(255, 255, 255);
  ellipse(x - 22, y - 174, 5, 5);
  ellipse(x + 19, y - 174, 5, 5);

  // Nose
  strokeWeight(1);
  fill(255, 100, 100);
  ellipse(x, y - 140, 20, 15);

  // Whiskers
  stroke(0);
  line(x - 20, y - 140, x - 60, y - 145);
  line(x - 20, y - 135, x - 60, y - 135);
  line(x - 20, y - 130, x - 60, y - 125);
  line(x + 20, y - 140, x + 60, y - 145);
  line(x + 20, y - 135, x + 60, y - 135);
  line(x + 20, y - 130, x + 60, y - 125);

  // Mouth
  fill(255, 100, 100);
  arc(x, y - 125, 20, 15, 0, PI, CHORD);

  // Paws
  fill(255, 204, 153);
  ellipse(x - 40, y - 30, 30, 20); // Left paw
  ellipse(x + 40, y - 30, 30, 20); // Right paw

  // Feet
  fill(255, 182, 193);
  ellipse(x - 25, y + 30, 30, 20); // Left foot
  ellipse(x + 25, y + 30, 30, 20); // Right foot

  // Helmet outline
  noFill();
  ellipse(x, y - 170, 150, 150);
}
