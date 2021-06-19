class ground
{
	constructor()
	{
		var options={
			isStatic:true			
			}
		
		this.w=1300
		this.h=20
		this.body=Bodies.rectangle(750,600,this.w,this.h,options);
 		World.add(world, this.body);

	}
	display()
	{
			var groundPos=this.body.position;		
			rectMode(CENTER)
			rect(groundPos.x,groundPos.y,this.w, this.h);
			
			
	}

}