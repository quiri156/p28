class tree
{
	constructor(x,y,w,h)
	{
		var options = {
			isStatic : true
		}
		this.w = w;
		this.h =h;
		
		this.image=loadImage("images/tree.png")
		this.body = Bodies.rectangle(x,y,w,h,options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;
			
			
			
			fill(255)
			imageMode(CENTER);
			image(this.image,pos.x ,pos.y,this.w,this.h)
			
			
			
	}

}