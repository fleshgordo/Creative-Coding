let data;

function preload() {
  data = loadJSON("data.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
}

function draw() {
  //console.log(data["person3"].age + data["person3"].name);
  //console.log();
  //console.log(data["person3"].location);
  var counter = 0;
  
  for (var key in data) {

    counter++;
    console.log(counter);
    var name = data[key].name;
    var age = int(data[key].age);
    var color = data[key].color;
    fill(color);
    ellipse(counter*40,40,age);
    console.log (name + " ... " + age);
  }
}
