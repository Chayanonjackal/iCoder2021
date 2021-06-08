import { Component, OnInit } from '@angular/core';
import { ResponseStudentAll, Student, StudentAllCondition, StudentModel } from '../student';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  // student:Student = {
  //   name: '1234',
  //   tel: '1234',
  //   email: '1234',
  //   createDate : new Date()
  // }

  // students: Student[] = [
  //   {name:"aom" ,
  //   email: "aom@mail.com" ,
  //   tel: "0645788451"
  // },
  //   {name:"aom" ,
  //   email: "aom@mail.com" ,
  //   tel: "0645788451"
  // },
  //   {name:"aom" ,
  //   email: "aom@mail.com" ,
  //   tel: "0645788451"
  // },
  //   {name:"aom" ,
  //   email: "aom@mail.com" ,
  //   tel: "0645788451"
  // },
  //   {name:"aom" ,
  //   email: "aom@mail.com" ,
  //   tel: "0645788451"
  // },
  //   {name:"aom" ,
  //   email: "aom@mail.com" ,
  //   tel: "0645788451"
  // },

  // ]
  studentModels: StudentModel[]=[]

  nameFormControl = new FormControl()
  emailFormControl = new FormControl()
  telFormControl = new FormControl()

  studentConditionFormGroup = new FormGroup({
    name: this.nameFormControl,
    email: this.emailFormControl,
    tel: this.telFormControl
  })
  // inject
  pokemonUrl: string = '';

  // pokemonUrl
  constructor(public http: HttpClient) {
    // const x: any = '111'
    // // this.students.forEach(student =>{
    // //   student.name
    // // })
    // this.http.get<any>(' https://pokeapi.co/api/v2/pokemon/ditto')
    // .subscribe(response=>{
    //   this.pokemonUrl = response.sprites.front_default
    // });

   }
   clearStudent(){
     this.studentModels =[]
     this.studentConditionFormGroup.reset();

   }
   //<> เรียกเจนเนอริก
   queryStudent(){
    //  console.log(this.nameFormControl.value)
    //  console.log(this.emailFormControl.value)
    //  console.log(this.telFormControl.value)

      const name = this.nameFormControl.value;
      const email = this.emailFormControl.value;
      const tel = this.telFormControl.value;

      console.log(this.studentConditionFormGroup.value)


       const condition:StudentAllCondition= {};

    //  let httpParams = new HttpParams();
     if(name){ //ดุว่ามีค่าป่าว?
      condition.name = name;
     }
     if(email){
      condition.email =email;
     }
     if(tel){
      condition.tel = tel;
     }
     const  httpParams = new HttpParams({fromObject:(condition as any)});
     this.http.get<ResponseStudentAll>('/training-demo/student/all',
     {params: httpParams}).subscribe(response => {this.studentModels = response.result
     })
   }

  ngOnInit(): void {
  }
  // movement(el: HTMLElement){
  //   el.animate({transfrom:'translateX(100px)'},{duration:100})
  // }

}

