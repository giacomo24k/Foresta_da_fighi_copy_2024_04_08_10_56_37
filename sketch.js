/**

  Duplicate this sketch to start your project 🧪
  More info: https://dev.codemotionkids.com/libraries/diorama/docs/
  
  Creative Commons BY-SA

**/

function setup() {
  createCanvas3D (windowWidth, windowHeight);
  getOrbit().autoRotate = true;
  hideGrid()
  environment(FOREST);
  background3D("white"); 

  let albero = beginGroup();
  diffuse(3,226,3);
  // sphere(0, 3, 0, 2);
  align(TOP);
  capsule(0, 4, 0, 2.5, 4);
  diffuse(139,25,25);
  cylinder(0, 0, 0, 0.8, 5);
  endGroup();
  
  let lato = 100;
  align(BOTTOM);
  diffuse("#27800A")
  
  for (let i = 0; i < 100; i++) {
    let x = random(-lato/2,lato/2);
    let z = random(-lato/2,lato/2);
    let nuovoAlbero = clone(albero,x,0,z);       
    let scala = random(1,2);
    nuovoAlbero.setScale(scala);
  }

  
  
}

function draw() {
  // 🔍 Never create objects here, but don't forget to have it in your code:
  // leave empty for the moment
}

function windowResized() {

}