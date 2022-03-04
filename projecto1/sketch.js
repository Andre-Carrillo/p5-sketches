let r = 60;
let colors = [0, 0, 0];

function setup(){

	createCanvas(500, 500);

}

function draw(){

	background(colors[0], colors[1], colors[2]);

	ellipse(width/2, height/2, r, r);
	if (mouseIsPressed){
		r+=1;
	}
}

// function mouseDragged(){
	
// 	r+=1;

// }
