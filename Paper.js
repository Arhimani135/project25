class Paper
{
	constructor(x,y)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
	
		this.body=Bodies.circle(x, y , 8);
        //this.image
 		World.add(world, this.body);

	}
	display()
	{		
            this.body.position.x = Mouse.x;
            this.body.position.y = Mouse.y;

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}