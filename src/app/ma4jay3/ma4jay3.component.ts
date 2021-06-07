import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ma4jay3',
  templateUrl: './ma4jay3.component.html',
  styleUrls: ['./ma4jay3.component.css']
})
export class Ma4jay3Component implements OnInit {
  result = 0;

  constructor() { }

  ngOnInit(): void {
  }
  calBuffet(value:string){

    this.result = Number(value) *3/4 ;
  }


}
