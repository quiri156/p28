class stone
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}
		
		this.r=r
		this.image=loadImage("images/stone.png");
		this.body=Bodies.circle(x,y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
		 
			fill(255,0,255)
			imageMode(CENTER);
			
			image(this.image,stonepos.x,stonepos.y,this.r*2, this.r*2)
		
			
	}

}