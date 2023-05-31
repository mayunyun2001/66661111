var monster_colors = "0c134f-1d267d-5c469c-d4adfc".split("-").map(a=>"#"+a)

class Monster{ //宣告一個怪物類別，名稱為Monster
    constructor(args){
        this.r =args.r || random(20,50) //設計怪物的主題，如果有傳參數args.r來設定怪物大小，沒有傳參數就以100為主
        this.p = args.p || createVector(random(width),random(height)) //建立一個向量，{x:width/2,y:height/2}
        this.v = args.v || createVector(random(-1,1,random))//一定的速度，如果沒有傳args參數，就會利用亂數抽出x,y軸的移動速度
        this.color = args.color || random(monster_colors)
        this.mode = random(["happy","bad"])//+++++++++++++++++++++++
        this.dead = false //代表活著
        this.timenum = 0 //延長時間讓它顯示死亡後的畫面
    }
    draw(){ //畫出元件
        if(this.dead==false){
        
            push() //重新設定圓點位置
                translate(this.p.x,this.p.y) //把原點(0,0)座標移動到物件中心位置
                fill(this.color)
                noStroke()
                ellipse(0,0,this.r)
                // stroke(this.color)
                // strokeWeight(4)
                //line(this.r/2,0,this.r,0)
                //+++++++++++++++++++++++++
                if(this.mode=="happy"){
                    fill(255)
                    ellipse(0,0,this.r/2)
                    fill(0)
                    ellipse(0,0,this.r/3)
                }else{
                    fill(255)
                    arc(0,0,this.r/2,this.r/2,0,PI)
                    fill(0)
                    arc(0,0,this.r/3,this.r/3,0,PI)
                }
                stroke(this.color)
                strokeWeight(4)
                noFill()
                //line(this.r/2,0,this.r,0)
                for(var j=0;j<8;j++){
                    rotate(PI/4)
                    beginShape()
                        for(var i=0;i<(this.r/2);i++){
                            vertex(this.r/2+i,sin(i/4+frameCount/8)*10)
                        }
            
                    endShape()
                }

            pop() //恢復原點到整個視窗的左上角
        }
        else{ //怪物死亡的畫面
            this.timenum=this.timenum+1
            push()
                translate(this.p.x,this.p.y) //把原點(0,0)座標移動到物件中心位置
                fill(this.color)
                noStroke()
                ellipse(0,0,this.r)
                stroke(255)
                stroke(this.color)
                strokeWeight(4)
                noFill()
                for(var j=0;j<8;j++){
                    rotate(PI/4)
                    line(this.r/2,0,this.r,0)
                }

            pop()
        }
    }

    update(){ //計算出移動元件後的位置
        this.p.add(this.v)
        //++++++++++++++++++++++碰壁彈回++++++++++
        if(this.p.x<=0 || this.p.x>=width){//x軸碰到左邊(<=0)，或是碰到右邊(>=width)
            this.v.x = -this.v.x //把速度方向改變
          }
          if(this.p.y<=0 || this.p.y>=height){//y軸碰到上邊(<=0)，或是碰到下邊(>=height)
            this.v.y = -this.v.y //把y軸方縣，速度方向改變
      
      
          }

    }
    isBallInRanger(x,y){//功能:判斷滑鼠按下的位置是否在物件的範圍內
        let d = dist(x,y,this.p.x,this.p.y) //計算兩點(滑鼠按下與物件中心點)之間的距離，放到d變數內
        if(d<this.r/2){
          return true //滑鼠與物件的距離小於物件的寬度，代表碰觸了，則傳回true的值
        }else{
          return false//滑鼠與物件的距離大於物件的寬度，代表沒有碰觸，則傳回false的值(未碰觸)
        } 
       }
    }        