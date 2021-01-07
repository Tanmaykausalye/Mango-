class Tree extends BaseClass {

  constructor(){

  super(1010,400,2,2)

  this.image1 = loadImage("sprites/tree.png")

  }


display(){

  imageMode(CENTER)
  image(this.image1,1010,345,500,500)


}

}