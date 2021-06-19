class mango{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		
		this.r=r
		this.image=loadImage("images/mango.png")
		this.body=Bodies.circle(x, y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;	
		
		imageMode(CENTER);
		
		image(this.image, mangoPos.x,mangoPos.y,this.r*2, this.r*2)
		
 }
}