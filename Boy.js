class Boy extends BaseClass
{
  constructor(x,y){
   super(x,y,50,50);
   this.image=loadImage("Images/boy.png");
  }
 display(){
  this.body.position.x=this.body.position.x;
  this.body.position.y=this.body.position.y;
  super.display();
 }
}