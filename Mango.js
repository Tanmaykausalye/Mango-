class Mango{

constructor(x,y){

var options={

isStatic : true

}


this.body = Bodies.circle(x,y,15,options) 

this.x = x
this.y = y

this.image2 = loadImage("sprites/mango.png")



}

display(){

     
     
     image(this.image2,this.x,this.y,30,30)
}
}