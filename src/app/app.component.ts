import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'iCoder2021css';

  result = 0;
  actionBarNumber1 = 0;
  actionBarNumber2 = 10;
  actionBarNumber3 = 200;

  employee = {
    name: 'aom',
    code: 'cyn'
  };
  fiveBathList = [4,10,8];
  oneBathList:Number[] = [];
  summary = 0
  summary5Bath = 0

  tenBathList = [4,10,8,20,50];
  toFiveBathList:Number [] = [];
  exchangToFiveValue:Number [] = [] ;

  Sum(){
    // let sumCost = 0 ;
    // for (let index = 0; index < this.fiveBathList.length; index++) {
    //   sumCost = sumCost + this.fiveBathList[index]*5

    // }
    // this.summary = sumCost ;
   this.summary = this.fiveBathList.reduce((sumCost,num)=>{
      //sumCost = 0 num = 4  return 0+4*5
      // sumCost = 20 num = 10 return 20+10*5
      //sumcost = 70 num = 8 return 70+8*5
        return sumCost + num*5
    },0)
  }

  Sum5(){
    this.summary5Bath  = this.tenBathList.reduce((sumCost,num)=>{
        return sumCost +num*2
      },0)

  }

  tranform10BathtoBath(){
      this.toFiveBathList = this.tenBathList.map(num=>{
        return num*2
      })
  }


  tranform5BathtoBath(){
    this.oneBathList = this.fiveBathList.map(num=>{
      return num*5
    })
  }

  ngOnInit(): void{
     this.sumResult();
  }

  sumResult(){
    this.result = this.actionBarNumber1+this.actionBarNumber2+this.actionBarNumber3
  }

  // calBuffet(value:string){

  //   this.result = Number(value) *3/4 ;
  // }
}
