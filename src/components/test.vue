<template>
  <div id="scalet">
      <canvas @click="startcompute" id="myCanvas" height="300px" width="800px"></canvas>
      <div style="display:none">
        <img ref="conf1" src="@/assets/images/BaseStation.png">
        <img ref="conf2" src="@/assets/images/BaseStation.png">
        <img ref="conf3" src="@/assets/images/BaseStation.png">
        <img ref="conf4" src="@/assets/images/local_dw.png">
     </div>
     
  </div>
</template>
<script>

    export default {
        data () {
            return {
                   x1:400,   //第一个基站
                   y1:100,
                   d1:80,

                   x2:170,  //第二个基站
                   y2:150,
                   d2:70,

                   x3:220,  //第三个基站
                   y3:220,
                   d3:70,
             
            }
        },
        mounted(){
            console.info(this.trilateration);
             this.initcanvas();
           
             
        },
        components:{  
        },
        methods: {
          initcanvas(){
          
              var c=document.getElementById("myCanvas");
              var ctx=c.getContext("2d");
                  c.height=c.height;        

                ctx.beginPath();
                ctx.arc(this.x1,this.y1,this.d1,0, Math.PI * 2, false);
                ctx.stroke();
                let img1 = this.$refs.conf1
                ctx.drawImage(img1, this.x1-15,this.y1-39)
                
                ctx.moveTo(this.x1,this.y1); 
                ctx.lineTo(this.trilateration.x,this.trilateration.y);   
                ctx.stroke(); 

                ctx.beginPath();
                ctx.arc(this.x2,this.y2,this.d2,0, Math.PI * 2, false);
                ctx.stroke();

                let img2= this.$refs.conf2
                ctx.drawImage(img2, this.x2-15,this.y2-39);

                ctx.moveTo(this.x2,this.y2); 
                ctx.lineTo(this.trilateration.x,this.trilateration.y);   
                ctx.stroke(); 



                ctx.beginPath();
                ctx.arc(this.x3,this.y3,this.d3,0, Math.PI * 2, false);
                ctx.stroke();
                let img3 = this.$refs.conf3
                ctx.drawImage(img3, this.x3-15,this.y3-39);
            
                let img = this.$refs.conf4
                ctx.drawImage(img, this.trilateration.x-15,this.trilateration.y-32);

                ctx.moveTo(this.x3,this.y3); 
                ctx.lineTo(this.trilateration.x,this.trilateration.y);   
                ctx.stroke(); 

                

          },
          startcompute(){
              this.d1+=5;
              this.initcanvas();
          }
           
        },
        computed:{
            trilateration(){
                let x=0,y=0;
                 let a11 = 2*(this.x1-this.x3);
                 let a12 = 2*(this.y1-this.y3);
                 let b1=Math.pow(this.x1,2)-Math.pow(this.x3,2) +Math.pow(this.y1,2)-Math.pow(this.y3,2) +Math.pow(this.d3,2)-Math.pow(this.d1,2);
                 let a21 = 2*(this.x2-this.x3);
                 let a22 = 2*(this.y2-this.y3);
                 let b2 = Math.pow(this.x2,2)-Math.pow(this.x3,2) +Math.pow(this.y2,2)-Math.pow(this.y3,2) +Math.pow(this.d3,2)-Math.pow(this.d2,2);
                     x=(b1*a22-a12*b2)/(a11*a22-a12*a21);
                     y=(a11*b2-b1*a21)/(a11*a22-a12*a21);
                return {'x':x,'y':y};
            }
        }
    }
</script>
<style scoped>
   *{
            margin: 0;
            padding:0;
			}
			canvas{
				/*background: black;*/
				border: 2px solid #999 ;
	}
    #scalet{
        width: 100%;
        height: 100%;
        margin-top: 20px;
    }
    #myCanvas{
        left: 0;
        top: 0px;
    }
</style>