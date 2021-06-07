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
