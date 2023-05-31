//定義一個bullet 物件的class

class Bullet{
    constructor(args){
        this.r =args.r || 10 //設計的飛彈有大有小時就傳參數，就傳參數args.r來設定飛彈大小，沒有船參數就以10為主
        this.p = args.p || shipP.copy()  //createVector(width/2,height/2) //建立一個向量，{x:width/2,y:height/2}
        this.v = args.v || createVector(mouseX-width/2,mouseY-height/2).limit(15)
        this.color = args.color || "#1982c4"
    }
    draw(){ //畫出物件程式碼
        push() 
            translate(this.p.x,this.p.y)
            fill(this.color)
            noStroke()
            ellipse(30,0,this.r)
        pop()
  
    }
    update(){ //計算出移動後的位置
        // this.p.x = this.p.x +this.v.x //x軸目前位置(this.p.x)加上x軸的移動速度(this.v.x)
        // this.p.y = this.p.y +this.v.y //y軸目前位置(this.p.y)加上y軸的移動速度(this.v.y)
        this.p.add(this.v)      
    }
  
  
  }