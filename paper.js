class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

		this.image = loadImage("sprites/crumpledPaper.png");

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push();
			//image(this.image, this.x, this.y);
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			//ellipse(0,0,this.r, this.r);
			imageMode(CENTER)
			image(this.image, 0, 0, this.r, this.r)
			pop();
			
	}

}