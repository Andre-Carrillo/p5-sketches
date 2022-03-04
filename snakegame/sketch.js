class World{
	
	constructor(lar, anc){
		this.grid= new Array(lar);
		//0->blank
		//1->head
		//2->snakepart
		//3->food
		for (let i=0; i<lar; i++){
			this.grid[i] = new Array(anc);
		}
	}
	
	add_snake(snake){
		this.snake = snake;
	}

	generate_food(){
		//generate a random position
		while(true){
			x = round(Math.random()*lar);
			y = round(Math.random()*lar);
			if(!([x, y] in this.snake.cells)){
				this.grid[x][y] = 3; //3 means that that cell is food
				break;
			}
		}
	}

	display(){
		for(let i=0; i<this.grid.length; i++){
			for (let j=0; j<this.grid[i].length; j++){
				
			}
		}
	}
}


class Snake{

	constructor(world){
		this.world = world;
		this.x=0;
		this.y=0;
		this.length=1;
		this.orientation=[0, 1];//false->0; true -> 1, to get coords
		this.isdead=false;
		this.positions = [[0, 0]]
	}

	change_direction(direction_tuple){
		this.orientation[0] += direction_tuple[0];
		this.orientation[1] += direction_tuple[1];
		
		//This regularizes the number if it goes longer than 1
		if (abs(this.orientation[0])>1){
			this.orientation[0] /= abs(this.orientation[0]);
		}
		if (abs(this.orientation[1])>1){
			this.orientation[1] /= abs(this.orientation[1]);
		}
	}

	eat(){
		this.length += 1;
	}

}


function setup(){

	createCanvas(500, 500);

	
}

function draw(){
	background(10,203, 40);
	ellipse(width/2, height/2, 50, 50);

}
