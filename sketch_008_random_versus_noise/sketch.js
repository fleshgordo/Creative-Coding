var x = 0;
var noiseScale = 0.01;
var width = 800;
var height = 600;

function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  x += 2;
  line(x, height, x, height - random(height / 2));
  line(x, height / 2, x, noise(x * noiseScale) * height / 2);
  if (x > width) {
    background(255);
    x = 0;
  }
}
